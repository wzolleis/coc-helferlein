import { combineReducers } from "redux";
import { AppState, AuthState } from "../app/AppTypes";
import { authReducer } from "./authReducer";

const INITIAL_AUTH_STATE: AuthState = {
  name: ""
};

export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE
};


export const reducers = combineReducers(authReducer);