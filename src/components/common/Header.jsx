import React, {Component} from 'react';
import Dropdown from '../common/Dropdown';


export default class Header extends Component {
  render() {
    const {notificationCount, profileName, notificationCallBack} = this.props;
    return (
        <div className="header-section navbar-fixed-top">
            <div className="logo-section">
                <img src="./src/images/logo.png" alt="" className="logo-img"/>
            </div>
            <div className="header-search">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon">
                          <i className="mdi mdi-magnify" aria-hidden="true"/>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search near your location"/>
                    </div>
                </div>
            </div>
            <div className="header-right">
              <ul className="list-unstyled">
                  <li className="search-mobile">
                     <i className="mdi mdi-magnify" aria-hidden="true"/>
                  </li>
                  <li className="notification-menu" onClick={(e) => {e.preventDefault(); notificationCallBack(true);}}>
                      <label>
                        <i className="mdi mdi-bell-outline" aria-hidden="true"/>
                        <span className="no-notify">{notificationCount}</span>
                      </label>
                  </li>
                  <li className="profile-header">
                      {/*<div className="dropdown">
                          <div className="profile-dropdown" data-toggle="dropdown">
                              <div className="profile-img">
                                <img src="../images/pic.png" alt="" className="dropdown-toggle"/>
                              </div>
                              <div className="profile-desc">
                                <span>{profileName}</span>
                                <i className="fa fa-angle-down" aria-hidden="true"/>
                              </div>
                          </div>
                      </div>*/}
                      <Dropdown/>
                  </li>
              </ul>
            </div>
        </div>
    );
  }
}
