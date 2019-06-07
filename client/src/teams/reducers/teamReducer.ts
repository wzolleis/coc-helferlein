import { TeamState } from '../models/teamTypes';
import { Reducer } from 'redux';
import { AnyAction, isType } from 'typescript-fsa';
import { CalculateMatchesAction, FetchPlayerAction } from '../actions/teamActions';

export const INITIAL_TEAM_STATE: TeamState = {
  players: [],
  matches: []
};

export const teamReducer: Reducer<TeamState, AnyAction> = (
  state: TeamState = INITIAL_TEAM_STATE,
  action: AnyAction
): TeamState => {
  if (isType(action, FetchPlayerAction)) {
    return {
      ...state,
      players: action.payload.players
    };
  }

  if (isType(action, CalculateMatchesAction)) {
    return {
      ...state,
      matches: action.payload.matches
    };
  }
  return state;
};
