import React, { Component } from 'react'
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //process from//  
        this.props.nextStep();
    }
    back = e => {
      e.preventDefault();
      this.props.prevStep();
  };
  render() {
      return (
        <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Confirm User Data"/>
              <h1> Thanks you for your Submission </h1>
              <p> You will recieve an email shortly</p>
             

          </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Success;
