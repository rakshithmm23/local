import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false
    };
    this.initialFormData = {
      'name': '',
      'email': '',
      'password': '',
      'mobile': ''
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'name': false,
      'email': false,
      'password': false,
      'mobile': false
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(value, key, name) {
    if (value) {
      this.formData[name] = value;
      this.errors[name] = false;
    }
  }
  sendOTPAction(e) {
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
      this.props.actions.showSendOTPPage(
        {
          'name': this.formData.name,
          'email': this.formData.email,
          'password': this.formData.password,
          'mobile': this.formData.mobile

        }
      )
      router.push('verify-otp')
    }
  }
  render() {
    const { router } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle="Sign Up" />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
          <GeminiScrollbar>
            <div className="login-panel signup">
              <div className="login-panel-header">
                <h3 className="login-title">Sign Up</h3>
                <Button iconName="facebook" btnCallBack={(e) => { e.preventDefault(); router.push('send-otp') }} btnType="facebook" btnSize="lg" fontSize={16} label="Facebook" />
                <Button iconName="google" btnCallBack={(e) => { e.preventDefault(); router.push('send-otp') }} btnType="gmail" btnSize="lg" fontSize={16} label="Google" />
              </div>
              <div className="or-text">
                <span>OR</span>
              </div>
              <div className="login-panel-body">
                <TextInput
                  type="text"
                  label="Name"
                  name="name"
                  validationError={'Enter your name'}
                  showValidationError={this.errors['name']}
                  validationError="Enter your name"
                  onChange={this.onFieldChange.bind(this)} />
                <TextInput
                  type="email"
                  label="Email"
                  name="email"
                  validationError="Please enter your email id"
                  showValidationError={this.errors['email']}
                  onChange={this.onFieldChange.bind(this)} />
                <TextInput
                  type="password"
                  label="Password"
                  name="password"
                  showValidationError={this.errors['password']}
                  validationError="Password should be greater than six digits"
                  onChange={this.onFieldChange.bind(this)} />
                <TextInput
                  type="mobile"
                  name="mobile"
                  label="Mobile Number"
                  showValidationError={this.errors['mobile']}
                  validationError="Enter a valid mobile number"
                  onChange={this.onFieldChange.bind(this)} />
                <p className="note-text">
                  By signing up, you agree to the
                          <a href="" className="green-text"> terms and conditions</a>, and <a href="" className="green-text">privacy policy</a>.
                      </p>
              </div>
              <div className="login-panel-footer">
                <Button btnCallBack={this.sendOTPAction.bind(this)} btnType="submit" btnSize="sm" fontSize={16} label="Get OTP" />
              </div>
              <div className="auth-footer-text text-center">
                Already having account? <a href="" className="green-text" onClick={(e) => { e.preventDefault(); router.push('sign-in'); }}>Sign In</a>
              </div>
            </div>
          </GeminiScrollbar>
        </div>
      </div>
    );
  }
}
