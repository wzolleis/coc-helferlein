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
    const { input, placeholder, label, meta: { error, touched } } = this.props;
    const classNameLabel = touched && error ? 'clan-new-label text-danger' : 'clan-new-label';
    const classNameInput = touched && error ? 'clan-new-field is-invalid' : 'clan-new-field is-valid';
    return (
      <div className='clan-new-form'>
        <label className={classNameLabel}>{label}</label>
        <input placeholder={placeholder} className={classNameInput} {...input}/>
        <label className='validation text-danger'>{touched && error} </label>
      </div>
    );
  }
}

export default ClanFormField;