import { AuthState, LoginState } from '../applicationTypes';
import { fetchUser, FetchUserResult } from '../actions/appActions';
import { Reducer } from 'redux';
import { AnyAction, isType } from 'typescript-fsa';

export const INITIAL_AUTH_STATE: AuthState = {
  loginState: LoginState.LOGGED_OUT,
  user: undefined
};

export const authReducer: Reducer<AuthState, AnyAction> = (
  state: AuthState = INITIAL_AUTH_STATE,
  action: AnyAction
): AuthState => {
  if (isType(action, fetchUser.started)) {
    return {
      ...state,
      loginState: LoginState.UNDEFINED,
      user: undefined
    };
  }

  if (isType(action, fetchUser.done)) {
    const result: FetchUserResult = action.payload.result;
    return {
      ...state,
      ...result
    };
  }

  return state;
};
