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
                        <div className="login-panel confirmed-reset-panel">
                            <div className="login-panel-header forget-panel-header">
                                <h3 className="login-title">Confirmed</h3>
                                <p className="note-text">
                                   Your password has been reset , you can login with your new password.
                                </p>
                            </div>
                            <div className="login-panel-footer confirmed-reset">
                                <Button btnType="gmail" btnSize="sm" fontSize={14} label="Login" />
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

export default ResetPassword;