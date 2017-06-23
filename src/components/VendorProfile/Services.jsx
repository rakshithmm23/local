import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default class Services extends Component {
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>Services</h4>
                    <Tabs defaultActiveKey={1} id="vendorServices">
                        <Tab eventKey={1} title="Car Wash">Car Wash</Tab>
                        <Tab eventKey={2} title="Car Repair">Car Repair</Tab>
                        <Tab eventKey={3} title="Car Servicing">Car Servicing</Tab>
                        <Tab eventKey={4} title="Supported Manufacturers">Supported Manufacturers</Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
