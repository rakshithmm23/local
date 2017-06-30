import React, { Component } from 'react';
import Dropdown from '../common/Dropdown';
import Search from '../common/Search';
import { DropdownButton, MenuItem, Media } from 'react-bootstrap';
import { map } from 'lodash';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationSelected: false,
            messageSelected: false
        }
    }

    render() {
        const { actions, router, notificationCount, profileName, notificationCallBack, messageCallBack } = this.props;
        const messagesThread = [
            {
                messageFrom: "Shine Works",
                image: "../../images/notification1.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification2.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification3.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification4.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }

        ]
        const notificationThread = [
            {
                messageFrom: "Shine Works",
                image: "../../images/notification1.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification2.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification3.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }, {
                messageFrom: "Shine Works",
                image: "../../images/notification4.png",
                text: "Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.",
                time: "2 hours ago"
            }

        ]
        const viewMessages = map(messagesThread, (message, key) => {
            return (
                <MenuItem eventKey={message.key} key={key}>
                    <Media>
                        <Media.Left>
                            <div className="notification-img">
                                <img src={message.image} alt="Image" />
                            </div>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading> <span>{message.messageFrom}</span>  has sent you a message</Media.Heading>
                            <p>{message.text} </p>
                            <span className="notify-time">{message.time}</span>
                        </Media.Body>
                    </Media>

                </MenuItem>
            )
        })
        const viewNotifications = map(notificationThread, (message, key) => {
            return (
                <MenuItem eventKey={message.key} key={key}>
                    <Media>
                        <Media.Left>
                            <div className="notification-img">
                                <img src={message.image} alt="Image" />
                            </div>
                        </Media.Left>
                        <Media.Body>
                            <Media.Heading> <span>{message.messageFrom}</span>  has sent you a message</Media.Heading>
                            <p>{message.text} </p>
                            <span className="notify-time">{message.time}</span>
                        </Media.Body>
                    </Media>

                </MenuItem>
            )
        })
        return (
            <div className="header-section navbar-fixed-top">
                <div className="logo-section">
                    <img src="../../images/logo-new.png" alt="" className="logo-img" />
                </div>
                <div className="header-search">
                    <Search />
                </div>
                <div className="header-right">
                    <ul className="list-unstyled">
                        <li className="search-mobile">
                            <i className="mdi mdi-magnify" aria-hidden="true" />
                        </li>

                        <li className="notification-menu mobile-view" onClick={(e) => { e.preventDefault(); notificationCallBack(true); }}>
                            <label>
                                <i className="mdi mdi-bell" aria-hidden="true" />
                                <span className="no-notify"></span>
                            </label>
                        </li>
                        <li className="notification-menu mobile-view" onClick={(e) => { e.preventDefault(); messageCallBack(true); }}>
                            <label>
                                <i className="mdi mdi-message-processing" aria-hidden="true" />
                                <span className="no-notify"></span>
                            </label>
                        </li>

                        <li className={this.state.notificationSelected ? "notification-menu desktop-view active" : "notification-menu desktop-view"}>
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onToggle={() => { this.setState({ notificationSelected: !this.state.notificationSelected }) }} title={
                                    <div className="">
                                        <i className="mdi mdi-bell" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                        {/*{this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                            {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}*/}
                                    </div>} >
                                    <MenuItem eventKey="Notifications">
                                        Notifications
                                        <a href="" className="view_all">View All</a>
                                    </MenuItem>
                                    {viewNotifications}
                                </DropdownButton>
                            </div>
                        </li>
                        <li className={this.state.messageSelected ? "notification-menu desktop-view active" : "notification-menu desktop-view"}>
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onToggle={() => { this.setState({ messageSelected: !this.state.messageSelected }) }} title={
                                    <div className="d-inline-block">
                                        <i className="mdi mdi-message-processing" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                    </div>} >
                                    <MenuItem eventKey="Messages">
                                        Messages
                                        <a href="" className="view_all">View All</a>
                                    </MenuItem>

                                    {viewMessages}
                                </DropdownButton>
                            </div>
                        </li>

                        <li className="profile-header">
                            <Dropdown actions={actions} router={router} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
