import React, { Component } from 'react';
import { PlayerModel } from '../models/teamTypes';
// import Player from './Player';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, FormikBag, FormikProps, withFormik } from 'formik';
import '../../css/team/playerComponent.css';
import '../../css/checkbox.css';
import '../../css/slider.css';

interface PlayerListProps {
  players: PlayerModel[]
  onHandlePlayerSelected: (values: PlayerListFormValues) => void
}

export interface PlayerListFormValues {
  players: PlayerModel[]
}

interface MyFieldProps extends FieldProps<PlayerListFormValues> {
  description: string
  name: string
}

class PlayerList extends Component<PlayerListProps & FormikProps<PlayerListFormValues>> {
  constructor(props) {
    super(props);
  }

  /**
   * Spezielle Checkbox, sieht einfach besser ;-)
   * @param props Field-Props, onChange, onBlur,...
   */
  AnimatedCheckbox = (props: FieldProps<PlayerListFormValues>): React.ReactFragment => {
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
  Slider = (props: MyFieldProps): React.ReactFragment => {
    const { field } = props;

    return (
      <div className='range range-success'>
        <small className='text-muted form-text' id='rangeSuccess'>{props.description.charAt(0)}: {field.value}</small>
        <input type='range' name='range' min='1' max='200' className='form-control' {...field}/>
      </div>
    );
  };


  renderPlayer = (player, index) => {
    return (
      <div className='player-container' key={index}>
        <Field name={`players.${index}.anwesend`} component={this.AnimatedCheckbox}/>
        <Field readOnly={true} name={`players.${index}.name`}/>
        <Field name={`players.${index}.speed`} description={'Geschwindigkeit'} component={this.Slider}/>
        <Field name={`players.${index}.condition`} description={'Kondition'} component={this.Slider}/>
        <Field name={`players.${index}.technicalSkill`} description={'Technik'} component={this.Slider}/>
      </div>
    );
  };

  renderPlayerList = ({ form }: FieldArrayRenderProps) => {
    return (
      <div className='player-list-container'>
        <div>
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
          <button className='btn btn-primary' type={'submit'}>Matches berechnen</button>
        </Form>
      </div>
    );
  }
}

const onSubmit = (values: PlayerListFormValues, formikBag: FormikBag<PlayerListProps, PlayerListFormValues>) => {
  alert(JSON.stringify(values, null, 2));
  formikBag.setSubmitting(false);
  formikBag.props.onHandlePlayerSelected(values);
};

const FormlikConfig = {
  enableReinitialize: true,
  displayName: 'PlayerList',
  handleSubmit: onSubmit,
  mapPropsToValues: (props: PlayerListProps): PlayerListFormValues => ({ players: props.players })
};

export default withFormik<PlayerListProps, PlayerListFormValues>(FormlikConfig)(PlayerList);