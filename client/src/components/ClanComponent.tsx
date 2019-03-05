import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ClanModel } from '../app/applicationTypes';

interface ClanComponentProps {
  clan: ClanModel
}

class ClanComponent extends Component<ClanComponentProps> {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>{this.props.clan.name}</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ClanComponent;