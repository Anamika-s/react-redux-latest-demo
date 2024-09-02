import React from 'react'
import { Formik, Form, Field } from 'formik'
// import Register from './Register'
import * as yup from "yup"
// import { Form, Field } from 'formik'

export default function User() {
    const UserSchema= yup.object().shape(
 {
    name:yup.string().required('*').min(5,"Min 5 needed")
 }
    )
  return (
    <div>UserSchema
        <Formik initialValues={{name:"kjhjh"
    , address:"new ",
    password:"",
    gender:"",
    dob:"",
    slot:"",
    about:""}}
    validationSchema={UserSchema}
    onSubmit={(values)=> console.log(values)}
    component={Register}>
    </Formik>
    
     </div>
  )
}



export function Register(errors) {
    console.log(errors)
  return (
    <div>Register1

<Form>
                <label> Name </label>
                <Field name="name" type="text"></Field>
          <small style={{color:'red'}}> {errors.errors.name && errors.name} </small>
            <br/>
            <label> Address </label>
            <Field name="address" type="text"/>

            <label> Password </label>
            <Field name="password" type="password"/>
           
            <label> Gender </label>
            <Field name="gender" type="radio" value="male"/>
            <Field name="gender" type="radio" value="female"/>

<br/>
<label> Date of Birth </label>
            <Field name="dob" type="date"/>

            <label> Slot  </label>
            <Field name="slot" as="select">
                <option> 11- 1 </option>
                <option> 12- 2 </option>
                <option> 1- 3 </option>
                
            </Field>

            <label> About Us  </label>
            <Field name="about" as="textarea">
                </Field>
                <br/>
                <br/>
                <label> Social </label>
                <label> Facebook </label>
                <Field name="social.facebook" type="text"/>
                <label> twitter </label>
                <Field name="social.twitter" type="text"/>
                

                
            <button type='submit'>Submit</button>
            </Form>
      

    </div>
  )
}
