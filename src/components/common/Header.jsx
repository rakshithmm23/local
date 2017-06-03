import React, { Component } from 'react';
import Dropdown from '../common/Dropdown';
import Search from '../common/Search';
import { DropdownButton, MenuItem,Media } from 'react-bootstrap';


export default class Header extends Component {
    constructor(props) {
        super(props);
       this.state = {
           notificationSelected:false,
           messageSelected:false
       }
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
                         <li className="notification-menu mobile-view hide" onClick={(e) => { e.preventDefault(); notificationCallBack(true); }}>
                            <label>
                                <i className="mdi mdi-message-processing" aria-hidden="true" />
                                <span className="no-notify"></span>
                            </label>
                        </li>

                        <li className={this.state.notificationSelected ? "notification-menu active":"notification-menu"}>
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onToggle={() => { this.setState({notificationSelected:!this.state.notificationSelected})}} title={
                                    <div className="">
                                        <i className="mdi mdi-bell" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                        {/*{this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-up" />}
                                            {!this.state.myCarDropdownIcon && <i className="mdi mdi-chevron-down" />}*/}
                                    </div>} >
                                    <MenuItem eventKey="My Nissan GT-R">
                                    
                                    Notifications
                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent a great offer for all care. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                </DropdownButton>
                            </div>
                        </li>
                         <li className={this.state.messageSelected ? "notification-menu active":"notification-menu"}>
                            <div className="text-dropdown notify" >
                                <DropdownButton bsSize="large" id="dropdown-size-large" noCaret onToggle={() => { this.setState({messageSelected:!this.state.messageSelected})}} title={
                                    <div className="d-inline-block">
                                        <i className="mdi mdi-message-processing" aria-hidden="true" />
                                        <span className="no-notify"></span>
                                    </div>} >
                                    <MenuItem eventKey="My Nissan GT-R">
                                        Messages
                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent you a invite. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent you a invite. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent you a invite. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
                                    <MenuItem eventKey="My Audi">
                                        <Media>
                                            <Media.Left>
                                                <div className="notification-img">
                                                    <img width={64} height={64} src="../../images/welcome.png" alt="Image" />
                                                </div>
                                                
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading> <span>Shine Works</span>  has sent you a message</Media.Heading>
                                                <p>Shine Works has sent you a invite. </p>
                                                <span className="notify-time">2 hours ago</span>
                                            </Media.Body>
                                        </Media>

                                    </MenuItem>
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
