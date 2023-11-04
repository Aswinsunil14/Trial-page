import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './form.css';

const Formfield = () => {

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
      .string()
      .required('*Password is required')
      .min(5, '*Your password is too short.')
      .matches(/[a-zA-Z]/, '*Password can only contain Latin letters.'),
    confirmpassword: Yup
      .string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

  const validatePassword = values => {
    let error = "";
    const passwordRegex = /(?=.*[0-9])/;
    if (!values) {
      error = "*Required";
    } else if (values.length < 8) {
      error = "*Password must be 8 characters long.";
    } else if (!passwordRegex.test(values)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
  };

  const validateConfirmPassword = (password, value) => {

    let error = "";
    if (password && value) {
      if (password !== value) {
        error = " * Password not matched";
      }
    }
    return error;
  };


  return (

    <div className='container' >
      <div className='card overflow-hidden'>
        <div className='card-image transform transition duration-500 hover:scale-110' >
          <h2 className='card-heading'>
            Registration Form
            <p className='heading'>Register your account here</p>
          </h2>
        </div>

        <Formik
          className='card-form'
          initialValues={{
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, actions, { validate }, { register }) => {
            validate(values);
            register(values);
            actions.resetForm();
            console.log(values);
          }}
        >

          {({ errors, touched, values }) => (
            <Form className='card-form'>
              <div className='input' >
                <Field name="userName"
                  class="input-field" />
                {errors.userName && touched.userName ? (<div className='ml-20 text-red-500'>{errors.userName}</div>) : null}
                <label className="input-label">Username </label>
              </div>

              <div className='input'>
                <Field name="email"
                  type="email"
                  className="input-field" />
                {errors.email && touched.email ? <div className='ml-20 text-red-500'>{errors.email}</div> : null}
                <label className="input-label">
                  Email
                </label>
              </div>

              <div className="input">
                <Field
                  type="password"
                  name="password"
                  id="password"
                  validate={validatePassword}
                  className='input-field'
                />
                {errors.password && <div className='ml-20 text-red-500'>{errors.password}</div>}
                <label className="input-label">
                  Password
                </label>
              </div>

              <div className="input">
                <Field
                  type="password"
                  name="confirmPassword"
                  validate={value => validateConfirmPassword(values.password, value)}
                  className='input-field'
                />
                {errors.confirmPassword && (<div className='ml-36 text-red-500'>{errors.confirmPassword}</div>)}
                <label className="input-label">
                  Confirm Password
                </label>
              </div>

              <div className='action'>
                <button className='action-button' type="submit" >
                  <a className='buttonref' href='#'>
                    Register
                  </a>
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div class="card-info">
          <p>By signing up you are agreeing to our <a className='hover:text-yellow-950' href="#">Terms and Conditions</a></p>
        </div>

        <hr class="h-px my-5 ml-10 w-80 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <div className="field flex gap-3 ml-20 mx-3">
          <p>Already have an account ? 
          </p>
            <a class="ssolink hover:text-yellow-950" href="#">
             Sign In
            </a>
        </div>
      </div>
    </div>
  )
}

export default Formfield; 