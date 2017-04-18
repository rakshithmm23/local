import React, {Component} from 'react';
import {map} from 'lodash';
import IconNotification from '../common/IconNotification';
// import JobCard from '../common/JobCard';
import Badge from '../common/Badge';
// import JobCardInfo from '../common/JobCardInfo';
import Status from '../common/Status';
// import StatusPopUp from '../common/StatusPopUp';
import StatusText from '../common/StatusText';

export default class JobUpdate extends Component {
  render() {
    const { infoStatus } = this.props;
    let infoClass = 'jobInfo ';
    let statusClass = 'status-popup';
    const { statusType, statusTitle, statusTime, statusProcess } = this.props;

    const jobData = [
      {
        carImage: '../images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'WARNING',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'You have received 2 new quotes and 3 new messages. Start a chat with the vendor ' +
          'to define the scope of work and negotiate the quotation.',
        statusStep: '',
        statusText: 'The Service provider has completed 2 tasks, while 6 tasks are left',
        statusPopup: [
          {
            imgClassName: 'statusIcon',
            statusDescription: 'Brakes and Exhaust Work',
            statusTime: '09 Mar 15 11:00 AM',
            statusMessage: 'ONGOING'
          }
        ]
      }
    ];
    const JobDataList = map(jobData, (item, key) => {
      const JobsubList = map(item.statusPopup, (subItem, subKey) => {
        return (
           <div className={statusClass + ' ' + (statusType ? statusType : '')} key={subKey}>
                <div className="iconHolder">
                    <span className={subItem.imgClassName} />
                </div>
                <div className="statusDescribtion">
                    <h4>{subItem.statusDescription}</h4>
                    <span>{subItem.statusTime}</span>
                </div>
                <span className="status-process">{subItem.statusMessage}</span>
            </div>
        );
      });
      return (
        <div className="job-updates row" key={key}>
          <div className="col-md-12 col-sm-12 col-xs-12 pad0">
            <div className="col-md-5 col-sm-5 col-xs-12 pad0">
              <div className="job-left">
                <div className="job-card">
                  <div className="card-img">
                    <img src={item.carImage} alt="Ayaz's Buick"/>
                  </div>
                  <div className="card-info">
                    <div className="job-name">{item.customerName}</div>
                    <div className="job-id">
                      <label>ID :</label>
                      <span>{item.customeId}</span>
                    </div>
                    <div className="job-title">{item.serviceTypes}</div>
                  </div>
                  <div className="card-time">
                    <ul>
                      <li>
                        <label>Request Date</label>
                        <span>{item.requestDate}</span>
                      </li>
                      <li>
                        <label>Start</label>
                        <span>{item.startDate}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12 pad0">
              <div className="job-right">
                <div className="job-right-header">
                  <Badge badgeType="warning" fontSize={14}>
                    {item.statusIndicator}
                  </Badge>
                  <IconNotification
                    iconType="message"
                    notifyClass="notification"
                    notifyCount="2"/>
                  <IconNotification iconType="phone"/>
                </div>
                <div className="vendor-quote">
                  <ul className="list-unstyled">
                    <li>
                      <label>
                        Vendor
                      </label>
                      <span>
                        {item.vendor}
                      </span>
                    </li>
                    <li>
                      <label>
                        Quote
                      </label>
                      <span>
                         {item.quote}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="jr-body">
                   <div className={infoClass + (infoStatus ? infoStatus : '')}>
                    <img src="../images/notification.png" alt=""/>
                    <p>
                      {item.jobInfoMessage}
                    </p>
                  </div>
                  {JobsubList }
                  <Status/>
                  <StatusText taskDone="2" taskPending="6"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {JobDataList}
      </div>
    );
  }
}
