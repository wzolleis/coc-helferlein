import React, { Component } from 'react';
import { WrappedFieldProps } from 'redux-form';

export interface ClanFormFieldProps {
  label: string
  placeholder: string
}

interface ClanFormFieldCombinedProps extends ClanFormFieldProps, WrappedFieldProps {

}

class ClanFormField extends Component<ClanFormFieldCombinedProps> {
  render() {
    const { input, placeholder, label } = this.props;
    return (
      <div className='clan-new-form '>
        <label className='clan-new-label'>{label}</label>
        <input placeholder={placeholder} className='clan-new-field' {...input}/>
      </div>
    );
  }
}

export default ClanFormField;