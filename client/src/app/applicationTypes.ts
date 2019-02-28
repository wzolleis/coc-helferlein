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

export interface AppState {
  auth: AuthState;
}
