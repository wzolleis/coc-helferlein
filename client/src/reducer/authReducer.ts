import { AuthState } from "../app/applicationTypes";
import { AuthAction } from "../actions";
import { Reducer } from "redux";

export const INITIAL_AUTH_STATE: AuthState = {
  foo: ""
};

export const authReducer: Reducer<AuthState, AuthAction> =
  (state: AuthState = INITIAL_AUTH_STATE, action: AuthAction): AuthState => {
    console.log(action);
    switch (action.type) {
      default:
        return state;
    }
  };