import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import GeminiScrollbar from 'react-gemini-scrollbar';

export default class VerifyOTP extends Component {
    render() {
        const { router } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign Up' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <GeminiScrollbar>
                        <div className="login-panel otp">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign Up</h3>
                                <p className="note-text">
                                    A One Time Password has been sent on your registered mobile no.
                            <strong>99999 99999 <i className="fa fa-pencil" /></strong>
                                </p>
                            </div>

                            <div className="login-panel-body">
                                <TextInput label="Enter the OTP code below to continue" isOTP={true} />
                                <Button btnCallBack={(e) => { e.preventDefault(); router.push('dashboard') }} btnType="submit" btnSize="sm" fontSize={16} label="Proceed" />
                                <p className="note-text">
                                    {'Didn\'t get OTP ?'} <a href="" className="green-text">Resend</a>
                                </p>
                            </div>
                        </div>
                    </GeminiScrollbar>
                </div>
            </div>
        );
    }
}
