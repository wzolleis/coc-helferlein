import React from 'react';
import ClanSelectionComponent from './ClanSelectionComponent';
import { fetchCwlInfos } from '../actions/cwlActions';

const ClanWarLeagueContainer: React.FC = () => {
    return (
        <div>
            <h1>Clan War League</h1>
            <ClanSelectionComponent onFetchCwlInfo={fetchCwlInfos}/>
        </div>
    );
};

export default ClanWarLeagueContainer;