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
    if (localStorage && localStorage.authData) {
      const authData = JSON.parse(localStorage.authData);
      if (authData.phone) {
        if (authData.phoneVerified) {
          this.props.router.push('dashboard');
        } else {
          this.props.actions.resendOTP(authData.phone);
        }
      } else {
        this.props.router.push('send-otp');
      }
    } else {
      this.props.router.push('/');
    }
  }
  componentWillReceiveProps() {
    if (localStorage && localStorage.authData) {
      const authData = JSON.parse(localStorage.authData);
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
    this.formData[name] = value;
    this.errors[name] = value ? false : true;
  }
  verifyOTPAction(e) {
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
      this.props.actions.showWelcomePage(
        this.formData.otp,
        this.props.authReducer && this.props.authReducer.authData && this.props.authReducer.authData.phone ? this.props.authReducer.authData.phone : '',
        this.props.authReducer && this.props.authReducer.authData && this.props.authReducer.authData.id ? this.props.authReducer.authData.id : ''
      );
    }
  }
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  render() {
    const { router, authReducer } = this.props;
    console.log(authReducer);
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle='Sign Up' />
        <CarouselSlider />
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
                    Enter your mobile number to receive an OTP
                                </p>
                </div>
                <div className="login-panel-body">
                  <TextInput
                    label="Mobile Number"
                    name="otp"
                    type="text"
                    showValidationError={this.errors['otp']}
                    validationError="Enter your Mobile Number"
                    onChange={this.onFieldChange.bind(this)}
                    isOTP={true} />
                  <Button btnCallBack={this.verifyOTPAction.bind(this)} btnType="gmail" btnSize="sm" fontSize={14} label="Get OTP" />
                </div>
              </div>
            </CustomScroll>
          </div>
        </div>
      </div>
    );
  }
}
