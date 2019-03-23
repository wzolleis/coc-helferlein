import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../app/applicationTypes';
import { doFetchClanInfos } from '../actions/clanActions';
import ClanComponent from './ClanComponent';
import { Link } from 'react-router-dom';
import { AppLinks } from '../../app/AppLinks';
import { ClanModel } from '../models/clanTypes';

interface ClanContainerProps {
  clans: ClanModel[]
}

interface ClanContainerDispatch {
  fetchClanInfos: () => void
}

interface ClanContainerCombinedProps extends ClanContainerProps, ClanContainerDispatch {
}

class ClanContainer extends Component<ClanContainerCombinedProps> {
  componentDidMount(): void {
    this.props.fetchClanInfos();
  }

  mapClanToComponent(clan: ClanModel) {
    return (<ClanComponent key={clan.tag} clan={clan}/>);
  }

  render() {
    return (
      <div>
        <div>
          {this.props.clans.map(this.mapClanToComponent)}
        </div>
        <div className={'container d-flex'}>
          <Link style={{ marginTop: '10px' }} className={'btn btn-info ml-auto'} to={AppLinks.CLANS_NEW}>Add</Link>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ clan }: AppState): ClanContainerProps => {
  const { clans } = clan;
  return {
    clans
  };
};

export default connect(mapStateToProps, { fetchClanInfos: doFetchClanInfos })(ClanContainer);