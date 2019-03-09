import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { ClanModel } from '../../app/applicationTypes';
import '../../css/clanComponent.css';
import { Messages } from '../../common/messages';
import { Link } from 'react-router-dom';
import { AppLinks } from '../../app/AppLinks';

interface ClanComponentProps {
  clan: ClanModel
}

class ClanComponent extends Component<ClanComponentProps> {

  render() {

    return (

      <div>
        <Card>
          <Card.Header>{this.props.clan.name} {this.props.clan.tag}</Card.Header>
          <Card.Body>
            <Card.Title>{this.props.clan.name}</Card.Title>
            <Card.Text>
              Level: {this.props.clan.clanLevel}
            </Card.Text>
            <div className={'clan buttons'}>
              <button className='btn btn-primary clan-button'>{Messages.refresh}</button>
              <Link
                className={'btn btn-info clan-button'}
                to={AppLinks.CLANS_NEW}>
                {Messages.details}
              </Link>
              <button className='btn btn-info clan-button'>{Messages.clanWar}</button>
              <button className='btn btn-info clan-button'>{Messages.clanLeague}</button>
              <button className='btn btn-danger clan-button'>{Messages.delete}</button>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ClanComponent;