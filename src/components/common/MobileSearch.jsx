import React, { Component } from 'react';
import IconNotification from '../common/IconNotification';

export default class MobileSearch extends Component {

    render() {
        const {isVisible, backBtnCallBack} = this.props;
        return (
            <div className={isVisible ? 'mobileSearch': 'mobileSearch hide'}>
                <div className="notificationHead" onClick={(e) => {e.preventDefault(); backBtnCallBack(false);}}>
                    <div className="back-option"><img src="../../images/back-arrow.png" /></div>
                    <h4>Search</h4>
                </div>
            </div>
        );
    }
}
