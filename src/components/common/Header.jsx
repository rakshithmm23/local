import React, {Component} from 'react';
import Dropdown from '../common/Dropdown';


export default class Header extends Component {
  render() {
    const {notificationCount, profileName, notificationCallBack} = this.props;
    return (
        <div className="header-section navbar-fixed-top">
            <div className="logo-section">
                <img src="../../images/logo-new.png" alt="" className="logo-img"/>
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
                        <i className="mdi mdi-bell" aria-hidden="true"/>
                        <span className="no-notify"></span>
                      </label>
                  </li>
                   <li className="notification-menu" onClick={(e) => {e.preventDefault(); notificationCallBack(true);}}>
                      <label>
                        <i className="mdi mdi-message-processing" aria-hidden="true"/>
                        <span className="no-notify"></span>
                      </label>
                  </li>
                  <li className="profile-header">
                      <Dropdown/>
                  </li>
              </ul>
            </div>
        </div>
    );
  }
}
