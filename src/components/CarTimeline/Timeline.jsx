import React, { Component } from 'react';
import Badge from '../common/Badge';

export default class Timeline extends Component {
    render() {
        return (
            <div className="timeline-log">
                <ul>
                    <li>
                        <span className="timeline-month">Jan</span>
                        <span className="timeline-icon">
                            <img src="../../images/van.png" alt="" />
                            <span className="line-joint" />
                        </span>
                        <div className="timeline-content">
                            <h4>Due on Jan 30</h4>
                            <span className="timeline-service-type">Regular Service</span>
                            <span className="timeline-service-cost">120 AED</span>
                        </div>
                        <Badge badgeType="basic" fontSize={12}>Service</Badge>
                    </li>
                </ul>
            </div>
        );
    }
}
