import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import CustomScroll from 'react-custom-scroll';
import { validateField } from '../../helpers/index'
import AlertDismissable from '../common/AlertDismissable';

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

  componentWillMount() {
    const authData = localStorage.authData ? JSON.parse(localStorage.authData) : '';
    if (authData) {
      this.formData.phone = authData.phone || '';
      if (authData.phone && authData.phoneVerified) {
        this.props.router.push('dashboard');
      }
    } else {
      this.props.router.push('/');
    }
  }
  componentWillReceiveProps() {
    const authData = localStorage.authData ? JSON.parse(localStorage.authData) : '';
    if (authData) {
      if (authData.phone && authData.phoneVerified) {
        this.props.router.push('dashboard');
      }
    } else {
      this.props.router.push('/');
    }
  }
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  onFieldChange(value, key, name, validationObj) {
    this.formData[name] = value;
    this.errors[name] = value ? false : true;
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
      const authData = localStorage.authData ? JSON.parse(localStorage.authData) : {};
      authData.phone = this.formData.phone;
      localStorage.setItem('authData', JSON.stringify(authData));
      this.props.actions.resendOTP(this.formData.phone);
    }
  }
  render() {
    const { router, authReducer } = this.props;
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
                </div>
                <div className="login-panel-body">
                  <p className="note-text input-title">Enter your phone number to receive an OTP</p>
                    <div className="send-otpbtn-align">
                      <TextInput
                        customClass="otp-input"
                        type="phone"
                        name="phone"
                        value={this.formData.phone}
                        showValidationError={this.errors['phone']}
                        validationError="Enter a valid mobile number"
                        label="Mobile Number"
                        onChange={this.onFieldChange.bind(this)}
                      />
                    </div>
                    <Button btnCallBack={this.sendOTPAction.bind(this)} btnType="red otpbtnAlign" btnType="red" btnSize="sm" fontSize={16} label="Get OTP" />
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
