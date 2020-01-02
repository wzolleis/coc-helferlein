import { ClanData } from './commonTypes';

export const TOMS_HUETTE_CLAN_TAG = 'QLGYVPQ9';
export const GESTOERT_ODER_GEIL_CLAN_TAG = 'JLCR9P9C';

export const TOMS_HUETTE_CLAN_DATA: ClanData = {
    clanTag: TOMS_HUETTE_CLAN_TAG,
    clanName: 'TOMS HUETTE',
    cwlFile: 'cwl_toms_huette.json'
};

export const GESTOERT_ODER_GEIL: ClanData = {
    clanTag: GESTOERT_ODER_GEIL_CLAN_TAG,
    clanName: 'Gestört oder Geil',
    cwlFile: 'cwl_toms_huette.json'
};

export const ALL_CLAN_DATA: ClanData[] = [
    TOMS_HUETTE_CLAN_DATA, GESTOERT_ODER_GEIL
];