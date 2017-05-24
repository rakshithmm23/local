import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import BookServiceBox from './BookServiceBox';

export default class BookService extends Component {
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
                    <div className="new-car-profile add-new-car">
                        <div className="title">
                            <h4>My Card</h4>
                        </div>
                        <Button btnType="" btnSize="sm" fontSize={13} label="Next" />
                    </div>

                    <div className="inSection anc container">
                        <div className="padwrapper">
                            {/*Job Updates*/}
                            <BookServiceBox date="17 April 16" model="Red 2016" place="B 509234 Dubai" name="My Nissan GT-R"/>
                            <BookServiceBox date="17 April 16" model="Red 2016" place="B Singapore" name="My Nissan GT-R"/>
                            <BookServiceBox date="17 April 16" model="Red 2016" place=" Hong Kong" name="My Nissan GT-R"/>
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
