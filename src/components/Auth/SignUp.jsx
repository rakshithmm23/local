import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { Checkbox } from 'react-bootstrap';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false,
      termsAgreed: true
    };
    this.initialFormData = {
      'name': '',
      'email': '',
      'password': '',
      'phone': '',
      'terms': true
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
  componentWillMount() {
    const signedUserDataCookie = cookies.get('carauth');
    const userId = localStorage.getItem('userId');
    if (signedUserDataCookie && userId && localStorage && localStorage.authData) {
      const authData = JSON.parse(localStorage.authData);
      if (authData.phone) {
        if (authData.phoneVerified) {
          this.props.router.push('dashboard');
        } else {
          this.props.router.push('verify-otp');
        }
      } else {
        this.props.router.push('send-otp');
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const signedUserDataCookie = cookies.get('carauth');
    const userId = localStorage.getItem('userId');
    if (signedUserDataCookie && userId && localStorage && localStorage.authData) {
      const authData = JSON.parse(localStorage.authData);
      if (authData.phone) {
        if (authData.phoneVerified) {
          this.props.router.push('dashboard');
        } else {
          this.props.router.push('verify-otp');
        }
      } else {
        this.props.router.push('send-otp');
      }
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
      let phone_no = this.formData.phone;
      if (!phone_no.startsWith("+")) {
        phone_no = '+' + phone_no;
      }
      this.props.actions.showVerifyOTPPage({
        'name': this.formData.name,
        'email': this.formData.email,
        'phone': phone_no,
        'password': this.formData.password,
        'type': 'customer',
        'usertype': 'customer'
      })
    }
  }
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  render() {
    const { router, authReducer } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader pageType="signUp" headerClickAction={(e) => { e.preventDefault(); router.push('/sign-in') }} />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
          <div className="customScroll">
            <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll="true">
              <div className="login-panel signup">
                <form>
                  <div className="login-panel-header">
                    <h3 className="login-title">Sign Up</h3>
                    <Button iconName="facebook" btnCallBack={(e) => { e.preventDefault(); window.location.href = "http://api-test.carcility.com/auth/social/facebook?type=customer" }} btnType="blue" btnSize="lg" label="Facebook" />
                    <Button iconName="google" btnCallBack={(e) => { e.preventDefault(); window.location.href = "http://api-test.carcility.com/auth/social/google?type=customer" }} btnType="red" btnSize="lg" label="Google" />
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
                      type="phone"
                      label="Mobile Number"
                      name="phone"
                      showValidationError={this.errors['phone']}
                      validationError="Enter a valid mobile number"
                      onChange={this.onFieldChange.bind(this)} />
                    <TextInput
                      type="password"
                      label="Password"
                      name="password"
                      showValidationError={this.errors['password']}
                      validationError="Password should be greater than six digits"
                      onChange={this.onFieldChange.bind(this)} />
                    <p className={this.errors.terms ? "note-text tc-text error" : "note-text tc-text"}>
                      <span className="checkbox-style">
                        <label htmlFor="agreeCheckbox" className="agreelabel">
                          <input type="checkbox" onChange={(e) => { this.setState({ 'terms': !e.target.checked }); this.formData.terms = e.target.checked; this.errors.terms = !e.target.checked }} checked={this.formData.terms} />
                          By signing up, you agree to the
                          <a onClick={() => { this.props.router.push('/terms') }} className="blue-text"> Terms & Conditions</a>, and <a className="blue-text">Privacy Policy</a>.
                      </label>
                      </span>
                      <span className="error-text">{'Please agree to the terms and condition'}</span>
                    </p>
                  </div>
                  <div className="login-panel-footer">
                    <Button btnCallBack={this.sendOTPAction.bind(this)} isSubmitBtn={true} btnType="red" btnSize="sm" label="Get OTP" />
                  </div>
                </form>
              </div>
            </CustomScroll>
          </div>
        </div>
      </div>
    );
  }
}
