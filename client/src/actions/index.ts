import { Action } from "typescript-fsa";
import axios from "axios";
import { Dispatch } from "redux";
import { UserActions } from "./actionTypes";

export interface AuthAction extends Action<{}> {
}


export const fetchUser = (): (dispatch: Dispatch<AuthAction>) => void => {
  return (dispatch: Dispatch<AuthAction>) => {
    axios.get("api/current_user")
      .then(res => dispatch({
        type: UserActions.FETCH_USER,
        payload: res
      }));
  };
};