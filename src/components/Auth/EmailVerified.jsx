import React, { Component } from 'react';
import CarouselSlider from '../common/CarouselSlider';
import LoginHeader from '../common/LoginHeader';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import AlertDismissable from '../common/AlertDismissable';
import { Scrollbars } from 'react-custom-scrollbars';

export default class EmailVerified extends Component {
  componentWillMount() {
    const currentRoute = this.props.router.getCurrentLocation();
      if (currentRoute.query && currentRoute.query.type && currentRoute.query.code) {
      } else {
        this.props.router.push('/');
      }
  }
    render() {
        return (
            <div className="container-fluid" id="wrapper">
                <LoginHeader headerTitle="Sign Up" />
                <CarouselSlider />
                <div className="col-md-6 col-sm-12 col-xs-12 pad0 grid-12">
                    <Scrollbars className="customScroll">
                        <div className="login-panel confirmed-reset-panel">
                            <div className="login-panel-header forget-panel-header">
                                <h3 className="login-title">Verification Success</h3>
                                <p className="note-text">
                                   Your email has been verified successfully.
                                </p>
                            </div>
                            <div className="login-panel-footer confirmed-reset">
                                <Button btnType="gmail" btnSize="sm" fontSize={14} label="Login" btnCallBack={(e) => {e.preventDefault(); this.props.router.push('/sign-in')}}/>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}
