import React, {Component} from 'react';
import {map} from 'lodash';

export default class Status extends Component {

  render() {
    const statusRange = [
      {
          step: 'complete',
      },
      {
          step: 'complete',
      },
      {
          step: 'active',
      },
      {
          step: 'disabled',
      }
    ]
    const statusRangeList = map(statusRange, (item, key) => {
      return (
        <div className={"bs-wizard-step" + " " + item.step} key={key}>
          <div className="text-center bs-wizard-stepnum">Step 1</div>
          <div className="progress"><div className="progress-bar"/></div>
          <a href="#" className="bs-wizard-dot"/>
        </div>
      );
    });
    return (
        <div className="row bs-wizard">
          {statusRangeList}
        </div>
    );
  }
}
