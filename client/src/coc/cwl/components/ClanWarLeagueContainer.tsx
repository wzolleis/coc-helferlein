import React from 'react';
import ClanSelectionComponent from './ClanSelectionComponent';
import { fetchCwlInfos } from '../actions/cwlActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const ClanWarLeagueContainer: React.FC = () => {
    const dispatch = useDispatch();
    const onFetchCwlInfos = (clanTag: string) => dispatch(fetchCwlInfos(clanTag));
    const history = useHistory();
    const navigate = (path: string) => history.push(path);

    return (
        <div>
            <h1>Clan War League</h1>
            <ClanSelectionComponent navigate={navigate} onFetchCwlInfo={onFetchCwlInfos}/>
        </div>
    );
};

export default ClanWarLeagueContainer;