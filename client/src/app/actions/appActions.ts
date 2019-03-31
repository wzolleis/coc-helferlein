import { LoginState, UserModel } from '../applicationTypes';
import { Dispatch } from 'redux';
import actionCreatorFactory, { Action } from 'typescript-fsa';
import axios from 'axios';

export interface FetchUserResult {
  loginState: LoginState,
  user: UserModel
}

export const actionCreator = actionCreatorFactory();

export enum UserActions {
  FETCH_USER = 'FETCH_USER'
}

export const fetchUser = actionCreator.async<{},
  FetchUserResult,
  {}>(UserActions.FETCH_USER);

export const dofetchUser = (): ((
  dispatch: Dispatch<Action<any>>
) => void) => async dispatch => {
  dispatch(fetchUser.started({}));
  const res = await axios.get('/api/current_user');
  const user = res.data.user;

  // wenn user ausgeloggt ist, existert 'user' nicht.
  const loginState = !!user ? LoginState.LOGGED_IN : LoginState.LOGGED_OUT;
  const result: FetchUserResult = { loginState, user };
  dispatch(fetchUser.done({ params: {}, result }));
};