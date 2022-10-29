import React from 'react';

import { useField } from 'formik';

import Form from 'react-bootstrap/Form';



const Input = ({label,  id , type="text", ...rest}) => {
     const [field, meta] = useField(id);
     const isError = meta.touched && meta.error;


  return (
    <Form.Group>
         { label && <Form.Label htmlFor={id}>{label}</Form.Label>}
         <Form.Control  type={type}  isInvalid={isError} {...field} {...rest} />
         {isError && (
            <Form.Control.Feedback type="invalid">
                {meta.error}
            </Form.Control.Feedback>
         )}
    </Form.Group>
  );
};

export default Input;