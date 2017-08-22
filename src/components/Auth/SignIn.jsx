import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';
import FacebookLogin from 'react-facebook-login';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false
    };
    this.initialFormData = {
      'email': '',
      'password': '',
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'email': false,
      'password': false,
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }
  onFieldChange(value, key, name) {
    if (value) {
      this.formData[name] = value;
      this.errors[name] = false;
    }
  }
  componentWillMount() {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const userId = localStorage.getItem('userId');
    if (userId && authData) {
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
  componentWillUpdate(nextProps) {
    const authData = JSON.parse(localStorage.getItem('authData'));
    const userId = localStorage.getItem('userId');
    if (authData && userId) {
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
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  signInAction(e) {
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
      this.props.actions.signInAction({
        'email': this.formData.email,
        'password': this.formData.password,
        'usertype': 'customer'
      });
    }
  }

  render() {
    const { router, authReducer } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader pageType="signIn" headerClickAction={(e) => { e.preventDefault(); router.push('/') }} />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
          <div className="customScroll">
            <CustomScroll heightRelativeToParent="calc(100%)">
              <div className="login-panel signin">
                <div className="login-panel-header">
                  <h3 className="login-title">Sign In</h3>
                  <Button btnCallBack={(e) => { e.preventDefault(); window.location.href = "http://api-test.carcility.com/auth/social/facebook?type=customer" }} iconName="facebook" btnType="blue" btnSize="lg" label="Facebook" />
                  <Button btnCallBack={(e) => { e.preventDefault(); window.location.href = "http://api-test.carcility.com/auth/social/google?type=customer" }} iconName="google" btnType="red" btnSize="lg" label="Google" />
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
                      label="Email"
                      name="email"
                      type="email"
                      showValidationError={this.errors['email']}
                      validationError="Enter a valid email address"
                      onChange={this.onFieldChange.bind(this)} />
                    <TextInput
                      label="Password"
                      name="password"
                      type="password"
                      showValidationError={this.errors['password']}
                      validationError="Password should be greater than six digits"
                      onChange={this.onFieldChange.bind(this)} />
                  </div>
                  <div className="login-panel-footer">
                    <a onClick={(e) => { e.preventDefault(); router.push('forgot-password') }} className="blue-text">Forgot Password ?</a>
                    <Button btnCallBack={this.signInAction.bind(this)} isSubmitBtn={true} btnType="red" btnSize="sm" label="Sign In" />
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
