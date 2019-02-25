import { Action } from "typescript-fsa";
import axios from "axios";
import { Dispatch } from "redux";
import { UserActions } from "./actionTypes";
import { UserModel } from "../app/applicationTypes";


export interface AuthAction extends Action<UserModel> {
}


export const fetchUser = (): (dispatch: Dispatch<AuthAction>) => void => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({
    type: UserActions.FETCH_USER,
    payload: res.data
  });
};