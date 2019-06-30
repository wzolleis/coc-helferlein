export interface User {
  localId?: string;
  googleId?: string;
  authType: AuthType;
}

export enum AuthType {
  'google', 'local'
}
