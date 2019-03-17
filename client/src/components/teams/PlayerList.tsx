import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
// import Player from './Player';
import {  Field, FieldProps, Form, Formik, FormikActions, FormikProps } from 'formik';

interface PlayerListProps {
  players: PlayerModel[]
}

interface MyFormValues {
  firstName: string;
}

class PlayerList extends Component<PlayerListProps> {
  constructor(props) {
    super(props);
    this.renderField = this.renderField.bind(this);
    this.renderForm = this.renderForm.bind(this);
  }

  handleSubmit(values: MyFormValues, actions: FormikActions<MyFormValues>) {
    console.log({ values, actions });
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }

  renderField(fieldProps: FieldProps<MyFormValues>) {
    const { field, form } = fieldProps;
    return (
      <div>
        <input type='text' {...field} placeholder='First Name'/>
        {form.touched.firstName && form.errors.firstName && form.errors.firstName}
      </div>
    );
  }

  renderForm( _: FormikProps<MyFormValues>) {


    return (
      <Form>
        <Field
          name='firstName'
          render={this.renderField}
        />
      </Form>
    );
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>My Example</h1>
        <Formik
          initialValues={{ firstName: '' }}
          onSubmit={this.handleSubmit}
          render={this.renderForm}
        />
      </div>
    );
  }
}

export default PlayerList;