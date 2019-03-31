import { Reducer } from 'redux';
import { Action, isType } from 'typescript-fsa';
import { fetchClanInfos } from '../actions/clanActions';
import { ClanState } from '../models/clanTypes';

export const INITIAL_CLAN_STATE: ClanState = {
  clans: []
};

export const clanReducer: Reducer<ClanState, Action<any>> = (
  state: ClanState = INITIAL_CLAN_STATE,
  action: Action<any>
): ClanState => {
  if (isType(action, fetchClanInfos.started)) {
    return {
      ...state,
      clans: []
    };
  }

  if (isType(action, fetchClanInfos.done)) {
    return {
      ...state,
      clans: action.payload.result.clans
    };
  }
  return state;
};