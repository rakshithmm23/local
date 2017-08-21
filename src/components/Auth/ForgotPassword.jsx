import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submissionError: false
    };
    this.initialFormData = {
      'email': ''
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'email': false
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.forgotPasswordAction = this.forgotPasswordAction.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer.currentComponentKey) {
      this.props.router.push(nextProps.authReducer.currentComponentKey);
      this.props.actions.clearComponentKey();
    }
  }
  onFieldChange(value, key, name) {
    if (value) {
      this.formData[name] = value;
      this.errors[name] = false;
    }
  }
  forgotPasswordAction() {
    if (this.formData.email && this.errors['email'] != true) {
      this.props.actions.forgotPassword(this.formData.email);
    } else {
      this.errors['email'] = true;
      this.setState({ 'submissionError': true })
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
        <LoginHeader headerTitle="Sign Up" />
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
          <div className="customScroll">
            <CustomScroll heightRelativeToParent="calc(100%)">
              <div className="login-panel otp">
                <div className="login-panel-header forget-panel-header">
                  <h3 className="login-title">Forgot Password ?</h3>
                  <p className="note-text">
                    Enter your email address to recieve password reset link.
                        </p>
                </div>
                <div className="login-panel-body forget-input">
                  {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                    <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                  </AlertDismissable>}
                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    showValidationError={this.errors['email']}
                    validationError="Enter your valid email id"
                    onChange={this.onFieldChange.bind(this)}
                    isOTP={true} />
                  <Button btnCallBack={this.forgotPasswordAction} btnType="gmail" btnSize="sm" fontSize={14} label="Email Link" />
                </div>
              </div>
            </CustomScroll>
          </div>
        </div>
      </div>
    );
  }
}
