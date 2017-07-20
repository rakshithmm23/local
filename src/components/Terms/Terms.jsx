import React, { Component } from 'react';
import { map } from 'lodash';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Extra from '../common/Extra';
import Deals from '../common/Deals';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import WelcomeText from '../common/WelcomeText';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import { serviceTypes } from '../../constants/staticData';

export default class Terms extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false
        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }

    render() {
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
                            <h4>Terms & Conditions</h4>
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row">
                                    <div className="desc-holder">
                                        <h5 className="terms-heading marginTop0">
                                            Carcility Terms of Service
                                        </h5>
                                        <span className="terms-content">Last modified: April 14, 2014 (view archived versions)</span>
                                        <h5 className="terms-heading spl-text">
                                            Welcome to Carcility!
                                        </h5>
                                        <p className="terms-content">
                                            Thanks for using our products and services (“Services”). The Services are provided by Google Inc. (“Google”), located at 1600 Amphitheatre Parkway, Mountain View, CA 94043, United States.
                                        </p>

                                        <p className="terms-content">
                                            By using our Services, you are agreeing to these terms. Please read them carefully.
                                        </p>
                                        <p className="terms-content">
                                            Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.
                                        </p>
                                        <h5 className="terms-heading">
                                            Using our Services
                                        </h5>
                                        <p className="terms-content">
                                            You must follow any policies made available to you within the Services.<br />
                                        </p>
                                        <p className="terms-content">
                                            Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide. You may use our Services only as permitted by law, including applicable export and re-export control laws and regulations. We may suspend or stop providing our Services to you if you do not comply with our terms or policies or if we are investigating suspected misconduct.
                                        </p>

                                        <p className="terms-content">Using our Services does not give you ownership of any intellectual property rights in our Services or the content you access. You may not use content from our Services unless you obtain permission from its owner or are otherwise permitted by law. These terms do not grant you the right to use any branding or logos used in our Services. Don’t remove, obscure, or alter any legal notices displayed in or along with our Services.</p>

                                        <p className="terms-content">Our Services display some content that is not Google’s. This content is the sole responsibility of the entity that makes it available. We may review content to determine whether it is illegal or violates our policies, and we may remove or refuse to display content that we reasonably believe violates our policies or the law. But that does not necessarily mean that we review content, so please don’t assume that we do.</p>

                                        <p className="terms-content">In connection with your use of the Services, we may send you service announcements, administrative messages, and other information. You may opt out of some of those communications.</p>
                                        <p className="terms-content">Some of our Services are available on mobile devices. Do not use such Services in a way that distracts you and prevents you from obeying traffic or safety laws.</p>
                                        <h5 className="terms-heading">Your Carcility Account</h5>

                                        <p className="terms-content">You may need a Google Account in order to use some of our Services. You may create your own Google Account, or your Google Account may be assigned to you by an administrator, such as your employer or educational institution. If you are using a Google Account assigned to you by an administrator, different or additional terms may apply and your administrator may be able to access or disable your account.</p>

                                        <p className="terms-content">To protect your Google Account, keep your password confidential. You are responsible for the activity that happens on or through your Google Account. Try not to reuse your Google Account password on third-party applications. If you learn of any unauthorized use of your password or Google Account, follow these instructions.</p>
                                        <h5 className="terms-heading">Privacy and Copyright Protection</h5>

                                        <p className="terms-content">Google’s privacy policies explain how we treat your personal data and protect your privacy when you use our Services. By using our Services, you agree that Google can use such data in accordance with our privacy policies.</p>

                                        <p className="terms-content">We respond to notices of alleged copyright infringement and terminate accounts of repeat infringers according to the process set out in the U.S. Digital Millennium Copyright Act.</p>

                                        <p className="terms-content">We provide information to help copyright holders manage their intellectual property online. If you think somebody is violating your copyrights and want to notify us, you can find information about submitting notices and Google’s policy about responding to notices in our Help Center.</p>

                                        <h5 className="terms-heading">Your Content in our Services</h5>

                                        <div>
                                            <p className="terms-content">Some of our Services allow you to upload, submit, store, send or receive content. You retain ownership of any intellectual property rights that you hold in that content. In short, what belongs to you stays yours.</p>
                                            <ul>
                                                <li ><span className="terms-content">When you upload, submit, store, send or receive content to or through our Services.</span></li>
                                                <li ><span className="terms-content">Google’s privacy policies explain how we treat your personal data and protect your privacy when you use our Services.</span> </li>
                                            </ul>
                                        </div>
                                        <p className="terms-content">To protect your Google Account, keep your password confidential. You are responsible for the activity that happens on or through
your Google Account. Try not to reuse your Google Account password on third-party applications. If you learn of any
unauthorized use of your password or Google Account, follow these instructions.</p>

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

