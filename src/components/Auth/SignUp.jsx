import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { Checkbox } from 'react-bootstrap';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';
import FacebookLogin from 'react-facebook-login';

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
    const userId = localStorage.getItem('userId');
    const authData = localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : '';
    if (userId && authData && authData.phone && authData.phoneVerified) {
      this.props.router.push('dashboard');
    }
  }
  componentWillReceiveProps(nextProps) {
    const userId = localStorage.getItem('userId');
    const authData = localStorage.getItem('authData') ? JSON.parse(localStorage.getItem('authData')) : '';
    if (userId && authData && authData.phone && authData.phoneVerified) {
      this.props.router.push('dashboard');
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
            <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>
              <div className="login-panel signup">
                  <div className="login-panel-header">
                    <h3 className="login-title">Sign Up</h3>
                    <FacebookLogin
                      appId="1931777803704298"
                      fields="name,email,picture"
                      cssClass="btn btn-theme lg blue"
                      textButton="Facebook"
                      fields="name,email,picture"
                      callback={(socialResponse) => {if (socialResponse && socialResponse.accessToken) {this.props.actions.socialAuth(socialResponse, 'facebook')}}}
                      icon={<i className="mdi mdi-facebook" />}/>
                    <GoogleLogin
                      clientId="325191651728-3luk3tuh4h0in6svqoh0d74gkkdbb5f5.apps.googleusercontent.com"
                      className="btn btn-theme lg red"
                      onSuccess={(socialResponse) => {console.log(socialResponse)}}>
                      <i className="mdi mdi-google"/>Google
                    </GoogleLogin>
                  </div>
                  <div className="or-text">
                    <span>OR</span>
                  </div>
                  <form>
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
                  </form>
                  <div className="login-panel-footer">
                    <Button btnCallBack={this.sendOTPAction.bind(this)} isSubmitBtn={true} btnType="red" btnSize="sm" label="Get OTP" />
                  </div>
              </div>
            </CustomScroll>
          </div>
        </div>
      </div>
    );
  }
}
