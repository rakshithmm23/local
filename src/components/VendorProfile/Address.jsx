import React, { Component } from 'react';
import Gmaps from '../MyRequest/Gmaps';


export default class Address extends Component {
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>Details</h4>
                    <div className="vendor-address-map">
                        <div className="gmaps">
                            <Gmaps
                                center={{ lat: 12.9952672, lng: 77.5905857 }}
                                zoom={9}
                                containerElement={<div style={{ height: "auto", width: 100 + '%' }} />}
                                mapElement={<div style={{ height: 192 + 'px', width: 100 + '%' }} />}
                            />
                        </div>
                    </div>
                    <ul className="vendor-address-details">
                        <li>
                            <i className="mdi mdi-map-marker" />
                            <span className="vendor-icon-label">
                                29 Airport Road, Doha 00150, Qatar
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-phone" />
                            <span className="vendor-icon-label">
                                055 456876
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-email-outline" />
                            <span className="vendor-icon-label">
                                <a href="">contact@buddyscarcare.com</a>
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-link-variant" />
                            <span className="vendor-icon-label">
                                <a href="">www.buddyscarcare.com</a>
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-credit-card" />
                            <span className="vendor-icon-label">
                                Cash & Credit Cards Accepted
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-calendar-clock" />
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
                            <i className="mdi mdi-calendar-check" />
                            <span className="vendor-icon-label">
                                Member Since August 7, 2017
                            </span>
                        </li>
                        <li>
                            <i className="mdi mdi-check-all" />
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
