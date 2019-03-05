import { combineReducers } from 'redux';
import { AppState } from '../app/applicationTypes';
import { authReducer, INITIAL_AUTH_STATE } from './authReducer';
import { clanReducer, INITIAL_CLAN_STATE } from './clanReducer';

export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE,
  clan: INITIAL_CLAN_STATE
};

const reducers = combineReducers({
  auth: authReducer,
  clan: clanReducer
});

export default reducers;
