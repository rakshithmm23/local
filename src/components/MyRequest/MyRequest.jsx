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
import {serviceTypes} from '../../constants/staticData';

export default class MyRequest extends Component {
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
          <div className="col-md-3 col-sm-3 col-xs-6 mpad-0" key={key}>
            <div className="service-data">
              <img src={service.serviceImage} alt=""/>
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
                    
                    <div className="inSection">
                        <div className="padwrapper">
                            {/*Job Updates*/}
                            <RequestCard />
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
