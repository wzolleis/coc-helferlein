import actionCreatorFactory, { AnyAction } from 'typescript-fsa';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ClanActions, UserActions } from './actionTypes';
import { ClanModel, LoginState, UserModel } from '../app/applicationTypes';

export interface FetchUserResult {
  loginState: LoginState,
  user: UserModel
}

export interface FetchClanInfosResult {
  clans: ClanModel[]
}

const actionCreator = actionCreatorFactory();

export const fetchUser = actionCreator.async<undefined,
  FetchUserResult,
  undefined>(UserActions.FETCH_USER);
export const dofetchUser = (): ((
  dispatch: Dispatch<AnyAction>
) => void) => async dispatch => {
  dispatch(fetchUser.started());
  const res = await axios.get('/api/current_user');
  const user = res.data.user;

  // wenn user ausgeloggt ist, existert 'user' nicht.
  const loginState = !!user ? LoginState.LOGGED_IN : LoginState.LOGGED_OUT;
  const result: FetchUserResult = { loginState, user };
  dispatch(fetchUser.done({ result }));
};

export const fetchClanInfos = actionCreator.async<undefined, FetchClanInfosResult, undefined>(ClanActions.FETCH_CLAN_INFOS);

export const doFetchClanInfos = (): ((
  dispatch: Dispatch<AnyAction>
) => void) => async dispatch => {
  dispatch(fetchClanInfos.started());
  const res = await axios.get('api/clans');

  // todo - dummy daten
  const result: FetchClanInfosResult = {
    clans: res.data.clans
  };
  dispatch(fetchClanInfos.done({ result }));
};
