import { TeamState } from '../teams/models/teamTypes';
import { ClanState } from './clanTypes';

export interface UserModel {
  googleId: string;
  userId: string;
  authType: string;
}

export interface Location {
  id: number,
  name: string,
  isCountry: boolean
}



export enum LoginState {
  UNDEFINED = 'UNDEFINED',
  LOGGED_IN = 'LOGGED_IN',
  LOGGED_OUT = 'LOGGED_OUT'
}

export interface AuthState {
  loginState: LoginState;
  user?: UserModel;
}


interface FormState {
}

export interface FormConfig<T> {
  form: string,
}

export interface FormValidationConfig<T, E> extends FormConfig<T> {
  validate: (T) => E
}

export interface AppState {
  auth: AuthState
  clan: ClanState
  form: FormState
  teams: TeamState
}
