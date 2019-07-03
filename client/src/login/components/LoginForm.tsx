import React from 'react';
import { Field, Formik, FormikActions } from 'formik';

interface LoginFormProps {
  loginUser: (username: string, password: string) => void
}

interface LoginFormData {
  username: string
  password: string
}

const INITAL_VALUES: LoginFormData = { username: '', password: '' };

const submitForm = (props: LoginFormProps, values: LoginFormData, actions: FormikActions<LoginFormData>) => {
  props.loginUser(values.username, values.password);
};

const validateForm = (values: LoginFormData) => {
  let errors = {};
  if (!values.username) {
    errors['username'] = 'Bitte Name eingeben';
  }

  if (!values.password) {
    errors['password'] = 'Bitte Passwort eingeben';
  }

  return errors;
};

export const LoginForm = (props: LoginFormProps) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={INITAL_VALUES}
      validate={validateForm}
      onSubmit={(values, actions) => submitForm(props, values, actions)}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field component={InputWithLabel}
                 placeholder='Bitte Namen eingeben'
                 type='text' id='field-username'
                 label='Name' name='username'/>
          <Field component={InputWithLabel}
                 placeholder='Bitte Passwort eingeben'
                 type='password' id='field-password'
                 label='Password' name='password'/>
          <button className={'btn btn-primary'} type={'submit'}>Anmelden</button>
        </form>
      )}
    </Formik>
  );
};

const InputWithLabel = ({
                          field, // { name, value, onChange, onBlur }
                          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                          ...props
                        }) => (
  <div className={'form-group'}>
    <label>{props.label}</label>
    <input className={'form-control '} {...field} {...props} />
    {touched[field.name] &&
    errors[field.name] && <span className={'text-danger'}>{errors[field.name]}</span>}
  </div>
);