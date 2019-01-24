import { combineReducers } from "redux";
import { AppState } from "../app/applicationTypes";
import { authReducer, INITIAL_AUTH_STATE } from "./authReducer";


export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE
};


const reducers = combineReducers({
  auth: authReducer
});

export default reducers;