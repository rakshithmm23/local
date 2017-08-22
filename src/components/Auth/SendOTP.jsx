import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import CustomScroll from 'react-custom-scroll';
import { validateField } from '../../helpers/index'

export default class SendOTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false,
      termsAgreed: false
    };
    this.initialFormData = {
      'phone': ''
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'phone': false,
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(value, key, name, validationObj) {
    if (value) {
      this.formData[name] = value;
      this.errors[name] = false;
    }
  }
  sendOTPAction(e) {
    e.preventDefault();
    const { router } = this.props;
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
      this.setState({ submissionError: true });
      return;
    } else {
      this.setState({ submissionError: false });
      const authData = JSON.parse(localStorage.getItem('authData'));
      authData.phone = this.formData.phone;
      localStorage.setItem('authData', JSON.stringify(authData));
      this.props.router.push('verify-otp');
    }
  }
  render() {
    const { router } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle='Sign Up' />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
          <div className="customScroll">
            <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll="true">
              <div className="login-panel otp">
                <div className="login-panel-header">
                  <h3 className="login-title">Sign Up</h3>
                </div>
                <div className="login-panel-body">
                <p className="note-text input-title">Enter your phone number to receive an OTP</p>
                  <div className="form-group otp-input">
                    <TextInput
                      type="phone"
                      name="phone"
                      showValidationError={this.errors['phone']}
                      validationError="Enter a valid mobile number"
                      label="Mobile Number"
                      onChange={this.onFieldChange.bind(this)}
                    />
                  </div>
                  <Button btnCallBack={this.sendOTPAction.bind(this)} btnType="red otpbtnAlign" btnSize="sm" fontSize={16} label="Get OTP" />
                </div>
              </div>
            </CustomScroll>
          </div>
        </div>
      </div>
    );
  }
}
