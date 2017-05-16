import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import { Scrollbars } from 'react-custom-scrollbars';


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
  componentWillUnmount() {
    this.props.actions.hideErrorMessage();
  }
  signInAction(e) {
    e.preventDefault();
    const {router} = this.props;
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
      this.setState({submissionError: true});
      return;
    } else {
      this.setState({submissionError: false});
      this.props.actions.signInAction({
        'email': this.formData.email,
        'password': this.formData.password,
      });
    }
  }
    render() {
        const { router, authReducer } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign In' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                <Scrollbars className="customScroll">
                        <div className="login-panel signin">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign In</h3>
                                <Button iconName="facebook" btnType="facebook" btnSize="lg" fontSize={16} label="Facebook" />
                                <Button iconName="google" btnType="gmail" btnSize="lg" fontSize={16} label="Google" />
                            </div>
                            <div className="or-text">
                                <span>OR</span>
                            </div>
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
                                onChange={this.onFieldChange.bind(this)}/>
                              <TextInput
                                label="Password"
                                name="password"
                                type="password"
                                showValidationError={this.errors['password']}
                                validationError="Password should be greater than six digits"
                                onChange={this.onFieldChange.bind(this)}/>
                            </div>

                            <div className="login-panel-footer">
                                <a href="" className="green-text">Forget Password ?</a>
                                <Button btnCallBack={this.signInAction.bind(this)} btnType="submit" btnSize="sm" fontSize={16} label="Sign In"/>
                            </div>
                            <div className="auth-footer-text text-center">
                                {'Don\'t have an account?'} <a href="" className="green-text" onClick={(e) => { e.preventDefault(); router.push('sign-up'); }}>Sign Up</a>
                            </div>
                        </div>
                      </Scrollbars>
                  </div>
              </div>
        );
    }
  }
