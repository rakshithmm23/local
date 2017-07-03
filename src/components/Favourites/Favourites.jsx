import React, { Component } from 'react';
import {map} from 'lodash';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Extra from '../common/Extra';
import Deals from '../common/Deals';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import RequestCard from './RequestCard';
import WelcomeText from '../common/WelcomeText';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import {serviceTypes} from '../../constants/staticData';

export default class Favourites extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false
        };
    }

    toggleNotification(isVisible) {
        this.setState({'notificationVisible': isVisible});
    }
    
    toggleMessage(isVisible) {
        this.setState({'messageVisible': isVisible});
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
                    <Sidebar />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="page-sec-header">
                        <div className="padwrapper">
                            <h4>Favourites</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row">
                                    {/*Job Updates*/}
                                    <RequestCard />
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

