import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { nextStep, preStep } from "../actions/step";
import { handleFromsData } from "../actions/formData";


export class FormPersonalDetails extends Component {

  handleChange = (key) => (e) => {
    this.props.handleFromsData(key, e.target.value);
  };


  render() {
    const { formData } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter your details" />
          <TextField hintText="Occupation" floatingLabelText="Occupation" onChange={this.handleChange("occupation")} defaultValue={formData.occupation} />
          <br />

          <TextField hintText="Enter your City" floatingLabelText="City" onChange={this.handleChange("city")} defaultValue={formData.city} />
          <br />
          <TextField hintText="Bio" floatingLabelText="Bio" onChange={this.handleChange("bio")} defaultValue={formData.bio} />
          <br />
          <RaisedButton label="continue" primary={true} style={styles.button} onClick={this.props.nextStep} />
          <RaisedButton label="back" primary={true} style={styles.button} onClick={this.props.preStep} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FormPersonalDetails);
