import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchPlayers } from '../../actions/teamActions';
import { AppState } from '../../app/applicationTypes';
import { PlayerModel } from '../../app/teamTypes';
import PlayerList from './PlayerList';

interface TeamManagementContainerProps {
  players: PlayerModel[]
}

interface TeamManagementContainerDispatch {
  fetchPlayers: () => void
}

interface CombinedProps extends TeamManagementContainerDispatch, TeamManagementContainerProps{

}

class TeamManagementContainer extends Component<CombinedProps> {
  componentDidMount(): void {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <PlayerList players={this.props.players}/>
      </div>
    );
  }
}

const mapStateToProps = ({teams}: AppState): TeamManagementContainerProps => {
  return {
    players: teams.players
  };
};

export default connect(mapStateToProps, { fetchPlayers: doFetchPlayers})(TeamManagementContainer);