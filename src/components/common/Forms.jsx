import React, { Component } from 'react';
import '../../styles/login.css';
import '../../styles/typography.css';
import Button from './Button';
import TextInput from './TextInput';

export class SignUpForm extends Component {
    render() {
        return (
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <div className="login-panel signup">
                        <div className="login-panel-header">
                            <h3 className="login-title">Sign Up</h3>
                            <Button btnType="facebook" btnSize="lg" fontSize={16} label="Facebook"/>
                            <Button btnType="gmail" btnSize="lg" fontSize={16} label="Gmail"/>
                        </div>
                        <div className="or-text">
                            <span>OR</span>
                        </div>
                        <div className="login-panel-body">
                            <TextInput label="Name" errorMessage={'Enter your name'}/>
                            <TextInput label="Email" errorMessage={'Please enter your email id'}/>
                            <TextInput label="Password" showPasswordImg={true}/>
                            <TextInput label="Mobile Number" isNumber={true}/>
                            <p className="note-text">
                                By signing up, you agree to the
                                <a href="" className="green-text"> terms and conditions </a>, and <a href="" className="green-text">privacy policy</a>.
                            </p>
                        </div>
                        <div className="login-panel-footer">
                            <Button btnType="submit" btnSize="sm" fontSize={16} label="Get OTP" />
                        </div>
                    </div>
                </div>
        );
    }
}

export class SignInForm extends Component {
    render() {
        return (
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
                        <TextInput label="Name" errorMessage={'Enter your name'}/>
                        <TextInput label="Password" showPasswordImg={true}/>
                        <a href="" className="green-text">Forget Password ?</a>
                    </div>
                    <div className="login-panel-footer">
                        <Button btnType="submit" btnSize="sm" fontSize={16} label="Sign In"/>
                    </div>
                </div>
            </div>
        );
    }
}

export class OtpForm extends Component {
    render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                <div className="login-panel otp">
                    <div className="login-panel-header">
                        <h3 className="login-title">Sign Up</h3>
                        <p className="note-text">
                            A One Time Password has been sent on your registered mobile no.
                                <strong>99999 99999 <i className="fa fa-pencil" /></strong>
                        </p>
                    </div>

                    <div className="login-panel-body">
                        <TextInput label="Enter the OTP code below to continue" isOTP={true}/>
                        <Button btnType="submit" btnSize="sm" fontSize={16} label="Proceed"/>
                        <p className="note-text">
                            {'Didn\'t get OTP ?'} <a href="" className="green-text">Resend</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export class GetOtp extends Component {
    render() {
        return (
            <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                <div className="login-panel otp">
                    <div className="login-panel-header">
                        <h3 className="login-title">Sign Up</h3>
                    </div>

                    <div className="login-panel-body">
                        <div className="form-group otp-input">
                            <input type="text" className="form-control form-input"  />
                            <span className="error-text">Error text goes here</span>
                            <label>Enter your phone number to receive an OTP</label>
                        </div>
                        <Button btnType="submit" btnSize="sm" fontSize={16} label="Get OTP"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default { SignUpForm, SignInForm, OtpForm, GetOtp };
