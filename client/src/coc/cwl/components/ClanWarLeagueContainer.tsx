import React from 'react';
import ClanSelectionComponent from './ClanSelectionComponent';
import { fetchCwlInfos } from '../actions/cwlActions';
import { useDispatch } from 'react-redux';
import { CwlDetailsComponent } from './CwlDetailsComponent';

const ClanWarLeagueContainer: React.FC = () => {
    const dispatch = useDispatch();
    const onFetchCwlInfos = (clanTag: string) => dispatch(fetchCwlInfos(clanTag));

    return (
        <div>
            <h1>Clan War League</h1>
            <ClanSelectionComponent onFetchCwlInfo={onFetchCwlInfos}/>
            <CwlDetailsComponent/>
        </div>
    );
};

export default ClanWarLeagueContainer;