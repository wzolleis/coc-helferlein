import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
// import Player from './Player';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, FormikActions, FormikProps, withFormik } from 'formik';
import '../../css/team/playerComponent.css';
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

  /**
   * Spezielle Checkbox, sieht einfach besser ;-)
   * @param props Field-Props, onChange, onBlur,...
   */
  AnimatedCheckbox = (props: FieldProps<MyFormValues>): React.ReactFragment => {
    const { field } = props;
    return (
      <label className='checkbox player-select'>
        <input {...field} type='checkbox'/>
        <span className='default'/>
      </label>
    );
  };

  /**
   * Ein Form-Field mit diversen Attributen
   * @param props Field-props, onChange,onBlur,...
   */
  MyField = (props) => {
    return (
      <div>
        <Field {...props} placeholder={props.description} type='number'
               data-toggle='tooltip' data-placement='center'/>
      </div>
    );
  };

  renderPlayer = (player, index) => {
    return (
      <div className='player-container' key={index}>
        <Field name={`players.${index}.anwesend`} component={this.AnimatedCheckbox}/>
        <Field readOnly={true} name={`players.${index}.name`}/>
        <this.MyField name={`players.${index}.speed`} description={'Geschwindigkeit'}/>
        <this.MyField name={`players.${index}.condition`} description={'Kondition'}/>
        <this.MyField name={`players.${index}.technicalSkill`} description={'Technik'}/>
      </div>
    );
  };

  renderPlayerList = ({ form }: FieldArrayRenderProps) => {
    return (
      <div className='player-list-container'>
        <div className='player-list-content'>
          {form.values.players.map(this.renderPlayer)}
        </div>
      </div>
    );
  };

  render(): React.ReactNode {
    return (
      <div>
        <Form>
          <FieldArray name='players' render={this.renderPlayerList}/>
          <button className='btn btn-primary' type={'submit'}>Submit</button>
        </Form>
      </div>
    );
  }
}

const onSubmit = (values: MyFormValues, actions: FormikActions<MyFormValues>) => {
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