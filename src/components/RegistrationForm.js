import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@material-ui/core";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const RegistrationForm = () => {
  const paperStyle = { padding: "40px 20px", width: 250, margin: "20px auto" };
  const btnStyle = { marginTop: 10 };

  const initialValues={
      name:'',
      email:'',
      phoneNumber:'',
      password:''
  }

  const validationSchema=Yup.object().shape({
    name:Yup.string().min(2,"It's too short").required("Required"),
    email:Yup.string().email("Enter valid email").required("Required"),
    phoneNumber:Yup.string().typeError('Enter valid Phone Number').required('Required'),
    password:Yup.string().min(8,"Minimum characters should be 8").required('Required')
  })
    
  

  const onSubmit=(values,props)=>{
      // console.log(values)
      // console.log(values,props)
      alert(JSON.stringify(values),null,2)
      props.resetForm()
  }


  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Typography variant="h6">Register Here</Typography>
          <Typography variant="caption">
            Fill the form to create an account
          </Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props)=>(
                <Form>
                  {/* {console.log(props)} */}
                {/* <TextField label="Name" name="name"fullWidth value={props.values.name} onChange={props.handleChange} helperText={<ErrorMessage name='name'/>}/> */}
                <Field as={TextField} name='name'label="Name" fullWidth error={props.errors.name&&props.touched.name} helperText={<ErrorMessage name='name'/>} required/>
                {/* <TextField label="Email" name="email"type="email" fullWidth {...props.getFieldProps('email')}/> */}
                <Field as={TextField} name='email'label="Email" fullWidth error={props.errors.email&&props.touched.email} helperText={<ErrorMessage name='email'/>} required />
                <Field as={TextField} name='phoneNumber'label="Phone Number" fullWidth error={props.errors.phoneNumber&&props.touched.phoneNumber} helperText={<ErrorMessage name='phoneNumber'/>} required />
                <Field as={TextField} name='password' label='Password' fullWidth error={props.errors.password&&props.touched.password} helperText={<ErrorMessage name='password'/>} required/>
                <Button
                  type="submit"
                  style={btnStyle}
                  variant="contained"
                  color="primary"
                >
                  Register
                </Button>
              </Form>
            )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
