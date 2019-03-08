import { combineReducers } from 'redux';
import { AppState } from '../app/applicationTypes';
import { authReducer, INITIAL_AUTH_STATE } from './authReducer';
import { clanReducer, INITIAL_CLAN_STATE } from './clanReducer';
import { reducer as formReducer } from 'redux-form';


const INITIAL_FORM_STATE = {};

export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE,
  clan: INITIAL_CLAN_STATE,
  form: INITIAL_FORM_STATE
};

const reducers = combineReducers({
  auth: authReducer,
  clan: clanReducer,
  form: formReducer
});

export default reducers;
