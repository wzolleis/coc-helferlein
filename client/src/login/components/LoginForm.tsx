import React from 'react';
import { Field, Formik, FormikActions } from 'formik';

interface LoginFormProps {
}

interface LoginFormData {
  username: string
  password: string
}

const INITAL_VALUES: LoginFormData = { username: '', password: '' };

const submitForm = (values: LoginFormData, actions: FormikActions<LoginFormData>) => {
  const { setSubmitting } = actions;
  setSubmitting(true);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
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

export const LoginForm = () => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={INITAL_VALUES}
      validate={validateForm}
      onSubmit={submitForm}
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