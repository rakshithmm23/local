import React, { Component } from 'react';
import Dropdown from '../common/Dropdown';
import Search from '../common/Search';
import { DropdownButton, MenuItem } from 'react-bootstrap';


export default class Header extends Component {
    constructor(props) {
        super(props);
        document.body.addEventListener("click", this.hideChevron.bind(this));
    }
    hideChevron(event) {
        debugger;
    }
    render() {
        const { authActions, router, notificationCount, profileName, notificationCallBack } = this.props;
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
                        <li className="notification-menu mobile-view hide" onClick={(e) => { e.preventDefault(); notificationCallBack(true); }}>
                            <label>
                                <i className="mdi mdi-bell" aria-hidden="true" />
                                <span className="no-notify"></span>
                            </label>
                        </li>

                        <li className="notification-menu">
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret title={
                                    <div className="d-inline-block">
                                        <i className="mdi mdi-bell" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                        <span className="arrow-up bell-notification"></span>
                                        {/*{this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                            {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}*/}
                                    </div>} >
                                    <MenuItem eventKey="My Audi">bell</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">Another action</MenuItem>
                                    <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">My Nissan GT-R</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">Add New</MenuItem>
                                </DropdownButton>
                            </div>
                        </li>

                        <li className="notification-menu mobile-view hide" onClick={(e) => { e.preventDefault(); notificationCallBack(true); }}>
                            <label>
                                <i className="mdi mdi-message-processing" aria-hidden="true" />
                                <span className="no-notify"></span>
                            </label>
                        </li>

                        <li className="notification-menu">
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret title={
                                    <div className="d-inline-block">
                                        <i className="mdi mdi-message-processing" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                        <span className="arrow-up message-notification"></span>
                                    </div>} >
                                    <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">Another action</MenuItem>
                                    <MenuItem eventKey="My Audi">My Audi</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">My Nissan GT-R</MenuItem>
                                    <MenuItem eventKey="My Nissan GT-R">Add New</MenuItem>
                                </DropdownButton>
                            </div>
                        </li>
                        <li className="profile-header">
                            <Dropdown authActions={authActions} router={router} />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
