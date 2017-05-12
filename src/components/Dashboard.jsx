import React, { Component } from 'react';
import {map} from 'lodash';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import Extra from './common/Extra';
import Deals from './common/Deals';
import AppLink from './common/AppLink';
import Footer from './common/Footer';
import JobUpdate from './common/JobUpdate';
import WelcomeText from './common/WelcomeText';
import MobileNotification from './common/MobileNotification';
import {serviceTypes} from '../constants/staticData';

export default class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false
        };
    }
    toggleNotification(isVisible) {
        this.setState({'notificationVisible': isVisible});
    }

    render() {
      const serviceTypesView = map(serviceTypes, (service, key) => {
        return (
          <div className="col-md-3 col-xs-6 mpad-0" key={key}>
            <div className="service-data">
              <span className={service.className}/>
              <label>{service.name}</label>
            </div>
          </div>
        );
      });
        return (
            <div>
                {/*Header*/}
                <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification}/>
                <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification}/>
                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="padwrapper">
                        {/*Welcome Text*/}
                        <WelcomeText />
                        {/*Service List*/}
                        <div className="service-list text-center row">
                            <h5>Need to book a car
                                <span>service? </span>
                                 Let us help you find it.
                            </h5>
                            {serviceTypesView}
                        </div>
                    </div>
                    <div className="padwrapper">
                        {/*Job Updates*/}
                         <JobUpdate />
                        {/*Deals*/}
                        <Deals />
                    </div>
                </div>
                {/*AppLink*/}
                <AppLink />
                {/*Footer*/}
                <Footer />
            </div>
        );
    }
}
