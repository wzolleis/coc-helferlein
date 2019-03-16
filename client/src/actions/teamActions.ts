import { TeamActions } from './actionTypes';
import { actionCreator } from './index';
import { PlayerModel } from '../app/teamTypes';
import { createPlayers } from '../data/players';

export const FetchPlayerAction = actionCreator<{ players: PlayerModel[] }>(TeamActions.FETCH_PLAYERS);

export const doFetchPlayers = () => {
  return FetchPlayerAction({ players: createPlayers() });
};
