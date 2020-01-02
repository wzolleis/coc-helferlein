import React from 'react';
import {CwlSeasonStats} from '../models/cwl';

export interface ClanStatsProps {
    stats: CwlSeasonStats;
}

export const ClanStatsComponent: React.FC<ClanStatsProps> = (props) => {
    return <div>Stats!</div>
};