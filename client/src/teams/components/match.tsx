import { MatchModel, TeamModel } from '../models/teamTypes';
import React from 'react';

export const renderMatch = (match: MatchModel) => {
  const playersHome: string = playerNames(match.home());
  const playersAway: string = playerNames(match.away());
  const playersTxt: string = `${match.diff}: ${playersHome} -> ${playersAway}`;
  return (
    <div key={match.id}>
      <h4>
        {playersTxt}
      </h4>
    </div>
  );
};

const playerNames = ({ players }: TeamModel): string => {
  return players.reduce((acc, p) => {
    return acc + p.name + ', ';
  }, '');
};