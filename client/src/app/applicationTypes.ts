export interface UserModel {
  googleId: string,
  userId: string,
  authType: string
}

export interface AuthState {
  loggedIn: boolean,
  user?: UserModel
}


export interface AppState {
  auth: AuthState
}
