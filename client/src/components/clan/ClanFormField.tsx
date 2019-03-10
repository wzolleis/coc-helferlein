import React, { Component } from 'react';

interface ClanFormFieldProps {
  name: string
  placeholder: string
  label: string
}

class ClanFormField extends Component<ClanFormFieldProps> {
  render() {
    return (
      <div>
        <label className={'label'}>{this.props.label}</label>
        <input className={'input'}/>
      </div>
    );
  }
}

export default ClanFormField;