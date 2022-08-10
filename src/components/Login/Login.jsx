import React from "react"
import { Formik } from "formik"
import { connect } from 'react-redux';
import * as yup from 'yup'
import {loginThunk} from './../../redux/authReducer'
import { useDispatch } from 'react-redux'

const Login = (props) => {

    const validateScheme = yup.object().shape({
        password: yup.string().typeError('Должно быть строкой').required('обязательно'),
        email: yup.string().email('Введите верный емэйл').required('Обязательно'),
    })


    return (
        <div>
            <h2>Formik:</h2>
            <Formik
            initialValues={{
                password: '',
                email: '',
                rememberMe: false
            }}
            validateOnBlur
            onSubmit={(values)=> {props.loginThunk(values.email, values.password, values.rememberMe)}}
            validationSchema={validateScheme}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>

                        <p>
                            <label htmlFor="email">Емэйл</label> <br />
                            <input 
                                type={'text'}
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}


                        <p>
                            <label htmlFor="password">Пароль</label> <br />
                            <input 
                                type={'password'}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </p>
                        {touched.password && errors.password && <p>{errors.password}</p>}

                        <button
                        disabled={!dirty && !isValid}
                        onClick={handleSubmit}
                        type={'submit'}
                        >
                            Отправить
                        </button>
                    </div>
                ) }
            </Formik>
        </div>
    )
}

/* const mapDispatchToProps = (dispatch) => {
    return {
      loginFormik: (email, password, rememberMe) => {dispatch(addPostActionCreator(formikPost))}
    }
  } 
*/




export default connect({loginThunk})(Login);
