import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { nextStep, preStep } from "../actions/step";
import { handleFromsData } from "../actions/formData";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = (key) => (e) => {
    this.props.handleFromsData(key, e.target.value);
  };


  render() {
    const { formData } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter your details" />
          <TextField hintText="Enter your First Name" floatingLabelText="First Name" onChange={this.handleChange("firstName")} defaultValue={formData.firstName} />
          <br />

          <TextField hintText="Enter your Last Name" floatingLabelText="Last Name" onChange={this.handleChange("lastName")} defaultValue={formData.lastName} />
          <br />
          <TextField hintText="Enter your Email" floatingLabelText="Email" onChange={this.handleChange("email")} defaultValue={formData.email} />
          <br />
          <RaisedButton label="continue" primary={true} style={styles.button} onClick={this.props.nextStep} />
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
  handleFromsData: (key, value) => handleFromsData(dispatch, key, value),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormUserDetails);
