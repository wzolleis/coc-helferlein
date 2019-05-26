import React, { Component } from 'react';
import { PlayerModel } from '../models/teamTypes';
import { FieldArray, FieldArrayRenderProps, Form, FormikBag, FormikProps, withFormik } from 'formik';
import '../../css/team/playerComponent.css';
import { renderPlayer } from './player';

interface PlayerListProps {
  players: PlayerModel[]
  onHandlePlayerSelected: (values: PlayerListFormValues) => void
}

export interface PlayerListFormValues {
  players: PlayerModel[]
}

class PlayerList extends Component<PlayerListProps & FormikProps<PlayerListFormValues>> {
  constructor(props) {
    super(props);
  }

  renderPlayerList = ({ form }: FieldArrayRenderProps) => {
    return (
      <div className='player-list-container'>
        <div>
          {form.values.players.map(renderPlayer)}
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
  formikBag.setSubmitting(false);
  formikBag.props.onHandlePlayerSelected(values);
};

// noinspection JSUnusedGlobalSymbols
const FormlikConfig = {
  enableReinitialize: true,
  displayName: 'PlayerList',
  handleSubmit: onSubmit,
  mapPropsToValues: (props: PlayerListProps): PlayerListFormValues => ({ players: props.players })
};

export default withFormik<PlayerListProps, PlayerListFormValues>(FormlikConfig)(PlayerList);