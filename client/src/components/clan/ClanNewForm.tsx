import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { AppForms } from '../../app/AppForms';
import { FormValidationConfig } from '../../app/applicationTypes';
import '../../css/clanNewForm.css';
import { Messages } from '../../common/messages';
import ClanFormField from './ClanFormField';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppLinks } from '../../app/AppLinks';

interface ClanNewFormProps {

}

interface FormData {
  clanTag: string
}

interface FormValidation {
  clanTag?: string
}

interface CombinedPropes extends ClanNewFormProps, InjectedFormProps<FormData> {
}

const validate = (values: FormData): FormValidation => {
  const errors: FormValidation = {};
  if (values.clanTag && !values.clanTag.startsWith('#')) {
    errors.clanTag = 'Starte das ClanTag mit #';
  }
  return errors;
};

const FORM_CONFIG: FormValidationConfig<FormData, FormValidation> = {
  form: AppForms.CLAN_NEW_FORM,
  validate
};

class ClanNewForm extends Component<CombinedPropes> {

  // noinspection JSMethodCanBeStatic
  handleSubmit(values: FormData) {
    //do stuff here
    console.log('values = ', values);
  }

  renderButtons() {
    const { pristine, submitting, reset } = this.props;
    const buttonStyle = {
      marginRight: '10px'
    };

    return (
      <div>
        <div className='float-left'>
          <button style={buttonStyle} className='btn btn-primary clan-new-button' type='submit'
                  disabled={pristine || submitting}>
            Submit
          </button>
          <Link className={'btn btn-info clan-new-button'} to={AppLinks.CLANS}>{Messages.cancel}</Link>
        </div>
        <div className='float-right'>
          <button className='btn btn-secondary clan-new-button' type='button'
                  disabled={pristine || submitting}
                  onClick={reset}>
            Clear Values
          </button>
        </div>
      </div>
    );
  }


  render() {
    const { handleSubmit } = this.props;

    return (
      <form className='form-container' onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name='clanTag'
          label='Clan Tag'
          component={ClanFormField}
          type='text'
          placeholder={Messages.clanTagPlaceholder}
        />
        {this.renderButtons()}
      </form>
    );
  }
}

export default connect()(reduxForm<FormData>(FORM_CONFIG)(ClanNewForm));