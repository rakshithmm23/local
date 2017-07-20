import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import Button from '../common/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import CoverPhoto from './CoverPhoto';
import Address from './Address';
import BaseHeader from './BaseHeader';
import Description from './Description';
import Offers from './Offers';
import Photos from './Photos';
import Reviews from './Reviews';
import Services from './Services';
import {Element} from 'react-scroll';

export default class VendorProfile extends Component {
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
            <div>
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
                            <h4>Vendor Profile</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <CoverPhoto />
                            <BaseHeader />
                            <div className="vendor-profile-section row">
                                <div className="col-md-8 vp_left">
                                    <Element name="overview">
                                      <Description />
                                    </Element>
                                    <Element name="services">
                                      <Services />
                                    </Element>
                                    <Element name="reviews">
                                      <Reviews />
                                    </Element>
                                </div>
                                <div className="col-md-4 vp_right">
                                    <Photos />
                                    <Address />
                                    <Element  name="offers">
                                      <Offers />
                                    </Element>
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
