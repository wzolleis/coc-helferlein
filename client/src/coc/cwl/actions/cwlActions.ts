import { actionCreator } from '../../../app/actions/appActions';
import { FetchError } from '../../../common/commonTypes';

export enum CwlActions {
    FETCH_CWL_INFO = 'FETCH_CWL_INFO',
}
interface FetchCwlInformationPayload {
    clanTag: string;
}

interface FetchCwlInfoParams {
    clanTag: string;
}




export const FetchCwlInfoAction = actionCreator.async<FetchCwlInfoParams, FetchCwlInformationPayload, FetchError>(CwlActions.FETCH_CWL_INFO);

export const fetchCwlInfos = (clanTag: string) => {
    return (dispatch) => {
        dispatch(FetchCwlInfoAction.started({clanTag}));
        dispatch(FetchCwlInfoAction.done({params: {clanTag}, result: {clanTag}}));
    }
};