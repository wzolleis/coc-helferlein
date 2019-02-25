export interface UserModel {
  googleId: string,
  userid: string,
  authType: string
}

export interface AuthState {
  user?: UserModel
}


export interface AppState {
  auth: AuthState
}
