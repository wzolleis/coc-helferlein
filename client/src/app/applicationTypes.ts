export type AuthState = {
  name: string
};

export type AppState = {
  auth: AuthState
} | undefined;
