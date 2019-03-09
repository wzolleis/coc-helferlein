import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { AppForms } from '../../app/AppForms';
import { FormConfig } from '../../app/applicationTypes';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
  clanTag = () => {
    return <Form.Control type='text' placeholder='clan tag, e.g.#P282PYC'/>;
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formGroupClanProps'>
          <Form.Label>Clan Tag</Form.Label>
          <Field key={'clanTag'} name={'clanTag'} component={this.clanTag}/>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
        <Button variant={'secondary'} disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </Form>
    );
  }
}

export default reduxForm<FormData>(FORM_CONFIG)(ClanNewForm);
;