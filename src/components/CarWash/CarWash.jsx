import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import WashSteps from './WashSteps';

export default class CarWash extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false
        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    render() {
        return (
            <div className="jobUpdate">
                {/*Header*/}
                <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification} />
                <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification} />
                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="page-sec-header">
                        <div className="padwrapper">
                            <h4>Car Wash</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row cw ">
                                    {/*Job Updates*/}
                                    <WashSteps />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerSection">
                    {/*AppLink*/}
                    <AppLink />
                    {/*Footer*/}
                    <Footer />
                </div>
            </div>
        );
    }
}
