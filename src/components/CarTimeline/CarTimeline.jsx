import React, { Component } from 'react';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import MobileNotification from '../common/MobileNotification';
import Button from '../common/Button';
import OtherDetails from './OtherDetails';
import ServiceDetails from './ServiceDetails';
import Timeline from './Timeline';
import { Scrollbars } from 'react-custom-scrollbars';


export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            timelineUpdate: "timeline",
            BookServiceDropdown:false

        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    timelineDetail(val) {
        this.setState({ timelineUpdate: val });
    }
    BookServiceDropdown(){
        this.setState({BookServiceDropdown:!this.state.BookServiceDropdown});
    }

    render() {
        return (
            <div>
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
                            <h4>My Nissan GT-R <i className="mdi mdi-chevron-down"/></h4>
                            <Button btnType="" btnSize="sm timeline" fontSize={13} label="Book Service" />
                            <i className="mdi mdi-dots-vertical timeline" onClick={()=>{this.BookServiceDropdown();}}/>
                            {this.state.BookServiceDropdown && 
                            <div className="bookservice-more">
                                <ul>
                                    <li>Edit</li>
                                    <li>delete</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="row timeline-card">
                                <div className="col-md-3 pad0">
                                        <ServiceDetails />
                                </div>
                                <div className="col-md-9 pad0">
                                    <div className="row timeline-summary-header">
                                        <div className="col-md-6 pad0">
                                            <div className={this.state.timelineUpdate == "otherDetails" ? "timeline-summary-tab active" : "timeline-summary-tab"} onClick={() => { this.timelineDetail('otherDetails'); }}>
                                                <span>Other Details</span>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pad0">
                                            <div className={this.state.timelineUpdate == "timeline" ? "timeline-summary-tab active" : "timeline-summary-tab"} onClick={() => { this.timelineDetail('timeline'); }}>
                                                <span>Timeline</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row timeline-summary-body">
                                        <Scrollbars className="timelineScroll">
                                            {this.state.timelineUpdate == "otherDetails" && <div className="tab-otherDetails">
                                                <OtherDetails />
                                            </div>}
                                            {this.state.timelineUpdate == "timeline" && <div className="tab-timeline ">
                                                <Timeline />
                                            </div>}
                                        </Scrollbars>
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
