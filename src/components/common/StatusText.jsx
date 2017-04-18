import React, { Component } from 'react';

export default class StatusText extends Component {

    render() {
        const { taskDone, taskPending } = this.props;
        let statusText = 'status-text';
        return (
            <div className={statusText}>
                The Service provider has completed {taskDone} tasks, while {taskPending} tasks are left.
            </div>
        );
    }
}
