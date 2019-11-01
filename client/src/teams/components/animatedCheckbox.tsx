import { FieldProps } from 'formik';
import React from 'react';
import '../../css/checkbox.css';


/**
 * Spezielle Checkbox, sieht einfach besser ;-)
 * @param props Field-Props, onChange, onBlur,...
 */
export const AnimatedCheckbox = (props: FieldProps): React.ReactFragment => {
  const { field } = props;
  return (
    <label className='checkbox'>
      <input {...field} type='checkbox' checked={field.value}/>
      <span className='default'/>
    </label>
  );
};
