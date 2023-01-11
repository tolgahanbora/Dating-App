import React from 'react'
import { Formik, Field, Form } from 'formik';
import signmockup from '../mockup2.png'
import '../Style/signupStyle.css'
function Signup() {
  return (

      <div class='container'>

        <div class='row' id='signupROW'>
          <div class='col'>
          <img src={signmockup} class="img-fluid rounded-4 " alt="pics" id='photos2' />
          </div>
          <div class='col border border-0 ' id='denemes' >
       <Formik  initialValues={{
        name:'',
        surname: '',
        username: '',
        email: '',
        password: '',
        repassword: ''

     }} onSubmit= {values => {
        console.log(values)
     }}>
        {({values , handleChange, handleSumbit}) => (
            <Form>
               
                <div class="row">
                
                <div class="col">
               
              <label for="inputPassword5" class="form-label">Name</label>
                <Field type='text' name='name' class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="addon-wrapping"/><br/>
                </div>
                <div class="col">
                <label for="inputPassword5" class="form-label">Surname</label>
               
                <Field type='text' name='surname' class="form-control" placeholder="Your Surname" aria-label="Username" aria-describedby="addon-wrapping"/><br/>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <label for="inputPassword5" class="form-label">Username</label>
                <Field type='text' name='username' class="form-control" placeholder="Your Username" aria-label="Username" aria-describedby="addon-wrapping"/><br/>
                </div>
                <div class="col">
                <label for="inputPassword5" class="form-label">Email</label>
                <Field type='email' name='email' class="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="addon-wrapping"/><br/>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <label for="inputPassword5" class="form-label">Password</label>
                <Field type='password' name='password'  id="inputPassword5" placeholder="Your Password" class="form-control" aria-describedby="passwordHelpBlock"/><br/>
                </div>
                <div class="col">
                <label for="inputPassword5" class="form-label">Retype Password</label>
                <Field type='password' name='repassword' id="inputPassword5"  placeholder="Retype Password" class="form-control" aria-describedby="passwordHelpBlock"/> <br/>
                </div>
                </div>
                <button type="sumbit" class="btn btn-danger" id='kayitBTN'>Sign Up</button>
            </Form>
        )}
    </Formik>
    </div>
    </div>
  
    </div>
  )
}

export default Signup