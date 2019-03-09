import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { AppForms } from '../../app/AppForms';
import { FormConfig } from '../../app/applicationTypes';
import SubmitResetButtonComponent from '../SubmitResetButtonComponent';

interface ClanNewFormProps {

}

interface FormData {
  clanTag: string
}

interface CombinedPropes extends ClanNewFormProps, InjectedFormProps<FormData> {

}


const FORM_CONFIG: FormConfig = {
  form: AppForms.CLAN_NEW_FORM
};

class ClanNewForm extends Component<CombinedPropes> {

  handleSubmit() {
    //do stuff here
  }

  render() {
    //@ts-ignore
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form className={'form-container'} onSubmit={handleSubmit(this.handleSubmit)}>
        <label>Clan Tag</label>
        <Field
          className={'input'}
          name='clanTag'
          component='input'
          type='text'
          placeholder='clan tag, e.g. #P282PYC  '
        />
        <SubmitResetButtonComponent pristine={pristine} submitting={submitting} reset={reset}/>
      </form>
    );
  }
}

export default reduxForm<FormData>(FORM_CONFIG)(ClanNewForm);
;