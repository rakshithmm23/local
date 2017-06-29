import React, { Component } from 'react';
import Button from '../common/Button';

class pageNotFound extends Component {
    render() {
        return (
            <div>
                <div className="header-section">
                    <div className="logo-section">
                        <img src="../../images/logo-new.png" alt="" class="logo-img" />
                    </div>
                </div>
                <div className="pageNotFoundHolder">
                    <img src="../../images/404.png" alt=""/>
                    <span className="errTextHeading">404 Error Page</span>
                    <span className="sub-text">This page doesn’t exist anymore.</span>
                    <Button backgroundColor="red" btnSize="sm" fontSize={14} label="Go Back" />
                </div>
            </div>
        );
    }
}

export default pageNotFound;