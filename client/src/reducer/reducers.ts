import { combineReducers } from 'redux';
import { AppState } from '../app/applicationTypes';
import { authReducer, INITIAL_AUTH_STATE } from './authReducer';
import { clanReducer, INITIAL_CLAN_STATE } from './clanReducer';
import { INITIAL_TEAM_STATE, teamReducer } from '../teams/reducers/teamReducer';
import { reducer as formReducer } from 'redux-form';


const INITIAL_FORM_STATE = {};

export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE,
  clan: INITIAL_CLAN_STATE,
  form: INITIAL_FORM_STATE,
  teams: INITIAL_TEAM_STATE
};

const reducers = combineReducers({
  auth: authReducer,
  clan: clanReducer,
  form: formReducer,
  teams: teamReducer
});

export default reducers;
