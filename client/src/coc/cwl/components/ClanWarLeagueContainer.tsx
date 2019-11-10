import React from 'react';
import ClanSelectionComponent from './ClanSelectionComponent';
import { fetchCwlInfos } from '../actions/cwlActions';
import { useDispatch } from 'react-redux';

const ClanWarLeagueContainer: React.FC = () => {
    const dispatch = useDispatch();
    const onFetchCwlInfos = (clanTag: string) => dispatch(fetchCwlInfos(clanTag));

    return (
        <div>
            <h1>Clan War League</h1>
            <ClanSelectionComponent onFetchCwlInfo={onFetchCwlInfos}/>
        </div>
    );
};

export default ClanWarLeagueContainer;