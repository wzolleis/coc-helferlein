import React from 'react';
import {ClanStats, CwlSeasonStats, TownHallStats} from '../models/cwl';
import {useSelector} from 'react-redux';
import {AppState} from '../../../app/applicationTypes';

export const ClanStatsComponent: React.FC = () => {
    const stats: CwlSeasonStats | undefined = useSelector((state: AppState) => state.cwl.stats);
    if (!stats) {
        return ( <div>Empty</div>);
    }

    const renderTownhallStats = (townhallStats: TownHallStats) => {
        return (
            <div>
                {townhallStats.level} - {townhallStats.numberOfTownHalls}
            </div>
        )
    };

    const renderOne = (statistic: ClanStats) => {
        return (
            <div>
            <h2>{statistic.name}</h2>
                <div>
                    {statistic.townHallStats.map(renderTownhallStats)}
                </div>
            </div>
        );
    };

    const renderStatistics = () => {
        return (
            <div>
                <div>
                    {stats?.clanStats.map(renderOne)}
                </div>
            </div>
        );
    };

    return (
        <div>
            <h2>Stats!</h2>
                {renderStatistics()}
        </div>
    );
};