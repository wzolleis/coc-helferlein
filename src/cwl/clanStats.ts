import {CwlSeasonModel} from '../db/databaseSchemes';
import {ClanStats, CwlSeasonStats, TownHallStats} from './cwl';

const MAX_TH_LEVEL = 14;

export const calculateStats = (data: CwlSeasonModel): CwlSeasonStats => {


   const clanStats: ClanStats[] = data.clans.map((clan) => {
       const townHallStats: TownHallStats[] = initTownhallStats();
       clan.members.forEach((member) => {
            const clanTownHallStats = townHallStats.find((stats => stats.level === member.townHallLevel));
            if (clanTownHallStats) {
                clanTownHallStats.numberOfTownHalls++;
            }
            else {
                const thStats: TownHallStats = {
                    level: member.townHallLevel,
                    numberOfTownHalls: 1
                };
                townHallStats.push(thStats);
            }
       });

       const sorted = townHallStats
           .sort((a, b) => compareTownhallLevels(a, b))
           .filter(s => s.numberOfTownHalls > 0);

        return {
            tag: clan.tag,
            name: clan.name,
            townHallStats: sorted
        }
    });

   return {
        clanStats
    };
};

const compareTownhallLevels = (l1: TownHallStats, l2: TownHallStats) => {
    return l2.level - l1.level;
};

const initTownhallStats = (): TownHallStats[] => {
    const stats: TownHallStats[] = [];
    let i;
    for (i = 0; i < MAX_TH_LEVEL; i++) {
        stats[i] = {
            level: i + 1,
            numberOfTownHalls: 0
        }
    }
    return stats;
};