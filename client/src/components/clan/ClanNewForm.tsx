import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { AppForms } from '../../app/AppForms';
import { FormConfig } from '../../app/applicationTypes';
import '../../css/clanNewForm.css';
import { Messages } from '../../common/messages';
import ClanFormField from './ClanFormField';
import { connect } from 'react-redux';

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

  // noinspection JSMethodCanBeStatic
  handleSubmit(values: FormData) {
    //do stuff here
    console.log('values = ', values);
  }

  renderButtons() {
    const { pristine, submitting, reset } = this.props;

    return (
      <div>
        <button className='btn btn-primary clan-new-button' type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button className='btn btn-secondary clan-new-button' type='button' disabled={pristine || submitting}
                onClick={reset}>
          Clear Values
        </button>
      </div>
    );
  }


  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form className='form-container' onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name='clanTag'
          label='Clan Tag'
          component={ClanFormField}
          type='text'
          placeholder={Messages.clanTag_placeholder}
        />
        {this.renderButtons()}
      </form>
    );
  }
}

export default connect()(reduxForm<FormData>(FORM_CONFIG)(ClanNewForm));