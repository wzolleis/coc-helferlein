import { actionCreator } from '../../../app/actions/appActions';
import { FetchError } from '../../../common/commonTypes';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../app/applicationTypes';
import { AnyAction } from 'typescript-fsa';
import {CwlSeason, CwlSeasonGetResponse, CwlSeasonStats} from '../models/cwl';
import { ALL_CLAN_DATA } from '../../../common/cocConstants';
import axios, {AxiosResponse} from 'axios';

export enum CwlActions {
    FETCH_CWL_INFO = 'FETCH_CWL_INFO',
}

interface FetchCwlInformationPayload {
    clanTag: string;
    cwlSeason?: CwlSeason;
    cwlStats?: CwlSeasonStats;
}

interface FetchCwlInfoParams {
    clanTag: string;
}


export const FetchCwlInfoAction = actionCreator.async<FetchCwlInfoParams, FetchCwlInformationPayload, FetchError>(CwlActions.FETCH_CWL_INFO);

export const fetchCwlInfos = (clanTag: string, season: string) => {
    return async (dispatch: ThunkDispatch<AppState, {}, AnyAction>) => {
        dispatch(FetchCwlInfoAction.started({clanTag}));
        const clanData = ALL_CLAN_DATA.find(clan => clan.clanTag === clanTag);
        if (!clanData) {
            dispatch(FetchCwlInfoAction.failed({
                params: {clanTag}, error: {
                    status: 500,
                    statusTxt: 'Clantag nicht gefunden'
                }
            }));
        } else {
            const response: AxiosResponse<CwlSeasonGetResponse> = await axios.get(`/api/cwl-seasons/${season}/${clanTag}`);
            const {season: cwlSeason, stats: cwlStats} = response.data;
            if (season) {
                dispatch(FetchCwlInfoAction.done(
                    {params: {clanTag}, result: {clanTag, cwlSeason, cwlStats}}));
            } else {
                dispatch(FetchCwlInfoAction.failed({
                    params: {clanTag}, error: {
                        statusTxt: 'Keine Daten',
                        status: 404
                    }
                }));
            }
        }
    };
};