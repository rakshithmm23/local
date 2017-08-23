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

import { serviceTypes } from '../constants/staticData';

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
        const authData = JSON.parse(localStorage.getItem('authData'));
        const serviceTypesView = map(serviceTypes, (service, key) => {
            return (
                <div className="col-md-3 col-sm-3 col-xs-6 mpad-0" key={key} onClick={() => this.props.router.push(service.hyperlink)}>
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

                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar router={this.props.router} />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    { !(authData && authData.hasVehicleProfile) && <div className="topSection">
                        <div className="padwrapper">
                            {/*Welcome Text*/}
                             <WelcomeText router={this.props.router} />
                        </div>
                    </div>}
                    <div className="inSection">
                        <div className="padwrapper">
                            {/*Service List*/}
                            <h4 className="serviceList-title">Pick a Service, to get a quote</h4>
                            <div className="service-list text-center row">
                                {serviceTypesView}
                            </div>
                        </div>
                    </div>

                    <div className="topSection empty">
                        <div className="padwrapper">
                            {/*Empty Text*/}
                            <EmptyUpdates router={this.props.router} />
                        </div>
                    </div>

                    <div className="inSection dash-jobupdate-bg">
                        <div className="padwrapper">
                            {/*Job Updates*/}
                            <div className="jobUpdate-padding">
                            <JobUpdate router={this.props.router} />
                            </div>
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
