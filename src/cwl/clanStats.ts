import {CwlSeasonModel} from '../db/databaseSchemes';
import {CwlSeasonStats} from './cwl';

export const calculateStats = (data: CwlSeasonModel): CwlSeasonStats => {
    return {
        clanStats: []
    }
}