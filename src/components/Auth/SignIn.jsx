import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';

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
      this.errors[name] = false
    }
  }
  signInAction(e) {
    e.preventDefault();
    debugger;
    const {router} = this.props;
    let formData = {
      ...this.formData
    }
    let validForm = true;
    for (var key in formData) {
      if (!formData[key]) {
        this.errors[key] = true
        validForm = false
      } else
        this.errors[key] = false
    }
    if (!validForm) {
      this.setState({submissionError: true})
      return
    } else {
      this.setState({submissionError: false});
      router.push('dashboard')
    }
  }
  render() {
    return (
      <div className="container-fluid" id="wrapper">
        <LoginHeader headerTitle='Sign In'/>
        <CarouselSlider />
        <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
            <div className="login-panel signin">
                <div className="login-panel-header">
                    <h3 className="login-title">Sign In</h3>
                    <Button btnType="facebook" btnSize="lg" fontSize={16} label="Facebook"/>
                    <Button btnType="gmail" btnSize="lg" fontSize={16} label="Gmail"/>
                </div>
                <div className="or-text">
                    <span>OR</span>
                </div>
                <div className="login-panel-body">
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
                    <a href="" className="green-text">Forget Password ?</a>
                </div>
                <div className="login-panel-footer">
                    <Button btnCallBack={this.signInAction.bind(this)} btnType="submit" btnSize="sm" fontSize={16} label="Sign In"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
