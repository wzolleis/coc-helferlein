import { AuthState } from "../app/applicationTypes";
import { setName } from "../actions/authActions";
import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { AuthAction, AuthActionPayload } from "../actions/actionTypes";

const handleName = (state: AuthState, payload: AuthActionPayload): AuthState => {
  return {
    ...state,
    name: payload.name
  };
};

export const INITIAL_AUTH_STATE: AuthState = {
  name: ""
};

export const authReducer: Reducer<AuthState, AuthAction> = (state: AuthState = INITIAL_AUTH_STATE, action: AuthAction): AuthState => {
  if (isType(action, setName)) {
    return handleName(state, action.payload);
  }
  return state;
};