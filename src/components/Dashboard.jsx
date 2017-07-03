import React, { Component } from 'react';
import { map } from 'lodash';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Extra from './common/Extra';
import Deals from './common/Deals';
import AppLink from './common/AppLink';
import Footer from './common/Footer';
import JobUpdate from './common/JobUpdate';
import WelcomeText from './common/WelcomeText';
import EmptyUpdates from './common/EmptyUpdates';
import MobileNotification from './common/MobileNotification';
import MobileMessage from './common/MobileMessage';
import MobileSearch from './common/MobileSearch';
import { serviceTypes } from '../constants/staticData';
import { decryptCookie } from '../helpers';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false,
            searchVisible: false
        };
    }
    // componentWillMount() {
    //     this.props.actions.fetchCurrentUserInfo(this.props.router);
    //     const signedUserDataCookie = cookies.get('carauth');
    //     if (localStorage && localStorage.authData) {
    //         const authData = JSON.parse(localStorage.authData);
    //         if (!authData.phone) {
    //             this.props.router.push('send-otp');
    //         } else if (!authData.phoneVerified) {
    //             this.props.router.push('verify-otp');
    //         }
    //     }
    //     else if (!signedUserDataCookie) {
    //         this.props.router.push('/');
    //     }
    // }
    // componentWillReceiveProps() {
    //     if (localStorage && localStorage.authData) {
    //         const authData = JSON.parse(localStorage.authData);
    //         if (!authData.phone) {
    //             this.props.router.push('send-otp');
    //         } else if (!authData.phoneVerified) {
    //             this.props.router.push('verify-otp');
    //         }
    //     }
    //     else {
    //         this.props.router.push('/');
    //     }
    // }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    toggleSearch(isVisible) {
        this.setState({ 'searchVisible': isVisible });
    }

    render() {
        const serviceTypesView = map(serviceTypes, (service, key) => {
            return (
                <div className="col-md-3 col-sm-3 col-xs-6 mpad-0" key={key}>
                    <div className="service-data">
                        <img src={service.serviceImage} alt="" />
                        <label>{service.name}</label>
                    </div>
                </div>
            );
        });
        return (
            <div>
                {/*Header*/}
                <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification} messageCallBack={this.toggleMessage.bind(this)} searchCallBack={this.toggleSearch.bind(this)} router={this.props.router} actions={this.props.actions} />
                <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification} />
                <MobileMessage isVisible={this.state.messageVisible} backBtnCallBack={this.toggleMessage.bind(this)} />
                <MobileSearch isVisible={this.state.searchVisible} backBtnCallBack={this.toggleSearch.bind(this)} />

                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="topSection">
                        <div className="padwrapper">
                            {/*Welcome Text*/}
                            <WelcomeText router={this.props.router} />
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            {/*Service List*/}
                            <div className="service-list text-center row">
                                {serviceTypesView}
                            </div>
                        </div>
                    </div>

                    <div className="topSection empty">
                        <div className="padwrapper">
                            {/*Empty Text*/}
                            <EmptyUpdates />
                        </div>
                    </div>

                    <div className="inSection dash-jobupdate-bg">
                        <div className="padwrapper">
                            {/*Job Updates*/}
                            <JobUpdate />
                        </div>
                    </div>
                    <div className="bottomSection">
                        <div className="padwrapper">
                            {/*Deals*/}
                            <Deals />
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
