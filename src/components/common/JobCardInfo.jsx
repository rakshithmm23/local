import React, { Component } from 'react';

export default class JobCardInfo extends Component {

    render() {
       const { infoStatus } = this.props;
       let infoClass = 'jobInfo ';
        return (
            <div className={infoClass + (infoStatus ? infoStatus : '')}>
              <img src="./src/images/notification.png" alt=""/>
              <p>
                You have received 2 new quotes and 3 new messages. Start a chat with the vendor to define the scope of work and negotiate the quotation.
              </p>
            </div>
        );
    }
}


