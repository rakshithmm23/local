import React, { Component } from 'react';
import Badge from '../common/Badge';
import{map} from 'lodash';

export default class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeline: [
                {
                    timelineStatus: "due",
                    timelineMonth: "Jan",
                    timelineIcon: "../../images/van.png",
                    timelineDue: "Due On Jan 30",
                    serviceType: "Regular Service",
                    serviceCost: "120",
                    currency: "AED",
                    timelineBadge: "Service"
                },
                {
                    timelineStatus: "upcoming",
                    timelineMonth: "Feb",
                    timelineIcon: "../../images/van.png",
                    timelineDue: "Upcoming on Feb 15",
                    serviceType: "Brakes & Exhaust",
                    serviceCost: "180",
                    currency: "AED",
                    timelineBadge: "Repair"
                },
                {
                    timelineMonth: "Mar",
                    timelineIcon: "../../images/van.png",
                    timelineDue: "Mar 20",
                    serviceType: "Awesome wash and detail",
                    serviceCost: "100",
                    currency: "AED",
                    timelineBadge: "Service"
                },
                {
                    timelineMonth: "Mar",
                    timelineIcon: "../../images/van.png",
                    timelineDue: "Mar 20",
                    serviceType: "Awesome wash and detail",
                    serviceCost: "100",
                    currency: "AED",
                    timelineBadge: "Service"
                },
                {
                    timelineMonth: "Mar",
                    timelineIcon: "../../images/van.png",
                    timelineDue: "Mar 20",
                    serviceType: "Awesome wash and detail",
                    serviceCost: "100",
                    currency: "AED",
                    timelineBadge: "Service"
                }
            ]
        };
    }
    render() {
        const timelineView = map(this.state.timeline, (val, key) => {
            return(
                <li key={key}>
                     <span className= "timeline-month">{val.timelineMonth}</span> 
                    <span className="timeline-icon">
                        <img src={val.timelineIcon} alt="" />
                        <span className="line-joint" />
                    </span>
                    <div className="timeline-content">
                        <h4 className={val.timelineStatus}>{val.timelineDue}</h4>
                        <span className="timeline-service-type">{val.serviceType}</span>
                        <span className="timeline-service-cost">{val.serviceCost} {val.currency}</span>
                    </div>
                    <Badge badgeType="basic" fontSize={12}>{val.timelineBadge}</Badge>
                </li>
            );
        });
        return (
            <div className="timeline-log">
                <ul>
                     {timelineView}
                </ul>
            </div>
        );
    }
}
