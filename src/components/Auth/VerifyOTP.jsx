import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';


export default class VerifyOTP extends Component {
  constructor(props) {
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
  componentWillMount() {
    const authData = JSON.parse(localStorage.authData);
    if (authData) {
      if (authData.phone) {
        if (authData.phoneVerified) {
          this.props.router.push('dashboard');
        }
      } else {
        this.props.router.push('send-otp');
      }
    } else {
      this.props.router.push('/');
    }
  }
  componentWillReceiveProps() {
    const authData = JSON.parse(localStorage.authData);
    if (authData) {
      if (authData.phone) {
        if (authData.phoneVerified) {
          this.props.router.push('dashboard');
        }
      } else {
        this.props.router.push('send-otp');
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
  verifyOTPAction(e) {
    e.preventDefault();
    const authData = JSON.parse(localStorage.authData);
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
      this.props.actions.showWelcomePage(
        this.formData.otp,
        authData.phone,
        authData.id
      );
    }
  }
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  render() {
    const { router, authReducer } = this.props;
    const authData = JSON.parse(localStorage.authData);
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle='Sign Up' />
        <CarouselSlider />
        <form>
          <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
            <div className="customScroll">
              <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>
                <div className="login-panel otp">
                  <div className="login-panel-header">
                    <h3 className="login-title">Sign Up</h3>
                    {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                      <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                    </AlertDismissable>}
                    <p className="note-text">
                      A One Time Password has been sent on your registered mobile number.
                                    {authData && authData.phone && <strong><span className="edit-mobileno">{authData.phone}</span><i className="mdi mdi-pencil" onClick={(e) => { e.preventDefault(); router.push('send-otp') }} /></strong>}
                    </p>
                  </div>
                  <div className="login-panel-body input-button-addon">
                    <p className="note-text input-title">Enter the OTP code below to continue</p>
                    <TextInput
                      customClass="otp-input"
                      name="otp"
                      type="text"
                      showValidationError={this.errors['otp']}
                      validationError="Enter your OTP to continue"
                      onChange={this.onFieldChange.bind(this)}
                      isOTP={true} />
                    <Button btnCallBack={this.verifyOTPAction.bind(this)} btnType="red" btnSize="lg" fontSize={14} label="Complete sign up" />
                    <p className="note-text">
                      {'Didn\'t get OTP ?'} <a onClick={(e) => {e.preventDefault(); this.props.actions.resendOTP(authData.phone, true)}} className="blue-text">Resend</a>
                    </p>
                  </div>
                </div>
              </CustomScroll>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
