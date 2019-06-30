import React, { Component } from 'react';
import { MatchModel } from '../models/teamTypes';
import { renderMatch } from './match';


export interface MatchListProps {
  matches: MatchModel[]
}


class MatchList extends Component<MatchListProps> {
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
          {topThreeMatches.map(renderMatch)}
        </div>
      </div>
    );
  }
}

export default MatchList;