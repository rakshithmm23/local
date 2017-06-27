import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import CoverPhoto from './CoverPhoto';
import Address from './Address';
import BaseHeader from './BaseHeader';
import Comments from './Comments';
import Description from './Description';
import Offers from './Offers';
import Photos from './Photos';
import Reviews from './Reviews';
import Services from './Services';


export default class VendorProfile extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    render() {
        return (
            <div>
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
                            <h4>Vendor Profile</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <CoverPhoto />
                            <BaseHeader />
                            <div className="vendor-profile-section row">
                                <div className="col-md-8 vp_left">
                                    <Description />
                                    <Services />
                                    <Reviews />
                                </div>
                                <div className="col-md-4 vp_right">
                                    <Photos />
                                    <Address />
                                    <Offers />
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
