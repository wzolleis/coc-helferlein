import actionCreatorFactory, { AnyAction } from "typescript-fsa";
import axios from "axios";
import { Dispatch } from "redux";
import { UserActions } from "./actionTypes";
import { UserModel } from "../app/applicationTypes";

export interface FetchUserResult {
  loggedIn: boolean,
  user: UserModel
}

const actionCreator = actionCreatorFactory();

export const fetchUser = actionCreator.async<undefined, FetchUserResult, undefined>(UserActions.FETCH_USER);
export const dofetchUser = (): (dispatch: Dispatch<AnyAction>) => void => async dispatch => {
  dispatch(fetchUser.started());
  const res = await axios.get("/api/current_user");
  const data = res.data;
  const loggedIn = !!data.user && !!data.user.userId;
  const fetchUserResult: FetchUserResult = {
    loggedIn,
    user: data.user
  };
  dispatch(fetchUser.done({
    result: fetchUserResult
  }));
};

