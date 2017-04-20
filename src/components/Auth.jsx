import React, { Component } from 'react';
import {SignUpForm, SignInForm, OtpForm, GetOtp} from './common/Forms';
import CarouselSlider from './common/CarouselSlider';
import LoginHeader from './common/LoginHeader';

export default class Authentication extends Component {

    render() {
        const formType = 'signUp';
        let formTitle = '';
        let currentFormView = '';
        switch (formType) {
            case 'signUp': {
                formTitle = 'Sign Up';
                currentFormView = <SignUpForm />;
                break;
            }
            case 'signIn': {
                formTitle = 'Sign In';
                currentFormView = <SignInForm />;
                break;
            }
            case 'otp': {
                formTitle = 'Sign Up';
                currentFormView = <OtpForm />;
                break;
            }
            case 'getotp': {
                formTitle = 'Sign Up';
                currentFormView = <GetOtp />;
                break;
            }
        }
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle={formTitle}/>
                <CarouselSlider />
                {currentFormView}
            </div>
        );
    }
}
