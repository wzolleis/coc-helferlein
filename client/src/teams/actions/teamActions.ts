import { actionCreator } from '../../app/actions/appActions';
import { MatchModel, PlayerModel } from '../models/teamTypes';
import { createPlayers } from '../data/players';
import { Action } from 'typescript-fsa';
import { calculateMatches } from '../other/teamCalculation';

interface FetchPlayerActionPayload {
  players: PlayerModel[]
}

interface CalculateMatchesActionPayload {
  matches: MatchModel[]
}

export enum TeamActions {
  FETCH_PLAYERS = 'FETCH_PLAYERS',
  CALCULATE_MATCHES = 'CALCULATE_MATCHES'
}

export const FetchPlayerAction = actionCreator<FetchPlayerActionPayload>(TeamActions.FETCH_PLAYERS);
export const CalculateMatchesAction = actionCreator<CalculateMatchesActionPayload>(TeamActions.CALCULATE_MATCHES);

export const doFetchPlayers = (): Action<FetchPlayerActionPayload> => {
  return FetchPlayerAction({ players: createPlayers() });
};

export const doCalculateMatches = (players: PlayerModel[]): Action<CalculateMatchesActionPayload> => {
  const matches = calculateMatches(players);
  return CalculateMatchesAction({ matches });
};