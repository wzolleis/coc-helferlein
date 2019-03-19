import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
// import Player from './Player';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, FormikActions, FormikProps, withFormik } from 'formik';
import { Debug } from '../../common/Debug';
import '../../css/playerComponent.css';
import '../../css/checkbox.css';

interface PlayerListProps {
  players: PlayerModel[]
}

interface MyFormValues {
  players: PlayerModel[]
}

class PlayerList extends Component<PlayerListProps & FormikProps<MyFormValues>> {
  constructor(props) {
    super(props);
  }

  AnimatedCheckbox = (props: FieldProps<MyFormValues>): React.ReactFragment => {
    const { field } = props;
    return (
      <label className='checkbox'>
        <input {...field} type='checkbox'/>
        <span className='default'/>
      </label>
    );
  };

  MyField = (props) => {
    return (
      <div>
        <Field className='form-control player attribute' name={`players.${props.index}.speed`}/>
        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
      </div>    );
  };

  mapPlayer = (player, index) => {
    return (
      <div className='player-container' key={index}>
        <Field name={`players.${index}.anwesend`} component={this.AnimatedCheckbox}/>
        <Field readOnly={true} className='form-control player attribute' name={`players.${index}.name`}/>
        <div>
          <Field className='form-control player attribute' name={`players.${index}.speed`}/>
          <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
        </div>
        <Field className='form-control player attribute' name={`players.${index}.condition`}/>
        <Field className='form-control player attribute' name={`players.${index}.techicalSkill`}/>
      </div>
    );
  };

  renderArray = (arrayRenderProps: FieldArrayRenderProps) => {
    const { form } = arrayRenderProps;
    return (
      <div>
        {form.values.players.map(this.mapPlayer)}
      </div>
    );
  };

  render(): React.ReactNode {
    return (
      <div>
        <Form>
          <FieldArray name='players'
                      render={this.renderArray}
          />
          <div>
            <button className='btn btn-primary' type={'submit'}>Submit</button>
          </div>
          {
            /*
              <Debug/>
            */
          }
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
};

const FormlikConfig = {
  enableReinitialize: true,
  displayName: 'PlayerList',
  handleSubmit: onSubmit,
  mapPropsToValues: (props: PlayerListProps): MyFormValues => ({ players: props.players })
};

export default withFormik<PlayerListProps, MyFormValues>(FormlikConfig)(PlayerList);