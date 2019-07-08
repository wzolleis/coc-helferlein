import { AuthState, LoginState } from '../applicationTypes';
import { fetchUser, FetchUserResult, loginUser } from '../actions/appActions';
import { Reducer } from 'redux';
import { Action, isType } from 'typescript-fsa';

export const INITIAL_AUTH_STATE: AuthState = {
  loginState: LoginState.LOGGED_OUT,
  user: undefined
};

export const authReducer: Reducer<AuthState, Action<any>> = (
  state: AuthState = INITIAL_AUTH_STATE,
  action: Action<any>
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

  if (isType(action, loginUser.started)) {
    return {
      ...state,
      loginState: LoginState.UNDEFINED,
      user: undefined
    };
  }

  if (isType(action, loginUser.done)) {
    const result: FetchUserResult = action.payload.result;
    return {
      ...state,
      ...result
    };
  }

  return state;
};
