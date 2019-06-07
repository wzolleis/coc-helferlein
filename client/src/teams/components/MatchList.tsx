import React, { Component } from 'react';
import { MatchModel, PlayerModel } from '../models/teamTypes';


export interface MatchListProps {
  matches: MatchModel[]
}


class MatchList extends Component<MatchListProps> {
  renderMatch = (match: MatchModel) => {
    return (
      <div key={match.id}>
        <h2>
          {match.diff + ': ' + this.playerNames(match.home().players)} -> {this.playerNames(match.away().players)}
        </h2>
      </div>
    );
  };

  playerNames = (players: PlayerModel[]): string => {
    return players.reduce((acc, p) => {
      return acc + p.name + ', ';
    }, '');
  };

  render() {
    const matchesSorted: MatchModel[] = this.props.matches.sort((a, b) => {
      if (a.diff == b.diff) return 0;
      if (a.diff > b.diff) return 1;
      return -1;
    });

    return (
      <div className='player-list-container'>
        <div>
          {matchesSorted.map(this.renderMatch)}
        </div>
      </div>
    );
  }
}

export default MatchList;