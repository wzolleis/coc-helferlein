import { CwlState } from '../models/cwlTypes';
import { AnyAction, isType } from 'typescript-fsa';
import { Reducer } from 'redux';
import { FetchCwlInfoAction } from '../actions/cwlActions';

export const INITIAL_CWL_STATE: CwlState = {
    clanTag: '',
    cwlSeason: undefined
};

export const cwlReducer: Reducer<CwlState, AnyAction> = (
    state: CwlState = INITIAL_CWL_STATE,
    action: AnyAction
): CwlState => {
    if (isType(action, FetchCwlInfoAction.done)) {
        return {
            ...state,
            clanTag: action.payload.result.clanTag,
            cwlSeason: action.payload.result.cwlSeason
        }
    }
    if (isType(action, FetchCwlInfoAction.failed)) {
        return {
            ...state,
            ...INITIAL_CWL_STATE
        }
    }
    return state;
};