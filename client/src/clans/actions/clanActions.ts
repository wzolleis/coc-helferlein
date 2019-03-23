import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import axios from 'axios';
import { actionCreator } from '../../app/actions/appActions';
import { ClanModel } from '../models/clanTypes';

export interface FetchClanInfosResult {
  clans: ClanModel[]
}

export enum ClanActions {
  FETCH_CLAN_INFOS = 'FETCH_CLAN_INFOS'
}

export const fetchClanInfos = actionCreator.async<undefined, FetchClanInfosResult, undefined>(ClanActions.FETCH_CLAN_INFOS);
export const doFetchClanInfos = (): ((
  dispatch: Dispatch<AnyAction>
) => void) => async dispatch => {
  dispatch(fetchClanInfos.started());
  const res = await axios.get('api/clans');

  const result: FetchClanInfosResult = {
    clans: res.data.clans
  };
  dispatch(fetchClanInfos.done({ result }));
};