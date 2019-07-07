export interface User {
  localId?: string;
  googleId?: string;
  authType: AuthType;
  password?: string;
  name?: string;
}

export enum AuthType {
  'google', 'local'
}
