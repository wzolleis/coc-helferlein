import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doFetchPlayers } from '../actions/teamActions';
import { AppState } from '../../app/applicationTypes';
import { MatchModel, PlayerModel } from '../models/teamTypes';
import PlayerList, { PlayerListFormValues } from './PlayerList';
import { calculateMatches } from '../other/teamCalculation';

interface TeamManagementContainerProps {
  players: PlayerModel[],
  matches: MatchModel[]
}

interface TeamManagementContainerDispatch {
  fetchPlayers: () => void
}

interface CombinedProps extends TeamManagementContainerDispatch, TeamManagementContainerProps {

}

interface TeamManagementState {
  showMatchForm: boolean
}

const MatchList = (props: any) => {
  if (props.showMatchForm) {
    return <h5>Teams</h5>;
  }
  return null;
};

class TeamManagementContainer extends Component<CombinedProps, TeamManagementState> {
  state = { showMatchForm: false };


  onHandlePlayerSubmit = ({ players }: PlayerListFormValues) => {
    const matches = calculateMatches(players);
    this.setState({ showMatchForm: true });
  };

  componentDidMount(): void {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <PlayerList players={this.props.players} onHandlePlayerSelected={this.onHandlePlayerSubmit}/>
        < MatchList showMatchForm={this.state.showMatchForm} teams={this.props.matches}/>
      </div>
    );
  }
}

const mapStateToProps = ({ teams }: AppState): TeamManagementContainerProps => {
  return {
    players: teams.players,
    matches: []
  };
};

export default connect(mapStateToProps, { fetchPlayers: doFetchPlayers })(TeamManagementContainer);