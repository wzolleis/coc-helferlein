import React, { Component } from 'react';
import ClanNewForm from './ClanNewForm';

interface ClanNewComponentProps {

}

class ClanNewComponent extends Component<ClanNewComponentProps> {
  render() {
    return (
      <div>
        <ClanNewForm/>
      </div>
    );
  }
}

export default ClanNewComponent;