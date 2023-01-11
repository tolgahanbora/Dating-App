import React from 'react'
import { Formik, Field, Form } from 'formik'
import logo from '../logo.png'
import '../Style/loginStyle.css'
function Login() {
    return (
        <div class="container" id='asdjahsd'>
            <div class="row">
                <div class="col">

                    <Formik initialValues={{
                        email: '',
                        password: '',
                        checkme: ''
                    }}>
                        {({ values, handleChange, handleSumbit }) => (
                            <Form id='loginForm'>

                               
                                <h1 class="h3 mb-3 " id='logoH1'>Please Sign in</h1>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <Field type="email" class="form-control" id='email' name="email" aria-describedby="emailHelp" />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <Field type="password" class="form-control" id='password' name="password"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <Field type="checkbox" class="form-check-input" id="checkme" name="checkme"/>
                                        <label class="form-check-label" for="checkme">Check me out</label>
                                </div>
                                <button class="btn btn-danger" type="submit" id='LoginBTN' >Sign in</button>
                                <p class="mt-5 mb-3 text-muted" id='date'>© 2022–2023</p>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Login