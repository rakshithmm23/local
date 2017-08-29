import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import CustomScroll from 'react-custom-scroll';

export default class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.initialFormData = {
      'password': '',
      'confirmPassword': ''
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {
      'email': false,
      'confirmPassword': false
    };
  }
  componentWillMount() {
    const currentRoute = this.props.router.getCurrentLocation();
    if (currentRoute.query && currentRoute.query.code) {
      this.setState({ 'code': currentRoute.query.code })
    } else {
      this.props.router.push('/');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.authReducer.currentComponentKey) {
      this.props.router.push(nextProps.authReducer.currentComponentKey);
      this.props.actions.clearComponentKey();
    }
  }
  resetPassword(e) {
    e.preventDefault();
    if (this.state.code) {
      if (this.formData.password.length && this.formData.confirmPassword.length && (this.formData.password == this.formData.confirmPassword)) {
        this.props.actions.resetPassword(this.state.code, this.formData.password);
      }else{
        this.props.actions.showErrorMessage("Password and ConfirmPassword should be same");
      }
    }
  }
  onFieldChange(value, key, name) {
    this.formData[name] = value;
    this.errors[name] = value ? false : true;
  }
  render() {
    const { authReducer } = this.props;
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle="Sign Up" />
        <CarouselSlider />
          <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
            <div className="customScroll">
              <CustomScroll heightRelativeToParent="calc(100%)" allowOuterScroll={true}>
                <div className="login-panel otp">
                  <div className="login-panel-header forget-panel-header">
                    <h3 className="login-title">Reset Password</h3>
                    <p className="note-text">
                      Enter new password to reset.
                    </p>
                  </div>
                  <form>
                    <div className="login-panel-body">
                      {authReducer && authReducer.showErrorMessage && <AlertDismissable bsStyle="danger" closeLabel="Close alert" closeAction={this.props.actions.hideErrorMessage}>
                        <p> <i className="mdi mdi-block-helper" /> {authReducer.statusMessage} </p>
                      </AlertDismissable>}
                      <TextInput
                        type="password"
                        label="Password"
                        name="password"
                        validationError="Password must be atleast 6 characters"
                        onChange={this.onFieldChange.bind(this)}
                      />
                      <TextInput
                        type="password"
                        label="Re-Enter Password"
                        name="confirmPassword"
                        validationError="Password must be atleast 6 characters"
                        onChange={this.onFieldChange.bind(this)}
                      />
                    </div>
                    <div className="login-panel-footer">
                      <Button btnType="red" btnSize="sm" fontSize={14} isSubmitBtn={true} label="Reset" btnCallBack={this.resetPassword.bind(this)} />
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
