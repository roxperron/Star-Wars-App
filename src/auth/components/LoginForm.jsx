import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateWholeUser } from '../store/authSlice';

import Input from '../../components/Input';


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import BsForm from "react-bootstrap/Form";

import { Formik, Form } from 'formik';
import  * as yup from 'yup';

import useEmailPasswordSignin from '../hooks/useEmailPasswordSignin';
import useGoogleSignin from '../hooks/useGoogleSignin';



const initialValues = {
    email: "",
    name: "",
    password: "",
  };

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[-_@\.A-Za-z\d]{8,}$/;

const LoginForm = () => {
  const signinWithEmailAndPassword = useEmailPasswordSignin();
  const signinWithGoogle = useGoogleSignin();
  const dispatch = useDispatch();

  const [userData, setUserData ] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
  })

    const onSubmit = (values) => {
        signinWithEmailAndPassword(values.email, values.password);
        dispatch(updateWholeUser(values));
        setUserData({
          ...userData
        })
    };

  return (
    <Container fluid className="vh-100">
        <Container className="h-100 d-flex justify-content-center align-items-center">
            <Formik 
            onSubmit={onSubmit} 
            initialValues={initialValues} 
            validateOnChange 
            validationSchema = {yup.object({
                email: yup
                  .string()
                  .required("This field is required")
                  .email("Enter a valid email"),
                  name: yup.string().required("This field is required"),
                password: yup
                  .string()
                  .required("The password is required")
                  .matches(
                    passwordRegex,
                    "Password must contain 8 characters, at least one letter and number"
                  ),
              })}
            >
                <Form as={BsForm} noValidate>
                    <Row>
                        <Col>
                            <Input id="email" label="Email" required />
                        </Col>
                        <Col>
                            <Input type="password" id="password" label="Password" autoComplete="current-password"  required />
                        </Col>
                        <Col>
                            <Input  id="name" label="Name" />
                        </Col>
                        </Row>
                        <Row className="mt-2">
                        <Col>
                            <Button className="w-50" type="submit" onClick={signinWithEmailAndPassword}>Sign in</Button>
                        </Col>
                    </Row>
                </Form>
            </Formik>
            <Row>
               <Col className='px-5'><Button onClick={signinWithGoogle} type="button" variant="danger">
          Sign in with Google</Button></Col>
            </Row>
        </Container>
    </Container>
  );
};

export default LoginForm;