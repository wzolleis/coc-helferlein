import { actionCreator } from '../../../app/actions/appActions';
import { FetchError } from '../../../common/commonTypes';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../app/applicationTypes';
import { AnyAction } from 'typescript-fsa';
import { CwlSeason } from '../models/cwl';
import { ALL_CLAN_DATA } from '../../../common/cocConstants';
import axios from 'axios';

export enum CwlActions {
    FETCH_CWL_INFO = 'FETCH_CWL_INFO',
}

interface FetchCwlInformationPayload {
    clanTag: string;
    cwlSeason?: CwlSeason;
}

interface FetchCwlInfoParams {
    clanTag: string;
}


export const FetchCwlInfoAction = actionCreator.async<FetchCwlInfoParams, FetchCwlInformationPayload, FetchError>(CwlActions.FETCH_CWL_INFO);

export const fetchCwlInfos = (clanTag: string) => {
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
            const response = await axios.get(`/api/cwl-seasons/2019-12/${clanTag}`);
            const cwlSeason: CwlSeason = response.data;
            if (cwlSeason) {
                dispatch(FetchCwlInfoAction.done(
                    {params: {clanTag}, result: {clanTag, cwlSeason}}));
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