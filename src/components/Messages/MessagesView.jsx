import React, { Component } from 'react';
import { Media } from "react-bootstrap";
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class MessagesView extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-6 pad0">
                    <div className="inboxContainer">
                        <div className="inboxMessage">
                            { /*Active State with notification*/ }
                            <div className="messageCard active">
                                <Media>
                                    <Media.Left>
                                        <img width={36} height={36} src="../../images/car.jpg" alt="Image" />
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Ayaz's Buick</Media.Heading>
                                        <h4 className="messenger-name">Car Wash</h4>
                                        <span className="messenger-firm">Buddy's Car Service</span>
                                        <p><span>You:</span> Lorem ipsum dolor sit amet, consectetuer</p>
                                        <div className="option_time">
                                            <div className="three-dots-icon">
                                                <DropdownButton bsSize="xsmall" footer="show" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                                    <MenuItem eventKey="Share">Share Offer Details</MenuItem>
                                                    <MenuItem eventKey="Vendor Profile">View Vendor Profile</MenuItem>
                                                    <MenuItem eventKey="Email Vendor">Email Vendor</MenuItem>
                                                </DropdownButton>
                                                <span className="messageTime">3 hours ago</span>
                                            </div>
                                        </div>
                                        <div className="newMessage_count">
                                            1
                                        </div>
                                    </Media.Body>
                                </Media>
                            </div>
                            { /*Notification*/ }
                            <div className="messageCard">
                                <Media>
                                    <Media.Left>
                                        <img width={36} height={36} src="../../images/car.jpg" alt="Image" />
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Ayaz's Buick</Media.Heading>
                                        <h4 className="messenger-name">Car Wash</h4>
                                        <span className="messenger-firm">Buddy's Car Service</span>
                                        <p><span>You:</span> Lorem ipsum dolor sit amet, consectetuer</p>
                                        <div className="option_time">
                                            <div className="three-dots-icon">
                                                <DropdownButton bsSize="xsmall" footer="show" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                                    <MenuItem eventKey="Share">Share Offer Details</MenuItem>
                                                    <MenuItem eventKey="Vendor Profile">View Vendor Profile</MenuItem>
                                                    <MenuItem eventKey="Email Vendor">Email Vendor</MenuItem>
                                                </DropdownButton>
                                                <span className="messageTime">3 hours ago</span>
                                            </div>
                                        </div>
                                        <div className="newMessage_count">
                                            1
                                        </div>
                                    </Media.Body>
                                </Media>
                            </div>
                            { /*Without Notification*/ }
                            <div className="messageCard">
                                <Media>
                                    <Media.Left>
                                        <img width={36} height={36} src="../../images/car.jpg" alt="Image" />
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>Ayaz's Buick</Media.Heading>
                                        <h4 className="messenger-name">Car Wash</h4>
                                        <span className="messenger-firm">Buddy's Car Service</span>
                                        <p><span>You:</span> Lorem ipsum dolor sit amet, consectetuer</p>
                                        <div className="option_time">
                                            <div className="three-dots-icon">
                                                <DropdownButton bsSize="xsmall" footer="show" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                                    <MenuItem eventKey="Share">Share Offer Details</MenuItem>
                                                    <MenuItem eventKey="Vendor Profile">View Vendor Profile</MenuItem>
                                                    <MenuItem eventKey="Email Vendor">Email Vendor</MenuItem>
                                                </DropdownButton>
                                                <span className="messageTime">3 hours ago</span>
                                            </div>
                                        </div>
                                    </Media.Body>
                                </Media>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pad0">
                    <div className="messageBot">
                        <div className="quotes-right-header">
                            <div className="profile-head">
                                <span>
                                    <img src="../images/pic.png" alt="" />
                                </span>
                                <label> Shine Works </label>
                            </div>
                        </div>
                        <div className="quotes-chat-area">
                            <div className="c-message message-in">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                            <div className="c-message message-out message-continuation">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                            <div className="c-message message-out chain-msg">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                            <div className="c-message message-in message-continuation">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                            <div className="c-message message-in chain-msg message-continuation">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                            <div className="c-message message-in chain-msg">
                                <div className="profile-head">
                                    <span>
                                        <img src="../images/pic.png" alt="" />
                                    </span>
                                </div>
                                <div className="c-chat">
                                    <p>Lorem ipsum dolor sit amet, et tamquam docendi deleniti est</p>
                                </div>
                                <div className="delivered-details">
                                    <label>2:44 PM</label>
                                </div>
                            </div>
                        </div>
                        <div className="quotes-message-footer">
                            <FormGroup>
                                <InputGroup>
                                    <FormControl type="text" placeholder="Type your message here..." />
                                    <InputGroup.Addon>
                                        <i className="mdi mdi-send" />
                                    </InputGroup.Addon>
                                </InputGroup>
                            </FormGroup>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
