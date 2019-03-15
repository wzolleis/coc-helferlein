import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchPlayers } from '../../actions/teamActions';
import { AppState } from '../../app/applicationTypes';
import { PlayerModel } from '../../app/teamTypes';

interface TeamManagementContainerProps {
  players: PlayerModel[]
}

interface TeamManagementContainerDispatch {
  fetchPlayerData
}

interface CombinedProps extends TeamManagementContainerDispatch, TeamManagementContainerProps{

}

class TeamManagementContainer extends Component<CombinedProps> {
  componentDidMount(): void {

  }

  render() {
    return (
      <div>
          <h1>Teams!</h1>
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