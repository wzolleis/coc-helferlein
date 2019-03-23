import { Location } from '../../app/applicationTypes';

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

export interface ClanState {
  clans: ClanModel[]
}
