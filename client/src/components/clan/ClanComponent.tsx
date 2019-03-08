import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ClanModel } from '../../app/applicationTypes';

interface ClanComponentProps {
  clan: ClanModel
}

class ClanComponent extends Component<ClanComponentProps> {
  render() {
    console.log(this.props.clan);
    return (
      <div>
        <Card>
          <Card.Header>{this.props.clan.name} {this.props.clan.tag}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.clan.name}</Card.Title>
            <Card.Text>
              Level: {this.props.clan.clanLevel}
            </Card.Text>
            <Button variant='primary'>Aktualisieren</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ClanComponent;