import React, { Component } from 'react';

export default class StatusPopUp extends Component {

    render() {
        const { statusType, statusTitle, statusTime, statusProcess } = this.props;
        let statusClass = 'status-popup';
        return (
            <div className={statusClass + ' ' + (statusType ? statusType : '')}>
                <div className="iconHolder">
                    <span className="statusIcon" />
                </div>
                <div className="statusDescription">
                    <h4>{statusTitle}</h4>
                    <span>{statusTime}</span>
                </div>
                <span className="status-process">{statusProcess}</span>
            </div>
        );
    }
}
