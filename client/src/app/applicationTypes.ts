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

export interface ClanModel {
  tag: string,
  name: string,
  location: Location,
  badgeUrls: {
    small: string,
    large: string,
    medium: string
  },
  clanLevel: number,
  clanPoints: number,
  clanVersusPoints: number,
  members: number,
  type: string,
  requiredTrophies: number,
  warFrequency: string,
  warWinStreak: number,
  warWins: number,
  warTies: number,
  warLosses: number,
  isWarLogPublic: boolean,
  description: string
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

export interface ClanState {
  clans: ClanModel[]
}

interface FormState {

}

export interface AppState {
  auth: AuthState
  clan: ClanState
  form: FormState
}
