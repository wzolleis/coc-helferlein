import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../app/applicationTypes';
import { CwlState } from '../models/cwlTypes';

export const CwlOverviewComponent = () => {

    const cwlState: CwlState = useSelector((state: AppState) => state.cwl);

    return (
        <div>
            <h1>Clan War League</h1>
            <div>details {cwlState.clanTag} </div>
        </div>
    )
};