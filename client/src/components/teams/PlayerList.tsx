import React, { Component } from 'react';
import { PlayerModel } from '../../app/teamTypes';
// import Player from './Player';
import { Field, FieldArray, Form, FormikActions, FormikProps, withFormik } from 'formik';
import { Debug } from '../../common/Debug';
import { createPlayers } from '../../data/players';

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

  mapPlayer = (player, index) => {
    return (
      <div key={index}>
        <Field name={`players.${index}.name`}/>
      </div>
    );
  };

  render(): React.ReactNode {
    return (
      <div>
        <Form>
          {
            //@ts-ignore
            <FieldArray name='players'
                        render={({ form }) => (
                          <div>
                            {form.values.players.map(this.mapPlayer)}
                          </div>

                        )}
            />
          }
          <div>
            <button type={'submit'}>Submit</button>
          </div>
          <Debug/>
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
  displayName: 'PlayerList',
  handleSubmit: onSubmit,
  mapPropsToValues: (props: PlayerListProps): MyFormValues => {
    return {
      players: createPlayers()
    };
  }
};

export default withFormik<PlayerListProps, MyFormValues>(FormlikConfig)(PlayerList);