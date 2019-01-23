import { AnyAction } from "typescript-fsa";
import { Reducer } from "redux";
import { AppState } from "../app/Types";


export const INITAL_STATE: AppState = {};

export const reducer: Reducer<AppState, AnyAction> = (state: AppState, _: AnyAction): AppState => {
  return state;
};

