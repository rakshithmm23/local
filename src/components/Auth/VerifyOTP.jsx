import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import GeminiScrollbar from 'react-gemini-scrollbar';
import AlertDismissable from '../common/AlertDismissable';

export default class VerifyOTP extends Component {
    constructor(props){
      super(props);
      this.state = {
        submissionError: false
      };
      this.initialFormData = {
        'otp': ''
      };
      this.formData = {
        ...this.initialFormData
      };
      this.errors = {
        'otp': false
      };
      this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(value, key, name) {
      if (value) {
        this.formData[name] = value;
        this.errors[name] = false;
      }
    }
    verifyOTPAction(e){
      e.preventDefault();
      const {router} = this.props;
      let formData = {
        ...this.formData
      };
      let validForm = true;
      for (const key in formData) {
        if (!formData[key]) {
          this.errors[key] = true;
          validForm = false;
        } else
          this.errors[key] = false;
      }
      if (!validForm) {
        this.setState({submissionError: true});
        return;
      } else {
        this.setState({submissionError: false});
        debugger;
        this.props.actions.showWelcomePage(
          this.formData.otp,
          this.props.authReducer && this.props.authReducer.signUpData && this.props.authReducer.signUpData.phone ? this.props.authReducer.signUpData.phone : '',
          this.props.authReducer && this.props.authReducer.signUpData && this.props.authReducer.signUpData.id ? this.props.authReducer.signUpData.id : ''
        );
      }
    }
    componentWillUnmount() {
      this.props.actions.hideErrorMessage();
    }
    render() {
        const { router, authReducer } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign Up' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <GeminiScrollbar>
                        <div className="login-panel otp">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign Up</h3>
                                {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                                  <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                                </AlertDismissable>}
                                <p className="note-text">
                                    A One Time Password has been sent on your registered mobile no.
                                  {authReducer && authReducer.signUpData && authReducer.signUpData.phone && <strong>+{authReducer && authReducer.signUpData && authReducer.signUpData.phone} <i className="fa fa-pencil" /></strong>}
                                </p>
                            </div>

                            <div className="login-panel-body">
                                <TextInput
                                  label="Enter the OTP code below to continue"
                                  name="otp"
                                  type="text"
                                  showValidationError={this.errors['otp']}
                                  validationError="Enter your OTP to continue"
                                  limitCharacters={4}
                                  onChange={this.onFieldChange.bind(this)}
                                  isOTP={true} />
                                <Button btnCallBack={this.verifyOTPAction.bind(this)} btnType="submit" btnSize="sm" fontSize={16} label="Proceed" />
                                <p className="note-text">
                                    {'Didn\'t get OTP ?'} <a href="" className="green-text">Resend</a>
                                </p>
                            </div>
                        </div>
                    </GeminiScrollbar>
                </div>
            </div>
        );
    }
}
