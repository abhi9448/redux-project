import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import { nextStep, preStep } from "../actions/step";
import { handleFromsData } from "../actions/formData";
import { connect } from "react-redux";
import DataTable from "../components/allmembers";

export class FormUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fnameError: "",
      lnameError: "",
      emailError: "",
    };
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleChange = (key) => (e) => {
    this.props.handleFromsData(key, e.target.value);
  };

  DataHandler(e) {
    e.preventDefault();
    DataTable();
  }

  onButtonClickHandler = () => {
    const { formData } = this.props;
    let FormError = false;
    if (formData.firstName.length === 0) {
      FormError = true;
      this.setState({ fnameError: "Please enter first name" });
    }
    if (formData.lastName.length === 0) {
      FormError = true;
      this.setState({ lnameError: "Please enter last name" });
    }
    if (formData.email.length === 0 ) {
      FormError = true;
      this.setState({ emailError: "Please enter valid email " });
    }
    if (!FormError) {
      this.props.nextStep();
    }
  };

  render() {
    const { formData } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField hintText="Enter your First Name" floatingLabelText="First Name" onChange={this.handleChange("firstName")} defaultValue={formData.firstName} />
          <br />
          <font color="red">{this.state.fnameError}</font>
          <br />

          <TextField hintText="Enter your Last Name" floatingLabelText="Last Name" onChange={this.handleChange("lastName")} defaultValue={formData.lastName} />
          <br />
          <font color="red">{this.state.lnameError}</font>
          <br />
          <TextField hintText="Enter your Email" floatingLabelText="Email" onChange={this.handleChange("email")} defaultValue={formData.email} />
          <br />
          <font color="red">{this.state.emailError}</font>
          <br />
          <Button variant="contained" color="primary" value="continue" onClick={this.onButtonClickHandler}>
            CONTINUE
          </Button>
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
