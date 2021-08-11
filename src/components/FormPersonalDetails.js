import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Button from "@material-ui/core/Button";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { connect } from "react-redux";
import { nextStep, preStep } from "../actions/step";
import { handleFromsData } from "../actions/formData";


export class FormPersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      occupationError: "",
      cityError: "",
      bioError: "",
    };
  }

  handleChange = (key) => (e) => {
    this.props.handleFromsData(key, e.target.value);
  };
  onButtonClickHandler_ = () => {
    const { formData } = this.props;
    let FormDataError = false;
    if (formData.occupation.length === 0) {
      FormDataError = true;
      this.setState({ occupationError: "Please enter Occupation " });
    }
    if (formData.city.length === 0) {
      FormDataError = true;
      this.setState({ cityError: "Please enter City " });
    }
    if (formData.bio.length === 0) {
      FormDataError = true;
      this.setState({ bioError: "Please enter  Bio" });
    }
    if (!FormDataError) {
      this.props.nextStep();
    }
  };

  render() {
    const { formData } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <TextField hintText="Occupation" floatingLabelText="Occupation" onChange={this.handleChange("occupation")} defaultValue={formData.occupation} />
          <br />
          <font color="red">
          {this.state.occupationError}
          </font>
          <br/>

          <TextField hintText="Enter your City" floatingLabelText="City" onChange={this.handleChange("city")} defaultValue={formData.city} />
          <br />
          <font color="red">
          {this.state.cityError}
          </font>
          <br/>
          <TextField hintText="Bio" floatingLabelText="Bio" onChange={this.handleChange("bio")} defaultValue={formData.bio} />
          <br />
          <font color="red">
          {this.state.bioError}
          </font>
          <br/>

          <Button variant="contained" color="primary" style={styles.button} onClick={this.onButtonClickHandler_}>
            CONTINUE
          </Button>

          <Button variant="contained" color="primary" value="continue" onClick={this.props.preStep}>
            BACK
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

export default connect(mapStateToProps, mapDispatchToProps)(FormPersonalDetails);
