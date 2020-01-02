import {CwlSeason, CwlSeasonStats} from './cwl';

export interface CwlState {
    clanTag: string;
    cwlSeason?: CwlSeason;
    stats?: CwlSeasonStats;
}