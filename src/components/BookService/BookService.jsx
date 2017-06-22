import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import BookServiceBox from './BookServiceBox';
import { concat } from 'lodash';

export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        let carProfiles = localStorage.getItem('carProfiles');
        if (!carProfiles) {
          carProfiles = [];
        }
        carProfiles = concat(JSON.parse(carProfiles), [
          {
            make: "abc",
            model: "Red",
            regNo: "B 509234",
            name: "My Nissan GT-R",
            year: 2015
          },
          {
            make: "abc",
            model: "Red",
            regNo: "B 509234",
            name: "My Nissan GT-R",
            year: 2015
          }
        ]
        );
        console.log(carProfiles)
        this.state = {
            notificationVisible: false,
            carProfiles: carProfiles
        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    render() {
        return (
            <div>
                {/*Header*/}
                <Header notificationCount={2} profileName="Derrick Frank" notificationCallBack={this.toggleNotification} router={this.props.router} actions={this.props.actions}/>
                <MobileNotification isVisible={this.state.notificationVisible} backBtnCallBack={this.toggleNotification} />
                <div className="main-wrapper">
                    {/*Sidebar*/}
                    <Sidebar />
                    {/*message*/}
                    {/*<Extra message="Your email account has been verified. We are open for service!" />*/}
                    <div className="page-sec-header">
                        <div className="padwrapper">
                            <h4>My Cars</h4>
                            <Button btnType="" btnSize="sm" fontSize={13} label="Add New Car" />
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row">
                                    {/*Job Updates*/}
                                    {this.state.carProfiles && this.state.carProfiles.map((profile, index) => {
                                      return (<BookServiceBox date="17 April 16" year={profile.year} model={profile.model} regNo={profile.regNo} name={profile.name} key={index}/>);
                                    })}
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
