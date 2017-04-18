import React, {Component} from 'react';
import Dropdown from '../common/Dropdown';


export default class Header extends Component {
  render() {
    const {notificationCount, profileName, notificationCallBack} = this.props;
    return (
        <div className="header-section navbar-fixed-top">
            <div className="logo-section col-md-1 col-sm-2 col-xs-3">
                <img src="../images/logo.png" alt="" className="logo-img"/>
            </div>
            <div className="header-search col-md-7">
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-addon">
                          <i className="fa fa-search" aria-hidden="true"/>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search near your location"/>
                    </div>
                </div>
            </div>
            <div className="header-right col-md-4 col-sm-10 col-xs-9">
              <ul className="list-unstyled pull-right">
                  <li className="search-mobile">
                     <i className="fa fa-search" aria-hidden="true"/>
                  </li>
                  <li className="notification-menu" onClick={(e) => {e.preventDefault(); notificationCallBack(true);}}>
                      <label>
                        <i className="fa fa-bell-o" aria-hidden="true"/>
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
