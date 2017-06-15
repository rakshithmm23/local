import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import { Scrollbars } from 'react-custom-scrollbars';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

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
    const signedUserDataCookie = cookies.get('carauth');
    if (signedUserDataCookie && localStorage && localStorage.authData){
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
  componentWillUpdate(nextProps) {
    const signedUserDataCookie = cookies.get('carauth');
    if (signedUserDataCookie && localStorage && localStorage.authData){
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
                <LoginHeader pageType="signIn" headerClickAction={(e)=>{e.preventDefault();router.push('/')}}/>
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                <Scrollbars className="customScroll">
                        <div className="login-panel signin">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign In</h3>
                                <Button btnCallBack={(e) =>{e.preventDefault(); window.location.href="http://api-test.carcility.com/auth/social/facebook?type=customer"}} iconName="facebook" btnType="facebook" btnSize="lg" fontSize={16} label="Facebook" />
                                <Button btnCallBack={(e) =>{e.preventDefault(); window.location.href="http://api-test.carcility.com/auth/social/google?type=customer"}} iconName="google" btnType="gmail" btnSize="lg" fontSize={16} label="Google" />
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
                                <a onClick={(e) => {e.preventDefault(); router.push('forgot-password')}} className="blue-text">Forget Password ?</a>
                                <Button btnCallBack={this.signInAction.bind(this)} btnType="gmail" btnSize="sm" fontSize={16} label="Sign In"/>
                            </div>
                        </div>
                      </Scrollbars>
                  </div>
              </div>
        );
    }
  }
