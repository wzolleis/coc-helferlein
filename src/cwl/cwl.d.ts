import { CwlSeasonModel } from '../db/databaseSchemes';

export interface CwlSeason {
    state: string;
    season: string;
    clans: Clan[];
    rounds: CwlRound[];
}

export type WarTag = string;

export interface CwlRound {
    wartags: WarTag[];
}

export interface ClanBadges {
    small: string;
    large: string;
    medium: string;
}

export interface ClanMember {
    tag: string;
    name: string;
    townHallLevel: number;
}

export interface Clan {
    tag: string;
    name: string;
    badgeUrls: ClanBadges;
    members: ClanMember[];
}

export interface TownHallStats {
    level: number;
    numberOfTownHalls: number;
}

export interface ClanStats {
    tag: string;
    townHallStats: TownHallStats[];
}

export interface CwlSeasonStats {
    clanStats: ClanStats[];
}

export interface CwlSeasonGetResponse {
    season: CwlSeason;
    stats: CwlSeasonStats;
}

export type OptionalCwlSeasonData = CwlSeasonModel | null;
