import { actionCreator } from '../../actions';
import { PlayerModel } from '../models/teamTypes';
import { createPlayers } from '../data/players';
import { Action } from 'typescript-fsa';

interface FetchPlayerActionPayload {
  players: PlayerModel[]
}

export enum TeamActions {
  FETCH_PLAYERS = 'FETCH_PLAYERS'
}

export const FetchPlayerAction = actionCreator<FetchPlayerActionPayload>(TeamActions.FETCH_PLAYERS);

export const doFetchPlayers = (): Action<FetchPlayerActionPayload> => {
  return FetchPlayerAction({ players: createPlayers() });
};
