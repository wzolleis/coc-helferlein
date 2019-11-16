import { actionCreator } from '../../../app/actions/appActions';
import { ClanData, FetchError } from '../../../common/commonTypes';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../../app/applicationTypes';
import { AnyAction } from 'typescript-fsa';
import { CwlSeason } from '../models/cwl';
import { ALL_CLAN_DATA, TOMS_HUETTE_CLAN_DATA } from '../../../common/cocConstants';

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
    return (dispatch: ThunkDispatch<AppState, {}, AnyAction >) => {
        dispatch(FetchCwlInfoAction.started({clanTag}));
        const cwlSeason = readCwlSeason(clanTag);
        dispatch(FetchCwlInfoAction.done({params: {clanTag}, result: {clanTag, cwlSeason}}));
    }
};

const readCwlSeason = (clanTag: string) => {
    const clanData = ALL_CLAN_DATA.find(clan => clan.clanTag === clanTag);
    if (clanData) {
        const file = `${process.env.PUBLIC_URL}/${clanData.cwlFile}`;
        const season: CwlSeason = JSON.parse(file);
        return season;
    }
    return undefined;
};