import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
import Card from 'react-bootstrap/Card';
import { calculateSkill } from '../../common/playerSkills';

interface PlayerProps {
  player: PlayerModel
}

class Player extends Component<PlayerProps> {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>{this.props.player.name}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.player.name}</Card.Title>
            <Card.Text>
              Gesamt: {calculateSkill(this.props.player).skill}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Player;