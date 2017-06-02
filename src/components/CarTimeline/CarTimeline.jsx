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
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';


export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            timelineUpdate: "timeline",
            myCarDropdownIcon:true

        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    timelineDetail(val) {
        this.setState({ timelineUpdate: val });
    }
    myCarDropdown(){
        this.setState({myCarDropdownIcon:!this.state.myCarDropdownIcon})
    }

    render() {
        debugger
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
                            
                            <Button btnType="" btnSize="sm timeline" fontSize={13} label="Book Service"/>
                            <div className="text-dropdown" >
                                    <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onToggle={()=>{this.myCarDropdown()}} title={
                                        <span>
                                            <h4>My Nissan GT-R</h4>
                                            {this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                            {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}
                                        </span>} >
                                        <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                        <MenuItem eventKey="My Nissan GT-R">Another action</MenuItem>
                                        <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                        <MenuItem eventKey="My Nissan GT-R">My Nissan GT-R</MenuItem>
                                        <MenuItem eventKey="My Nissan GT-R">Add New</MenuItem>
                                    </DropdownButton>
                            </div>

                            <div className="three-dots-icon">
                                <DropdownButton bsSize="xsmall" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                    <MenuItem eventKey="Edit">Edit</MenuItem>
                                    <MenuItem eventKey="<Delete></Delete>">Delete</MenuItem>
                                </DropdownButton>
                            </div>
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
