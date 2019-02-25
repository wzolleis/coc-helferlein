import { AuthState } from "../app/applicationTypes";
import { AuthAction } from "../actions";
import { Reducer } from "redux";
import { UserActions } from "../actions/actionTypes";


export const INITIAL_AUTH_STATE: AuthState = {
  user: undefined
};

const handleFetchUser = (state: AuthState, action: AuthAction): AuthState => {
  return {
    ...state,
    ...action.payload
  };
};

export const authReducer: Reducer<AuthState, AuthAction> =
  (state: AuthState = INITIAL_AUTH_STATE, action: AuthAction): AuthState => {
    console.log(action);


    switch (action.type) {
      case UserActions.FETCH_USER:
        return handleFetchUser(state, action);
      default:
        return state;
    }
  };