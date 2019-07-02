import React from 'react';
import { Field, Formik } from 'formik';

interface LoginFormData {
  username: string
  password: string
}

const INITAL_VALUES: LoginFormData = { username: 'user', password: '' };

const submitForm = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

export const LoginForm = (props: LoginFormData) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={INITAL_VALUES}
      onSubmit={submitForm}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field component={TextInput} label='Name' name='username'/>
          <Field component={PasswordInput} label='Password' name='password'/>
          <button type={'submit'}>Login</button>
        </form>
      )}
    </Formik>
  );
};

const TextInput = ({
                     field, // { name, value, onChange, onBlur }
                     form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                     ...props
                   }) => (
  <div>
    <label>{props.label}</label>
    <input type='text' {...field} {...props} />
    {touched[field.name] &&
    errors[field.name] && <div className='error'>{errors[field.name]}</div>}
  </div>
);

const PasswordInput = ({
                         field, // { name, value, onChange, onBlur }
                         form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                         ...props
                       }) => (
  <div>
    <label>{props.label}</label>
    <input type='password' {...field} {...props} />
    {touched[field.name] &&
    errors[field.name] && <div className='error'>{errors[field.name]}</div>}
  </div>
);