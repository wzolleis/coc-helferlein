import { FieldProps } from 'formik';
import React from 'react';
import { PlayerListFormValues } from './PlayerList';

/**
 * Spezielle Checkbox, sieht einfach besser ;-)
 * @param props Field-Props, onChange, onBlur,...
 */
export const AnimatedCheckbox = (props: FieldProps<PlayerListFormValues>): React.ReactFragment => {
  const { field } = props;
  console.log(field);
  return (
    <label className='checkbox player-select'>
      <input {...field} type='checkbox' checked={field.value}/>
      <span className='default'/>
    </label>
  );
};
