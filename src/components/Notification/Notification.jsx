import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import {map} from 'lodash';

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
        const notificationItems = [
          {
            Day: 'Today',
            notificationData: [
              {
                notificationIcon: 'alert',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              },
              {
                notificationIcon: 'car',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              },
              {
                notificationIcon: 'alert',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              }
            ],
          },
          {
            Day: 'Yesterday',
            notificationData: [
              {
                notificationIcon: 'alert',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              },
              {
                notificationIcon: 'car',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              },
              {
                notificationIcon: 'alert',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              },
              {
                notificationIcon: 'car',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              }
            ],
          },
          {
            Day: 'Last Week',
            notificationData: [
              {
                notificationIcon: 'alert',
                notificationDesc: 'Your request #9596378 has been placed successfully. Our vendors are currently assessing your application and will get back with their quotes soon.',
                notificationTime: '2:30 pm'
              }
            ],
          }
        ];


        const sideBarCardList = map(notificationItems, (item, key) => {
        return (
            <div className="notiy-section" key={key}>
                <h5>{item.Day}</h5>
                {map(item.notificationData, (item, key) => {
                return (
                    <div className="notification-card" key={key}>
                        <span>
                          <i className={"mdi mdi-"+item.notificationIcon}/>
                        </span>
                        <p>
                          {item.notificationDesc}
                        </p>
                        <label>
                          {item.notificationTime}
                        </label>
                    </div>
                  );
                })}
            </div>
          );
        });

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
                            <h4>Notification</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                          <div className="row notification-wrapper">
                            {sideBarCardList}
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
