import React, { Component } from 'react';
import { map } from 'lodash';
import IconNotification from '../common/IconNotification';
// import JobCard from '../common/JobCard';
import Badge from '../common/Badge';
// import JobCardInfo from '../common/JobCardInfo';
import Status from '../common/Status';
// import StatusPopUp from '../common/StatusPopUp';

export default class JobUpdate extends Component {
  render() {
    const { infoStatus } = this.props;
    let infoClass = 'jobInfo ';
    let statusClass = 'status-popup';
    const { statusType, statusTitle, statusTime, statusProcess } = this.props;

    const jobData = [
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'warning',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'Your request #9596378 has been placed successfully. Our vendors are ' +
        'currently assessing your application and will get back with their quotes soon.',
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'active',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'You have received 2 new quotes and 3 new messages. Start a chat with the vendor ' +
        'to define the scope of work and negotiate the quotation.',
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'accepted',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        allotedText: 'The request has been allotted to a vendor.',
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'inProgress',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        statusStep: true,
        statusPopup: [
          {
            imgClassName: 'statusIcon',
            statusDescription: 'Brakes and Exhaust Work',
            statusTime: '09 Mar 15 11:00 AM',
            statusMessage: 'ONGOING'
          }
        ]
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'finished',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'You have received 2 new quotes and 3 new messages. Start a chat with the vendor ' +
        'to define the scope of work and negotiate the quotation.',
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'cancelled',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'You have received 2 new quotes and 3 new messages. Start a chat with the vendor ' +
        'to define the scope of work and negotiate the quotation.',
      },
      {
        carImage: './src/images/car.jpg',
        customerName: 'Bala Subramani',
        customeId: '12345678',
        serviceTypes: 'Emergency Service',
        requestDate: '08 Mar17',
        startDate: '09 Mar17, 11:00 AM',
        statusIndicator: 'expired',
        vendor: 'Buddy’s Car Service',
        quote: '200 AED',
        jobInfoMessage: 'You have received 2 new quotes and 3 new messages. Start a chat with the vendor ' +
        'to define the scope of work and negotiate the quotation.',
      }
    ];
    const jobDataList = map(jobData, (item, key) => {
      const jobSubList = map(item.statusPopup, (subItem, subKey) => {
        return (
          <div className={statusClass + ' ' + (statusType ? statusType : '')} key={subKey}>
            <div className="iconHolder">
              <span className={subItem.imgClassName} />
            </div>
            <div className="statusDescription">
              <h4>{subItem.statusDescription}</h4>
              <span>{subItem.statusTime}</span>
            </div>
            <span className="status-process">{subItem.statusMessage}</span>
          </div>
        );
      });
      return (
        <div key={key}>
          {key + 1 == 1 && <h3 className="job-update-title">Job Updates</h3>}
          <div className="job-updates row" >
            <div className="col-md-12 col-sm-12 col-xs-12 pad0">
              <div className="col-md-5 col-sm-5 col-xs-12 pad0">
                <div className="job-left">
                  <div className="job-card">
                    <div className="card-img">
                      <img src={item.carImage} alt="Ayaz's Buick" />
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
                    <Badge badgeType={item.statusIndicator} fontSize={14}>
                      {item.statusIndicator.toUpperCase()}
                    </Badge>
                    <IconNotification
                      iconType="message"
                      notifyClass="notification"
                      notifyCount="2" />
                    <IconNotification iconType="phone" />
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
                    {item.jobInfoMessage && <div className={infoClass + item.statusIndicator}>
                      <img src="./src/images/notification.png" alt="" />
                      <p>
                        {item.jobInfoMessage}
                      </p>
                    </div>}
                    {jobSubList}
                    {item.statusStep && <Status taskDone={10} taskPending={4} />}

                    {item.allotedText && <div className="accepted-info">
                      {item.allotedText}
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {jobDataList}
      </div>
    );
  }
}
