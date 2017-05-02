import React, { Component } from 'react';
import IconNotification from '../common/IconNotification';

export default class MobileNotification extends Component {

    render() {
        const {isVisible, backBtnCallBack} = this.props;
        return (
            <div className={isVisible ? 'mobileNotification': 'mobileNotification hide'}>
                <div className="notificationHead" onClick={(e) => {e.preventDefault(); backBtnCallBack(false);}}>
                    <div className="back-option"><img src="../../images/back-arrow.png" /></div>
                    <h4>Notification Title</h4>
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
