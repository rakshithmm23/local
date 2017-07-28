import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import { Scrollbars } from 'react-custom-scrollbars';

class ResetPassword extends Component {
    render() {
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle="Sign Up" />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <Scrollbars className="customScroll">
                        <div className="login-panel otp">
                            <div className="login-panel-header forget-panel-header">
                                <h3 className="login-title">Reset Password</h3>
                                <p className="note-text">
                                    Enter new password to reset.
                                </p>
                            </div>
                            <div className="login-panel-body">
                                <TextInput
                                    type="password"
                                    label="Password"
                                    name="password"
                                />
                                 <TextInput
                                    type="password"
                                    label="Re-Enter Password"
                                    name="re-enter password"
                                />
                            </div>
                            <div className="login-panel-footer">
                                <Button btnType="gmail" btnSize="sm" fontSize={14} label="Reset" />
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default ResetPassword;