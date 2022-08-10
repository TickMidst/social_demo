import React from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import { loginThunk } from '../../redux/authReducer';

import { connect } from "react-redux";

import { Navigate } from 'react-router-dom';



const loginFormSchema = Yup.object({

  email: Yup.string().email('Invalid e-mail').required('Required'),

  password: Yup.string().min(8, 'Must be longer than 8 characters').required('Required'),

});



const LoginTest = (props) => {

  const onSubmit = (values) => {
        props.loginThunk(values.email, values.password, values.rememberMe);
  }

  return (

    <div>

      <h1>Log in</h1>

      <Formik

        initialValues={{ email: '', password: '', rememberMe: false , messages: null}}

        validationSchema={loginFormSchema}

       

        onSubmit={(values) => onSubmit(values)}

      >

        {() => (

          <Form>

            <div>

              <Field type='email' name='email' placeholder='e-mail' />

              <ErrorMessage name='email' component='p' />

            </div>

            <div>

              <Field type='password' name='password' placeholder='password' />

              <ErrorMessage name='password' component='p' />

            </div>

            <div>

              <Field type='checkbox' name='rememberMe' />

              <label htmlFor='rememberMe'>remember me</label>

            </div>

            <button type='submit'>Log in</button>

            <p>{props.messageError}</p>

          </Form>

        )}

      </Formik>

    </div>

  );

};

let mapStateToProps = (state) => {

  return{
    isAuth : state.isAuth

}}

export default connect(mapStateToProps, {loginThunk}) (LoginTest);
