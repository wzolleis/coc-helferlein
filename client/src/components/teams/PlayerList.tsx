import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
// import Player from './Player';
import { Field, FieldProps, Form, FormikActions, FormikProps, withFormik } from 'formik';

interface PlayerListProps {
  players: PlayerModel[]
}

interface MyFormValues {
  players: PlayerModel[],
  name: string
}

class PlayerList extends Component<PlayerListProps & FormikProps<MyFormValues>> {
  constructor(props) {
    super(props);
    this.renderField = this.renderField.bind(this);
  }


  renderField(fieldProps: FieldProps<MyFormValues>) {
    const { field, form } = fieldProps;
    return (
      <div>
        <input {...field} type='text' placeholder='Name'/>
        {form.touched.players && form.errors.players && form.errors.players}
      </div>
    );
  }

  render(): React.ReactNode {
    return (
      <div>
        <Form>
          <Field name='name' type={'text'}/>
        </Form>
      </div>
    );
  }
}

const onSubmit = (values: MyFormValues, actions: FormikActions<MyFormValues>) => {
  console.log('values', values);
  console.log('actions', actions);
  alert(JSON.stringify(values, null, 2));
  actions.setSubmitting(false);
}

const FormlikConfig = {
  displayName: 'PlayerList',
  handleSubmit: onSubmit,
  initialValues: {
    players: [],
    name: 'Roland'
  },
  mapPropsToValues: (props: PlayerListProps): MyFormValues => {
    return {
      players: [],
      name: props.players.length > 0 ? props.players[0].name : ''
    }
  }
};

export default withFormik<PlayerListProps, MyFormValues>(FormlikConfig)(PlayerList);