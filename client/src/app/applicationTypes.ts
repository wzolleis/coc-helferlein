import { TeamState } from '../teams/models/teamTypes';

export interface UserModel {
  googleId: string;
  userId: string;
  authType: string;
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
  form: FormState
  teams: TeamState
}
