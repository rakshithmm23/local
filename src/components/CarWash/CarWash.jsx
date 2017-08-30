import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import Button from '../common/Button';
import WashSteps from './WashSteps';

export default class CarWash extends Component {
    constructor(props, context) {
      super(props, context);
      this.toggleNotification = this.toggleNotification.bind(this);
      this.state = {
          notificationVisible: false,
          messageVisible: false
      };
    }

    toggleNotification(isVisible) {
      this.setState({ 'notificationVisible': isVisible });
    }

    toggleMessage(isVisible) {
      this.setState({ 'messageVisible': isVisible });
    }

    render() {
        return (
            <div className="jobUpdate">
                {/*Header*/}
                <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification} messageCallBack={this.toggleMessage.bind(this)} router={this.props.router} actions={this.props.actions} />
                <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification} />
                <MobileMessage isVisible={this.state.messageVisible} backBtnCallBack={this.toggleMessage.bind(this)} />
                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar router={this.props.router} />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="page-sec-header">
                        <div className="padwrapper">
                            <h4>Car Wash</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper padwrapper-align">
                            <div className="myCar-list row">
                                <div className="myCar-body col-md-8">
                                    {/*Job Updates*/}
                                    <WashSteps />
                                </div>
                                <div className="myCar-body col-md-4">

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
