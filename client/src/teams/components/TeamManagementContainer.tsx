import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doCalculateMatches, doFetchPlayers } from '../actions/teamActions';
import { AppState, LoginState } from '../../app/applicationTypes';
import { MatchModel, PlayerModel } from '../models/teamTypes';
import PlayerList, { PlayerListFormValues } from './PlayerList';
import MatchList from './MatchList';
import { RouteComponentProps, withRouter } from 'react-router';
import { AppLinks } from '../../app/AppLinks';

interface TeamManagementContainerProps {
  players: PlayerModel[],
  matches: MatchModel[],
  loginState: LoginState
}

interface TeamManagementContainerDispatch {
  fetchPlayers: () => void
  calculateMatches: (players: PlayerModel[]) => void
}

type CombinedProps = TeamManagementContainerDispatch & TeamManagementContainerProps & RouteComponentProps<any>;

class TeamManagementContainer extends Component<CombinedProps> {
  state = { showMatchForm: false };


  onHandlePlayerSubmit = ({ players }: PlayerListFormValues) => {
    this.props.calculateMatches(players);
  };

  componentDidMount(): void {
    this.props.fetchPlayers();
  }

  render() {
    if (this.props.loginState !== LoginState.LOGGED_IN) {
      this.props.history.push(AppLinks.LOGIN);
    }

    return (
      <React.Fragment>
        <PlayerList players={this.props.players} onHandlePlayerSelected={this.onHandlePlayerSubmit}/>
        < MatchList matches={this.props.matches}/>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth, teams }: AppState): TeamManagementContainerProps => {
  return {
    loginState: auth.loginState,
    players: teams.players,
    matches: teams.matches
  };
};

export default withRouter(
  connect(mapStateToProps, {
  fetchPlayers: doFetchPlayers, calculateMatches: doCalculateMatches
  })(TeamManagementContainer));