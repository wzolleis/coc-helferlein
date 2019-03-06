import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState, ClanModel } from '../app/applicationTypes';
import { doFetchClanInfos } from '../actions';
import ClanComponent from './ClanComponent';

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
        {this.props.clans.map(this.mapClanToComponent)}
      </div>
    )
  }
}

const mapStateToProps = ({ clan }: AppState): ClanContainerProps => {
  const { clans } = clan;
  return {
    clans
  };
};

export default connect(mapStateToProps, { fetchClanInfos: doFetchClanInfos })(ClanContainer);