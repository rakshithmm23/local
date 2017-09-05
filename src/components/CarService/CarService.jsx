import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import Button from '../common/Button';
import ServiceSteps from './ServiceSteps';
import SummaryCollpasePanel from '../common/SummaryCollpasePanel';

export default class CarWash extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false,

        };
    }
   
    
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    render() {
        debugger
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
                            <h4>Car Service</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper padwrapper-align">
                            <div className="myCar-list row">
                                <div className="myCar-body col-md-8">
                                    <ServiceSteps />
                                </div>
                                <div className="myCar-body col-md-4">
                                    {/*Car wash Updates*/}
                                    <div className="car-summary">
                                        <h5 className="summary-heading">
                                            Summary
                                        </h5>
                                        <div className="car-wrapper">
                                            <div className="type-card">
                                                <div className="type-img">
                                                    <img src="../images/book-service-1.png" alt="" />
                                                </div>
                                                <div className="type-desc">
                                                    <h5>Service Type</h5>
                                                    <label>Car Wash</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="category-wrapper">
                                            <div className="category-heading">
                                                <h5>Categories Selected</h5>
                                                <label>
                                                    <a href="">Edit</a>
                                                </label>
                                            </div>
                                            <div className="category-list">
                                                {/*<ul className="list-unstyled">
                                                    <li>
                                                        <img src="../../images/auto-service-icons-4.png" alt="" />
                                                        <label>AC heating & Cooling</label>
                                                    </li>
                                                    <li>
                                                        <img src="../../images/auto-service-icons-4.png" alt="" />
                                                        <label>AC heating & Cooling</label>
                                                    </li>
                                                </ul>*/}
                                                <SummaryCollpasePanel />
                                                <SummaryCollpasePanel />
                                                
                                            </div>
                                        </div>
                                        <div className="car-wrapper">
                                            <div className="type-card">
                                                <div className="type-desc only-desc">
                                                    <h5>Car Profile</h5>
                                                    <label>Car Profile yet to be selected</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="car-wrapper">
                                            <div className="type-card">
                                                <div className="type-desc only-desc">
                                                    <h5>Vendor</h5>
                                                    <label>Request will be sent to multiple Vendors.</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
