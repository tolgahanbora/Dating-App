import '../Style/contactStyle.css'
import React from 'react'
import { Formik, Form, Field } from 'formik'
function Contact() {
  return (
    <div class='container' id='contactContainer'>

    
    <div class='row,' >
      <div class="col-md-8"  >
      <h1 id='contacth1'>Contact us !</h1>
    <p id='contactP'>Do you have something you want to talk about? Please contact us or send us an email. We promise to get back to you as soon as possible</p>
    
    <h5 className='attribute'> Adress</h5>
    <address className='attribute'> Turkey/Istanbul</address>
    <h5 className='attribute'>Email</h5>
    <a href='mailto:tolgahanbora@outlook.com' className='attribute'>Datingapp@outlook.com</a>


    </div>
    
   
      

   <Formik  initialValues={{
    fullname:'',
    email: '',
    Message: ''

 }} >
    {({values , handleChange, handleSumbit}) => (
       <div class='col-md-4 ms-auto my-1' id='akdjahsd' >
        <Form>
         
          <label for="fullname" class="form-label">Full Name</label>
            <Field type='text' name='fullname' class="form-control" placeholder="Your Full Name" aria-label="Name" aria-describedby="addon-wrapping" id="namefield"/><br/>
            <div class="col" id='denemes3'>
            <label for="emailfield" class="form-label">Email</label>
            <Field type='email' name='email' class="form-control" placeholder="Your Email" aria-label="Email" aria-describedby="addon-wrapping" id="emailfield"/><br/>
            </div>
            <div class="col" id='denemes6'>
            <label for="message" class="form-label">Your Message</label>
            <textarea type='text' name='Message' id="adressfield"  placeholder="Your Message" class="form-control" aria-describedby="addon-wrapping" /> <br/>
            </div>
            
            <button type="sumbit" class="btn btn-danger" id='SendBtn'>Send</button>
            
        </Form>
        </div>
    )}
</Formik>
</div>
</div>

  )
}

export default Contact