import { Reducer } from 'redux';
import { AnyAction, isType } from 'typescript-fsa';
import { fetchClanInfos } from '../actions';
import { ClanState } from '../app/clanTypes';

export const INITIAL_CLAN_STATE: ClanState = {
  clans: []
};

export const clanReducer: Reducer<ClanState, AnyAction> = (
  state: ClanState = INITIAL_CLAN_STATE,
  action: AnyAction
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