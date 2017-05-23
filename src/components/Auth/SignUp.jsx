import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { Checkbox } from 'react-bootstrap';
import AlertDismissable from '../common/AlertDismissable';
import { Scrollbars } from 'react-custom-scrollbars';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false,
      termsAgreed: false
    };
    this.initialFormData = {
      'name': '',
      'email': '',
      'password': '',
      'phone': '',
      'terms': false
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'name': false,
      'email': false,
      'password': false,
      'phone': false,
      // 'terms': false
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  componentWillMount(){
      // const signedUserDataCookie = cookies.get('carauth');
      if (localStorage && localStorage.authData){
        const authData = JSON.parse(localStorage.authData);
        if (authData.phone) {
          if (authData.phoneVerified) {
            this.props.router.push('dashboard');
          } else {
            this.props.router.push('verify-otp');
          }
        }
      } else {
        this.props.router.push('/');
      }
    }
    componentWillReceiveProps(){
      if (localStorage && localStorage.authData){
        const authData = JSON.parse(localStorage.authData);
        if (authData.phone) {
          if (authData.phoneVerified) {
            this.props.router.push('dashboard');
          } else {
            this.props.router.push('verify-otp');
          }
        }
      } else {
        this.props.router.push('/');
      }
    }
  onFieldChange(value, key, name) {
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
    }
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
      this.props.actions.showVerifyOTPPage({
        'name': this.formData.name,
        'email': this.formData.email,
        'phone': this.formData.phone,
        'password': this.formData.password,
        'type': 'customer'
      })
    }
  }
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  componentWillReceiveProps(nextProps) {
    debugger;
    // nextProps.
  }
  render() {
    const { router, authReducer } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle="Sign Up" />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
           <Scrollbars className="customScroll">
            <div className="login-panel signup">
              <div className="login-panel-header">
                <h3 className="login-title">Sign Up</h3>
                <Button iconName="facebook" btnCallBack={(e) => { e.preventDefault(); window.location.href="http://api-test.carcility.com/auth/social/facebook?type=customer"}} btnType="facebook" btnSize="lg" fontSize={16} label="Facebook" />
                <Button iconName="google" btnCallBack={(e) => { e.preventDefault(); window.location.href="http://api-test.carcility.com/auth/social/google?type=customer"}} btnType="gmail" btnSize="lg" fontSize={16} label="Google" />
              </div>
              <div className="or-text">
                <span>OR</span>
              </div>
              <div className="login-panel-body">
                {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                  <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                </AlertDismissable>}
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
                  type="phone"
                  label="Mobile Number"
                  name="phone"
                  showValidationError={this.errors['phone']}
                  validationError="Enter a valid mobile number"
                  onChange={this.onFieldChange.bind(this)} />
                <p className={this.errors.terms ? "note-text error" : "note-text"}>
                  <label htmlFor="agreeCheckbox">
                    <input type="checkbox" onChange={(e) => {this.setState({'terms': e.target.checked}); this.formData.terms = e.target.checked; this.errors.terms = !e.target.checked }}/>
                      By signing up, you agree to the
                          <a href="" className="green-text"> terms and conditions</a>, and <a href="" className="green-text">privacy policy</a>.
                  </label>
                  <span className="error-text">{'Please agree to the terms and condition'}</span>
                </p>


              </div>
              <div className="login-panel-footer">
                <Button btnCallBack={this.sendOTPAction.bind(this)} btnType="submit" btnSize="sm" fontSize={16} label="Get OTP" />
              </div>
              <div className="auth-footer-text text-center">
                Already having account? <a href="" className="green-text" onClick={(e) => { e.preventDefault(); router.push('sign-in'); }}>Sign In</a>
              </div>
            </div>
          </Scrollbars>
        </div>
      </div>
    );
  }
}
