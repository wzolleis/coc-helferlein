import { combineReducers } from 'redux';
import { AppState } from '../applicationTypes';
import { authReducer, INITIAL_AUTH_STATE } from './authReducer';
import { INITIAL_TEAM_STATE, teamReducer } from '../../teams/reducers/teamReducer';
import { reducer as formReducer } from 'redux-form';
import { cwlReducer, INITIAL_CWL_STATE } from '../../coc/cwl/reducer/cwlReducer';



export const INITIAL_STATE: AppState = {
    auth: INITIAL_AUTH_STATE,
    teams: INITIAL_TEAM_STATE,
    cwl: INITIAL_CWL_STATE
};

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    teams: teamReducer,
    cwl: cwlReducer
});

export default reducers;
