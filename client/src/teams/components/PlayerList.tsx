import React, { Component } from 'react';
import { PlayerModel } from '../models/teamTypes';
import { Field, FieldArray, FieldArrayRenderProps, FieldProps, Form, FormikBag, FormikProps, withFormik } from 'formik';
import '../../css/team/playerComponent.css';
import '../../css/checkbox.css';
import '../../css/slider.css';
import { Link } from 'react-router-dom';
import { AppLinks } from '../../app/AppLinks';

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

interface PlayerAttribute {
  name: string,
  value: number,
  attributeClass: string,
  borderClass: string,
  icon: string
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
        <small className='text-muted form-text' id='rangeSuccess'>{props.description}: {field.value}</small>
        <input type='range' name='range' min='1' max='200' className='form-control' {...field}/>
      </div>
    );
  };

  renderAttribute = (attribute: PlayerAttribute) => {
    const cardClass = `card border-${attribute.attributeClass} shadow text-info p-3 my-card`;
    const borderClass = `card border-${attribute.attributeClass} mx-sm-1 p-3`;
    const textContainerClass = `text-${attribute.attributeClass} text-center mt-3`;
    const textClass = `text-${attribute.attributeClass} text-center mt-2`;

    return (
      <div>
        <div className={borderClass}>
          <div className={cardClass}>
            <span className={attribute.icon} aria-hidden='true'/>
          </div>
          <div className={textContainerClass}><h4>{attribute.name}</h4></div>
          <div className={textClass}>
            <h1>
              {attribute.value}
            </h1>
          </div>
        </div>
      </div>
    );
  };


  renderPlayer = (player, index) => {
    //           <Link style={{ marginTop: '10px' }} className={'btn btn-info ml-auto'} to={AppLinks.CLANS_NEW}>Add</Link>
    const condition: PlayerAttribute = {
      value: player.condition,
      name: 'Kondition',
      icon: 'fa fa-heart',
      attributeClass: 'info',
      borderClass: ''
    };
    const technicalSkill: PlayerAttribute = {
      value: player.technicalSkill,
      name: 'Technik',
      icon: 'fa fa-random',
      attributeClass: 'danger',
      borderClass: ''
    };
    const speed: PlayerAttribute = {
      value: player.speed,
      name: 'Speed',
      icon: 'fa fa-tachometer-alt',
      attributeClass: 'warning',
      borderClass: ''
    };


    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title player-title'>
            <Field name={`players.${index}.anwesend`} component={this.AnimatedCheckbox}/>
            <Field readOnly={true} name={`players.${index}.name`}/>
          </h5>
          <div className='card-text'>
            <div className='jumbotron'>
              <div className='player-attributes-container'>
                {this.renderAttribute(condition)}
                {this.renderAttribute(technicalSkill)}
                {this.renderAttribute(speed)}
              </div>
            </div>
          </div>
          <Link className={'btn btn-primary ml-auto'} to={AppLinks.CLANS_NEW}>Edit</Link>
        </div>
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