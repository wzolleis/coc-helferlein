import { FieldProps } from 'formik';
import React from 'react';
import { PlayerListFormValues } from './PlayerList';
import '../../css/checkbox.css';


/**
 * Spezielle Checkbox, sieht einfach besser ;-)
 * @param props Field-Props, onChange, onBlur,...
 */
export const AnimatedCheckbox = (props: FieldProps<PlayerListFormValues>): React.ReactFragment => {
  const { field } = props;
  return (
    <label className='checkbox'>
      <input {...field} type='checkbox' checked={field.value}/>
      <span className='default'/>
    </label>
  );
};
