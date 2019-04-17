import React, { Component } from 'react';
import { PlayerModel } from '../models/teamTypes';
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
        <small className='text-muted form-text' id='rangeSuccess'>{props.description}: {field.value}</small>
        <input type='range' name='range' min='1' max='200' className='form-control' {...field}/>
      </div>
    );
  };


  renderPlayer = (player, index) => {
    /*
    <Field name={`players.${index}.speed`} description={'Geschwindigkeit'} component={this.Slider}/>
    <Field name={`players.${index}.condition`} description={'Kondition'} component={this.Slider}/>
    <Field name={`players.${index}.technicalSkill`} description={'Technik'} component={this.Slider}/>
    */
    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title player-title'>
            <Field name={`players.${index}.anwesend`} component={this.AnimatedCheckbox}/>
            <Field readOnly={true} name={`players.${index}.name`}/>
          </h5>
          <div className='card-text'>
            <div className='jumbotron'>
              <div className='row player-attribute-container w-100'>
                <div className='col-md-3'>
                  <div className='card border-info mx-sm-1 p-3'>
                    <div className='card border-info shadow text-info p-3 my-card'>
                      <span className='fa fa-car' aria-hidden='true'/>
                    </div>
                    <div className='text-info text-center mt-3'><h4>Cars</h4></div>
                    <div className='text-info text-center mt-2'><h1>234</h1></div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card border-success mx-sm-1 p-3'>
                    <div className='card border-success shadow text-success p-3 my-card'>
                      <span className='fa fa-eye player-attribute-icon' aria-hidden='true'/>
                    </div>
                    <div className='text-success text-center mt-3'><h4>Eyes</h4></div>
                    <div className='text-success text-center mt-2'><h1>9332</h1></div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card border-danger mx-sm-1 p-3'>
                    <div className='card border-danger shadow text-danger p-3 my-card'>
                      <div className='fa fa-heart' aria-hidden='true'/>
                    </div>
                    <div className='text-danger text-center mt-3'><h4>Hearts</h4></div>
                    <div className='text-danger text-center mt-2'><h1>346</h1></div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card border-warning mx-sm-1 p-3'>
                    <div className='card border-warning shadow text-warning p-3 my-card'>
                      <span className='fa fa-inbox' aria-hidden='true'/>
                    </div>
                    <div className='text-warning text-center mt-3'><h4>Inbox</h4></div>
                    <div className='text-warning text-center mt-2'><h1>346</h1></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href='#' className='btn btn-primary'>Go somewhere</a>
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