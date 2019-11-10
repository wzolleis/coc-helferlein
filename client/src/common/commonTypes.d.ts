export interface FetchError {
    status: number;
    statusTxt: string;
}

interface ClanData {
    clanTag: string,
    clanName: string,
    cwlFile: string
}