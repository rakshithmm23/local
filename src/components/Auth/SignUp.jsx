import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false,
      fieldModified: false
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
    this.errors = {};
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(event, name, validationObj) {
    let value = event.nativeEvent.text ? event.nativeEvent.text.trim() : '';
    if (value) {
      const isValidField = validateField(validationObj, value);
      this.formData[name] = value;
      this.errors[name] = !isValidField;
    } else {
      this.errors[name] = true;
      this.formData[name] = value;
    }
    this.setState({'fieldModified': true});
  }
  render() {
    const {router} = this.props;
    return (
      <div className="container-fluid" id="wrapper">
          <LoginHeader headerTitle='Sign Up'/>
          <CarouselSlider />
          <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
              <div className="login-panel signup">
                  <div className="login-panel-header">
                      <h3 className="login-title">Sign Up</h3>
                      <Button btnCallBack={(e) => {e.preventDefault(); router.push('send-otp')}} btnType="facebook" btnSize="lg" fontSize={16} label="Facebook"/>
                      <Button btnCallBack={(e) => {e.preventDefault(); router.push('send-otp')}} btnType="gmail" btnSize="lg" fontSize={16} label="Gmail"/>
                  </div>
                  <div className="or-text">
                      <span>OR</span>
                  </div>
                  <div className="login-panel-body">
                      <TextInput label="Name" errorMessage={'Enter your name'}/>
                      <TextInput label="Email" errorMessage={'Please enter your email id'}/>
                      <TextInput label="Password" showPasswordImg={true}/>
                      <TextInput label="Mobile Number" isNumber={true}/>
                      <p className="note-text">
                          By signing up, you agree to the
                          <a href="" className="green-text"> terms and conditions </a>, and <a href="" className="green-text">privacy policy</a>.
                      </p>
                  </div>
                  <div className="login-panel-footer">
                      <Button btnCallBack={(e) => {e.preventDefault(); router.push('verify-otp')}} btnType="submit" btnSize="sm" fontSize={16} label="Get OTP" />
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
