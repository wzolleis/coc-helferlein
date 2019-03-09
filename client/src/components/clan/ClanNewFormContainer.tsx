import React, { Component } from 'react';
import ClanNewForm from './ClanNewForm';

interface ClanNewComponentProps {

}

class ClanNewFormContainer extends Component<ClanNewComponentProps> {
  render() {
    return (
      <div>
        <ClanNewForm/>
      </div>
    );
  }
}

export default ClanNewFormContainer;