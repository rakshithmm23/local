import React, { Component } from 'react';

export default class JobCard extends Component {

    render() {
        return (
            <div className="job-card">
                <div className="card-img">
                    <img src="images/car.jpg" alt="Ayaz's Buick" />
                </div>
                <div className="card-info">
                    <div className="job-name">Sathish</div>
                    <div className="job-id"><label>ID :</label> <span>12345678</span></div>
                    <div className="job-title">Emergency Service</div>
                </div>
                <div className="card-time">
                    <ul>
                        <li>
                            <label>Request Date</label>
                            <span>08 Mar'17</span>
                        </li>
                        <li>
                            <label>Start</label>
                            <span>09 Mar'17, 11:00 AM</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
