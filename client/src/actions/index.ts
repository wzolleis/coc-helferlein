import actionCreatorFactory, { AnyAction } from 'typescript-fsa';
import axios from 'axios';
import { Dispatch } from 'redux';
import { UserActions } from './actionTypes';
import { LoginState, UserModel } from '../app/applicationTypes';

export interface FetchUserResult {
  loginState: LoginState,
  user: UserModel
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
