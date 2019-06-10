import React, { Component } from 'react';
import { MatchModel, TeamModel } from '../models/teamTypes';


export interface MatchListProps {
  matches: MatchModel[]
}


class MatchList extends Component<MatchListProps> {
  renderMatch = (match: MatchModel) => {
    const playersHome: string = this.playerNames(match.home());
    const playersAway: string = this.playerNames(match.away());
    const playersTxt: string = `${match.diff}: ${playersHome} -> ${playersAway}`;
    return (
      <div key={match.id}>
        <h4>
          {playersTxt}
        </h4>
      </div>
    );
  };

  playerNames = ({ players }: TeamModel): string => {
    return players.reduce((acc, p) => {
      return acc + p.name + ', ';
    }, '');
  };

  render() {
    const matchesSorted: MatchModel[] = this.props.matches.sort((a, b) => {
      if (a.diff === b.diff) return 0;
      if (a.diff > b.diff) return 1;
      return -1;
    });

    const topThreeMatches = matchesSorted.slice(0, 3);

    return (
      <div className='player-list-container'>
        <div>
          {topThreeMatches.map(this.renderMatch)}
        </div>
      </div>
    );
  }
}

export default MatchList;