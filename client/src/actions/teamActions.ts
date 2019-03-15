import { TeamActions } from './actionTypes';
import { actionCreator } from './index';
import { Dispatch } from 'redux';
import { AnyAction } from 'typescript-fsa';
import axios from 'axios';
import { PlayerModel } from '../app/teamTypes';

export interface FetchPlayersResult {
  players: PlayerModel[]
}

export const fetchPlayers = actionCreator.async<undefined, FetchPlayersResult, undefined>(TeamActions.FETCH_PLAYERS);

export const  doFetchPlayers = (): ((dispatch: Dispatch<AnyAction>) => void) => async dispatch => {
  dispatch(fetchPlayers.started());
  const res = await axios.get('/api/players');

  const result: FetchPlayersResult = {
    players: res.data.players
  };
  dispatch(fetchPlayers.done({ result }));
};
