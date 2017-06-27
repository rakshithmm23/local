import React, { Component } from 'react';

export default class Address extends Component {
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>Address</h4>
                    <div className="vendor-address-map">
                        <img src="../../images/map-ss.png" alt="" />
                    </div>
                    <ul className="vendor-address-details">
                        <li>
                            <i className="mdi mdi-map-marker"/>
                            <span className="vendor-icon-label">
                                29 Airport Road, Doha 00150, Qatar
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-share-variant"/>
                            <span className="vendor-icon-label">
                                055 456876
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-email-outline"/>
                            <span className="vendor-icon-label">
                                contact@buddyscarcare.com
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-link-variant"/>
                            <span className="vendor-icon-label">
                                www.buddyscarcare.com
                            </span>
                        </li>
                         <li>
                            <i className="mdi mdi-calendar-clock"/>
                            <span className="vendor-icon-label">
                                <ul>
                                    <li>
                                        <label>Sun - Thurs</label>
                                        <span>09 AM - 05 PM</span>
                                    </li>
                                    <li>
                                        <label>Friday</label>
                                        <span>10 AM - 03 PM</span>
                                    </li>
                                    <li>
                                        <label>Saturday</label>
                                        <span>Closed</span>
                                    </li>
                                </ul>
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-calendar-check"/>
                            <span className="vendor-icon-label">
                                Member Since August 7, 2017
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-check-all"/>
                            <span className="vendor-icon-label">
                                21 Jobs Completed
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
