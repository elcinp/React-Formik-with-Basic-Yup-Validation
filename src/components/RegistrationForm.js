import React from "react";
import { Grid, Paper, Button, Typography, TextField } from "@material-ui/core";
import {Formik,Form,Field} from 'formik'


const RegistrationForm = () => {
  const paperStyle = { padding: "40px 20px", width: 250, margin: "20px auto" };
  const btnStyle = { marginTop: 10 };

  const initialValues={
      name:'',
      email:'',
      phoneNumber:'',
      password:''
  }

  const onSubmit=(values,props)=>{
      console.log(values)
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
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {(props)=>(
                <Form>
                <TextField label="Name" name="name"fullWidth value={props.values.name} onChange={props.handleChange}/>
                <TextField label="Email" name="email"type="email" fullWidth {...props.getFieldProps('email')}/>
                <Field as={TextField} name='phoneNumber'label="Phone Number" fullWidth />
                <Field as={TextField} name='password' label='Password' fullWidth/>
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
