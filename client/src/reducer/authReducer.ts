import { AppState } from "../app/applicationTypes";
import { setName } from "../actions/authActions";
import { Reducer } from "redux";
import { isType } from "typescript-fsa";
import { AuthAction, AuthActionPayload } from "../actions/actionTypes";

const handleName = (state: AppState, payload: AuthActionPayload): AppState => {
  return {
    ...state,
    auth: {
      name: payload.name
    }
  };
};

export const authReducer: Reducer<AppState, AuthAction> = (state: AppState, action: AuthAction): AppState => {
  if (isType(action, setName)) {
    return handleName(state, action.payload);
  }
  return state;
};