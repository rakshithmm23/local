import React, { Component } from 'react';
import IconNotification from '../common/IconNotification';

export default class MobileSearch extends Component {

    render() {
        const {isVisible, backBtnCallBack} = this.props;
        return (
            <div className={isVisible ? 'mobileSearch': 'mobileSearch hide'}>
                <div className="notificationHead">
                    <div className="back-option" onClick={(e) => {e.preventDefault(); backBtnCallBack(false);}}>
                      <img src="../../images/back-arrow.png" />
                    </div>
                    <h4>Search</h4>
                </div>
                <ul className="notificationList">
                    <li>
                        <h5>Lorem Ipsum diet</h5>
                        <p>Lorem ipsum diet notification text goes here</p>
                        <div className="delete-notification"><img src="../../images/delete.png" /></div>
                    </li>
                    <li className="active">
                        <h5>Lorem Ipsum diet</h5>
                        <p>Lorem ipsum diet notification text goes here</p>
                        <div className="delete-notification"><img src="../../images/delete.png" /></div>
                    </li>
                </ul>
            </div>
        );
    }
}
