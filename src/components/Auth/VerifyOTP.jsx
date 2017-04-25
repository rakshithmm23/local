import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import GeminiScrollbar from 'react-gemini-scrollbar';

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
        // this.props.actions.showWelcomePage(
        //   {
        //     'otp': this.formData.otp
        //   }
        // );
        router.push('dashboard')
      }
    }
    render() {
        const { router } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign Up' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <GeminiScrollbar>
                        <div className="login-panel otp">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign Up</h3>
                                <p className="note-text">
                                    A One Time Password has been sent on your registered mobile no.
                            <strong>99999 99999 <i className="fa fa-pencil" /></strong>
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
