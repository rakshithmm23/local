import React, { Component } from 'react';

export default class IconNotification extends Component {

    render() {
        const {iconType, notifyClass, iconLabel} = this.props;
        let iconClass = 'job-icon';
        return (
            <div className={iconClass + ' ' + (notifyClass ? ' ' + notifyClass : '')} onClick={this.props.viewMessaging}>
                <span className={'mdi mdi-' + iconType}/>
                {(iconLabel == "Messages" || iconLabel == "Quotes") && <span className="notifyTag"/>}
                <span className="commentLabel">{iconLabel}</span>
            </div>
        );
    }
}
