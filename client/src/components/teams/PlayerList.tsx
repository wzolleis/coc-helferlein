import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
import Player from './Player';

interface PlayerListProps {
  players: PlayerModel[]
}

class PlayerList extends Component<PlayerListProps> {

  mapToComponent(player: PlayerModel) {
    return (<Player key={player.id} player={player}/>);
  }

  render() {
    return (
      <div>
        {this.props.players.map(this.mapToComponent)}
      </div>
    );
  }
}

export default PlayerList;