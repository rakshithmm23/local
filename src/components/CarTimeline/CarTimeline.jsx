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
import { DropdownButton, MenuItem } from 'react-bootstrap';
import CustomModal from '../common/CustomModal';
import { Modal } from 'react-bootstrap';


export default class BookService extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            timelineUpdate: "timeline",
            myCarDropdownIcon: true,
            selectedCar: "My Nissan GT-R",
            showModal: false

        };
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    timelineDetail(val) {
        this.setState({ timelineUpdate: val });
    }
    myCarDropdown() {
        this.setState({ myCarDropdownIcon: !this.state.myCarDropdownIcon });
    }
    carSelection(car) {
        this.setState({ selectedCar: car });
    }
    // modalVisiblity() {
    //     this.setState({ showModal: true });
    // }

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
                            <Button btnType="" btnSize="sm" customClass="timeline" fontSize={14} label="Book Service" />
                            <div className="text-dropdown add-new" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onSelect={(e) => { this.carSelection(e) }} onToggle={() => { this.myCarDropdown() }} title={
                                    <span>
                                        <h4>{this.state.selectedCar}</h4>
                                        {this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}
                                        {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                    </span>} >
                                    <MenuItem eventKey="My Nissan GT-R">My Nissan GT-R</MenuItem>
                                    <MenuItem eventKey="BMW">BMW</MenuItem>
                                    <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                    <MenuItem eventKey="Ferrari">Ferrari</MenuItem>
                                    <MenuItem eventKey="">Add New</MenuItem>
                                </DropdownButton>
                            </div>

                            <div className="three-dots-icon">
                                <DropdownButton bsSize="xsmall" footer="show" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                    <MenuItem eventKey="Edit">Edit</MenuItem>
                                    <MenuItem eventKey="Delete" onClick={() =>  this.setState({ showModal: true })}>Delete</MenuItem>

                                </DropdownButton>
                            </div>
                            <CustomModal showModal={this.state.showModal} footer="true" title="Delete my audi a6" 
                            className="deleteCarProfile-modal" 
                            onHide={() => {this.setState({ showModal: false });}}
                            saveText="Delete">
                                <Modal.Body>
                                    <p className="warning-text">Are you sure you want to delete this profile?</p>
                                </Modal.Body>
                            </CustomModal>
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
