import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import { connect } from "react-redux";
import { nextStep, preStep } from "../actions/step";
import DataTable from "./allmembers";

export class UserForm extends Component {
  render() {
    const { step } = this.props.step;

    switch (step) {
      case 1:
        return <FormUserDetails />;
      case 2:
        return <FormPersonalDetails />;
      case 3:
        return <Confirm />;
      case 4:
        return <Success></Success>;
      case 5: 
        return <DataTable />;
      default:
        return <h2>Some error occour</h2>
    }
  }
}

const mapStateToProps = (state) => ({
  step: state.steps,
  formData: state.formData,
});

const mapDispatchToProps = (dispatch) => ({
  nextStep: (data) => nextStep(dispatch, data),
  preStep: (data) => preStep(dispatch, data),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
