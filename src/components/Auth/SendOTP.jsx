import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';



export default class SendOTP extends Component {
    render() {
        const { router } = this.props;
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle='Sign Up' />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <Scrollbars className="customScroll">
                        <div className="login-panel otp">
                            <div className="login-panel-header">
                                <h3 className="login-title">Sign Up</h3>
                            </div>

                            <div className="login-panel-body">
                                <div className="form-group otp-input">
                                    <input type="text" className="form-control form-input" />
                                    <span className="error-text">Error text goes here</span>
                                    <label>Enter your phone number to receive an OTP</label>
                                </div>
                                <Button btnCallBack={(e) => { e.preventDefault(); router.push('verify-otp') }} btnType="submit" btnSize="sm" fontSize={16} label="Get OTP" />
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}
