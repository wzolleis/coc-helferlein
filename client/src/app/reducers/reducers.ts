import { combineReducers } from 'redux';
import { AppState } from '../applicationTypes';
import { authReducer, INITIAL_AUTH_STATE } from './authReducer';
import { INITIAL_TEAM_STATE, teamReducer } from '../../teams/reducers/teamReducer';
import { reducer as formReducer } from 'redux-form';


const INITIAL_FORM_STATE = {};

export const INITIAL_STATE: AppState = {
  auth: INITIAL_AUTH_STATE,
  form: INITIAL_FORM_STATE,
  teams: INITIAL_TEAM_STATE
};

const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  teams: teamReducer
});

export default reducers;
