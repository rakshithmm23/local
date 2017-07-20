import React, { Component } from 'react';
import { map } from 'lodash';
import Header from '../common/Header';
import Sidebar from '../common/Sidebar';
import Extra from '../common/Extra';
import Deals from '../common/Deals';
import AppLink from '../common/AppLink';
import Footer from '../common/Footer';
import RequestCard from './RequestCard';
import WelcomeText from '../common/WelcomeText';
import MobileNotification from '../common/MobileNotification';
import MobileMessage from '../common/MobileMessage';
import { serviceTypes } from '../../constants/staticData';
import { DropdownButton, MenuItem, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import CustomModal from '../common/CustomModal';
import TextInput from '../common/TextInput';


export default class MyRequest extends Component {
    constructor(props, context) {
        super(props, context);
        this.toggleNotification = this.toggleNotification.bind(this);
        this.state = {
            notificationVisible: false,
            messageVisible: false,
            showModal: false,
            max_chars:200,
            chars_left:0,
            requestType: ''
        };
    }

    componentWillMount() {
        if (window.location.search.indexOf('type=waiting') > -1 ) {
         this.setState({'requestType': 'waiting'});
        } else if (window.location.search.indexOf('type=success') > -1 ) {
         this.setState({'requestType': 'success'});
        }
        
    }
    toggleNotification(isVisible) {
        this.setState({ 'notificationVisible': isVisible });
    }
    toggleMessage(isVisible) {
        this.setState({ 'messageVisible': isVisible });
    }
    handleChange(event) {
        let input = null
        input = event
        const val = event.target.value;
        this.setState({
            chars_left: this.state.max_chars - val.length
        });
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
                            <h4>My Request</h4>
                            <div className="three-dots-icon">
                                <DropdownButton bsSize="xsmall" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                    <MenuItem eventKey="Edit">Edit Request</MenuItem>
                                    <MenuItem eventKey="Cancel" onClick={() => this.setState({ showModal: true })}>Cancel Request</MenuItem>

                                </DropdownButton>
                            </div>
                            <CustomModal showModal={this.state.showModal} footer="true" title="Cancel request" saveText="Confirm" cancelText="Close">
                                <Modal.Body>
                                    <p className="info-text">Please let us know why you would like to cancel this request from the options below</p>
                                    <div className="info-heading">
                                        <span>reason to cancel</span>
                                    </div>
                                    <div className="model-select">
                                        <select className="car-selection ">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <i className="mdi mdi-chevron-down" />
                                    </div>
                                    <div className="comments">
                                       
                                        <FormGroup>
                                          <FormControl
                                              className="textAlign"
                                              componentClass="textarea"
                                              placeholder="Comments"
                                              onChange={this.handleChange.bind(this)} />
                                          </FormGroup>
                                        <span className="text-limit">{this.state.chars_left}/200</span>
                                    </div>
                                </Modal.Body>
                            </CustomModal>
                        </div>

                    </div>
                    <div className="inSection">
                        <div className="padwrapper">
                            <div className="myCar-list">
                                <div className="myCar-body row">
                                    {/*Job Updates*/}
                                    <RequestCard />
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
