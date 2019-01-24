import actionCreatorFactory from "typescript-fsa";
import { AuthActionPayload } from "./actionTypes";

const actionCreator = actionCreatorFactory();


export const setName = actionCreator<AuthActionPayload>("SET_NAME");