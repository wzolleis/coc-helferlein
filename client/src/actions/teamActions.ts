import { TeamActions } from './actionTypes';
import { actionCreator } from './index';
import { PlayerModel } from '../app/teamTypes';
import { createPlayers } from '../data/players';
import { Action } from 'typescript-fsa';

interface FetchPlayerActionPayload {
  players: PlayerModel[]
}

export const FetchPlayerAction = actionCreator<FetchPlayerActionPayload>(TeamActions.FETCH_PLAYERS);

export const doFetchPlayers = (): Action<FetchPlayerActionPayload> => {
  return FetchPlayerAction({ players: createPlayers() });
};
