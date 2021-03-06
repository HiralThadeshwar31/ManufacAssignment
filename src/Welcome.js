//import statements
import './App.css';
import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

//same designing as login page
export class Welcome extends Component {
  render() {

    return (

      <div>
        <Grid container style={{ minHeight: '100vh' }}>
          <Grid item xs={12} sm={6}>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="" />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems='center'
            direction='column'
            justify="space-between"

            style={{ padding: 20, paddingTop: 40 }}
          >

            <div style={{ display: 'flex', flexDirection: "column", maxWidth: 400, minWidth: 270 }}>
              <Grid container justify="center">
                <img src="https://dynamic.brandcrowd.com/asset/logo/bf099eae-01b4-4a27-a6aa-80d1e30ad164/logo?v=4"
                  width={200}
                  alt="logo">
                </img>
              </Grid>
              <h1>WELCOME USER</h1>
              <div style={{ height: 20 }} />
              <Button color="primary" variant="contained" href="/SignUp">
                Interested in Joining?
                </Button>
              <div style={{ height: 20 }} />



            </div>

          </Grid>
        </Grid>
      </div>


    );

  }
}

export default Welcome;
