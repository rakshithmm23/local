import React, {Component} from 'react';
import {each, map, range} from 'lodash';

export default class Status extends Component {

  render() {
    const {taskDone, taskPending} =  this.props;
    let statusText = 'status-text';
    const totalSteps = taskDone + taskPending;
    let statusRange = [];
    each(range(0,totalSteps), (key)=> {
      const currentRange = key+1;
      if (currentRange <= taskDone || taskDone == totalSteps) {
        statusRange.push('complete');
      } else if (currentRange === Number(taskDone)+1) {
        statusRange.push('active');
      } else {
        statusRange.push('disabled');
      }
    });
    const statusRangeList = map(statusRange, (item, key) => {
      return (
        <div className={"bs-wizard-step" + " " + item} key={key}>
          <div className="text-center bs-wizard-stepnum">Step 1</div>
          <div className="progress"><div className="progress-bar"/></div>
          <a href="#" className="bs-wizard-dot"/>
        </div>
      );
    });
    return (
      <div>
        <div className="row bs-wizard">
          {statusRangeList}
        </div>
      </div>
    );
  }
}
