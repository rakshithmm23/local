import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class SignIn extends Component {
    render() {
        const { router } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign In' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <GeminiScrollbar>
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
                                <TextInput label="Name" errorMessage={'Enter your name'} />
                                <TextInput label="Password" showPasswordImg={true} />
                            </div>
                            <div className="login-panel-footer">
                                <a href="" className="green-text">Forget Password ?</a>
                                <Button btnType="submit" btnSize="sm" fontSize={16} label="Sign In" />
                            </div>
                            <div className="auth-footer-text text-center">
                                Dont't have an account? <a href="" className="green-text" onClick={(e) => { e.preventDefault(); router.push('sign-up'); }}>Sign Up</a>
                            </div>
                        </div>
                    </GeminiScrollbar>
                </div>
            </div>
        );
    }
}
