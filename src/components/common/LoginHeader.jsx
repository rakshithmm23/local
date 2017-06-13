import React, { Component } from 'react';
import Dropdown from '../common/Dropdown';
import Search from '../common/Search';
import { DropdownButton, MenuItem, Media } from 'react-bootstrap';
import { map } from 'lodash';

export default class Header extends Component {
    render() {
      const {headerClickAction, pageType} = this.props;
        return (
            <div className="header-section navbar-fixed-top">
                <div className="logo-section">
                    <img src="../../images/logo-new.png" alt="" className="logo-img" />
                </div>
                <div className="header-right authNav-right">
                    <ul className="list-unstyled">
                        {pageType == "signIn" && <li>
                           <label>
                            Don’t have an account?
                              <a href="" onClick={headerClickAction}>Sign Up</a>
                           </label>
                        </li>}
                        {pageType == "signUp" && <li>
                           <label>
                            Already have an account?
                              <a href="" onClick={headerClickAction}>Sign In</a>
                           </label>
                        </li>}
                    </ul>
                </div>
            </div>
        );
    }
}
