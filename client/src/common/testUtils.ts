import { AnyAction } from 'typescript-fsa';

export const actionTypes = (actions: AnyAction[]): string[] => actions.map((action => action.type));