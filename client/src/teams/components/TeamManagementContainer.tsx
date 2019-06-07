import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doCalculateMatches, doFetchPlayers } from '../actions/teamActions';
import { AppState } from '../../app/applicationTypes';
import { MatchModel, PlayerModel } from '../models/teamTypes';
import PlayerList, { PlayerListFormValues } from './PlayerList';
import MatchList from './MatchList';

interface TeamManagementContainerProps {
  players: PlayerModel[],
  matches: MatchModel[]
}

interface TeamManagementContainerDispatch {
  fetchPlayers: () => void
  calculateMatches: (players: PlayerModel[]) => void
}

interface CombinedProps extends TeamManagementContainerDispatch, TeamManagementContainerProps {

}

class TeamManagementContainer extends Component<CombinedProps> {
  state = { showMatchForm: false };


  onHandlePlayerSubmit = ({ players }: PlayerListFormValues) => {
    this.props.calculateMatches(players);
  };

  componentDidMount(): void {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <React.Fragment>
        <PlayerList players={this.props.players} onHandlePlayerSelected={this.onHandlePlayerSubmit}/>
        < MatchList matches={this.props.matches}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ teams }: AppState): TeamManagementContainerProps => {
  return {
    players: teams.players,
    matches: teams.matches
  };
};

export default connect(mapStateToProps, {
  fetchPlayers: doFetchPlayers, calculateMatches: doCalculateMatches
})(TeamManagementContainer);