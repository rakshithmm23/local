import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import ProfileSteps from './ProfileSteps';
import MobileNotification from '../common/MobileNotification';

export default class NewCarProfile extends Component {
    constructor(props) {
        super(props);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false
        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }

    onSubmit(carProfileData){
      this.props.actions.setCarProfileAction(carProfileData);
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
                            <h4>Create A Car Profile</h4>
                        </div>
                    </div>

                    <div className="inSection">
                        <div className="padwrapper">
                            {/*Job Updates*/}
                            <ProfileSteps {...this.props} onSubmit={this.onSubmit.bind(this)} />
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
