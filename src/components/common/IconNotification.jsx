import React, { Component } from 'react';

export default class IconNotification extends Component {

    render() {
        const {iconType, notifyClass, notifyCount, jobLabel,  iconLabel} = this.props;
        let iconClass = 'job-icon';
        return (
            <div className={iconClass + ' ' + (iconType ? iconType : '') + (notifyClass ? ' ' + notifyClass : '') + (jobLabel ? ' ' + jobLabel : '')}>
                <span className="iconView"/>
                <span className="notifyTag">{notifyCount}</span>
                <span className="commentLabel">{iconLabel}</span>
            </div>
        );
    }
}
