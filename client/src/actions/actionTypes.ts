import { Action } from "typescript-fsa";

export interface AuthActionPayload {
  name: string
}

export interface AuthAction extends Action<AuthActionPayload> {
}