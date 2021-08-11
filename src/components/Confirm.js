import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { List, ListItem } from "material-ui/List";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { nextStep, preStep } from "../actions/step";
import { addUser } from '../apiHandler/apiBase';



export class Confirm extends Component {
  
  addUserToBackend = () => {
    const { formData} = this.props;
    addUser(formData)
   this.props.nextStep();
  }

  render() {
    const { formData: { firstName, lastName, email, city, bio, occupation },} = this.props;
      
    return (
      <MuiThemeProvider>
        <React.Fragment>
          
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          
          <Button variant="contained" color="primary" style={styles.button}  onClick={this.addUserToBackend} >CONFIRM & CONTINUE</Button>
          
          <Button variant="contained" color="primary" value="continue" onClick={this.props.preStep} >BACK</Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

const mapStateToProps = (state) => ({
  step: state.steps,
  formData: state.formData,
});

const mapDispatchToProps = (dispatch) => ({
  nextStep: (data) => nextStep(dispatch, data),
  preStep: (data) => preStep(dispatch, data),
});

export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
