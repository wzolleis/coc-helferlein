import { TeamState } from '../app/teamTypes';
import { Reducer } from 'redux';
import { AnyAction } from 'typescript-fsa';

export const INITIAL_TEAM_STATE: TeamState = {
  players: []
};

export const teamReducer: Reducer<TeamState, AnyAction> = (
  state: TeamState = INITIAL_TEAM_STATE,
  action: AnyAction
): TeamState => {

  return state;
};
