import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { map } from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';


export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCarWash: 1,
            carWashList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    manufacturerId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    manufacturerId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    manufacturerId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    manufacturerId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    manufacturerId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    manufacturerId: 6
                }

            ],
            carRepairList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    manufacturerId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    manufacturerId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    manufacturerId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    manufacturerId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    manufacturerId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    manufacturerId: 6
                }

            ],
            carServiceList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    manufacturerId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    manufacturerId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    manufacturerId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    manufacturerId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    manufacturerId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    manufacturerId: 6
                }

            ],
            carManufacturersList: [
                {
                    logo: '../../images/Acura-logo.png',
                    name: 'Acura 1',
                    manufacturerId: 1
                }, {
                    logo: '../../images/Alfa-Romeo-logo.png',
                    name: 'Alfa Romeo 1',
                    manufacturerId: 2
                }, {
                    logo: '../../images/Aston-Martin-logo.png',
                    name: 'Aston Martin 1',
                    manufacturerId: 3
                }, {
                    logo: '../../images/audi-logo.png',
                    name: 'Audi 1',
                    manufacturerId: 4
                }, {
                    logo: '../../images/Bentley-logo.png',
                    name: 'Bentley 1',
                    manufacturerId: 5
                }, {
                    logo: '../../images/bmw-logo.png',
                    name: 'bmw 1',
                    manufacturerId: 6
                }, {
                    logo: '../../images/bugatti-logo.png',
                    name: 'bugatti 1',
                    manufacturerId: 7
                }, {
                    logo: '../../images/Buick-Logo.png',
                    name: 'Buick 1',
                    manufacturerId: 9
                }, {
                    logo: '../../images/Cadillac-Logo.png',
                    name: 'Cadillac 1',
                    manufacturerId: 10
                }, {
                    logo: '../../images/Chevrolet-Logo.png',
                    name: 'Chevrolet 1',
                    manufacturerId: 11
                }, {
                    logo: '../../images/Chrysler-log.png',
                    name: 'Chrysler 1',
                    manufacturerId: 12
                }, {
                    logo: '../../images/citroen-logo.png',
                    name: 'citroen 1',
                    manufacturerId: 13
                }, {
                    logo: '../../images/Datsun-logo.png',
                    name: 'Datsun 1',
                    manufacturerId: 14
                }, {
                    logo: '../../images/exagon.png',
                    name: 'exagon 1',
                    manufacturerId: 15
                }, {
                    logo: '../../images/Acura-logo.png',
                    name: 'Acura 2',
                    manufacturerId: 16
                }, {
                    logo: '../../images/Alfa-Romeo-logo.png',
                    name: 'Alfa Romeo 2',
                    manufacturerId: 17
                }, {
                    logo: '../../images/Aston-Martin-logo.png',
                    name: 'Aston Martin 2',
                    manufacturerId: 18
                }, {
                    logo: '../../images/audi-logo.png',
                    name: 'Audi 2',
                    manufacturerId: 19
                }, {
                    logo: '../../images/Bentley-logo.png',
                    name: 'Bentley 2',
                    manufacturerId: 20
                }, {
                    logo: '../../images/bmw-logo.png',
                    name: 'bmw 2',
                    manufacturerId: 21
                }, {
                    logo: '../../images/bugatti-logo.png',
                    name: 'bugatti 2',
                    manufacturerId: 22
                }, {
                    logo: '../../images/Buick-Logo.png',
                    name: 'Buick 2',
                    manufacturerId: 23
                }, {
                    logo: '../../images/Cadillac-Logo.png',
                    name: 'Cadillac 2',
                    manufacturerId: 124
                }
            ],
        };
        this.renderCarWash = this.renderCarWash.bind(this);
        this.renderCarRepair = this.renderCarRepair.bind(this);
        this.renderCarService = this.renderCarService.bind(this);
        this.renderSupportedManufacturers = this.renderSupportedManufacturers.bind(this);
    }
    renderCarWash() {
        const carWashListView = map(this.state.carWashList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarWash': carItem.manufacturerId }); }}>
                    <div className={carItem.manufacturerId == this.state.activeCarWash ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <Scrollbars className="vendor-service-container">
                <ul className="vendor-service-list">
                    {carWashListView}
                </ul>
            </Scrollbars>
        );
    }
    renderCarRepair() {
        const carRepairListView = map(this.state.carRepairList, (carItem, key) => {
            return (
                 <li key={key} onClick={() => { this.setState({ 'activeCarWash': carItem.manufacturerId }); }}>
                    <div className={carItem.manufacturerId == this.state.activeCarWash ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <Scrollbars className="vendor-service-container">
                <ul className="vendor-service-list">
                    {carRepairListView}
                </ul>
            </Scrollbars>
        );
    }
    renderCarService() {
        const carServiceListView = map(this.state.carServiceList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarWash': carItem.manufacturerId }); }}>
                    <div className={carItem.manufacturerId == this.state.activeCarWash ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <Scrollbars className="vendor-service-container">
                <ul className="vendor-service-list">
                    {carServiceListView}
                </ul>
            </Scrollbars>
        );
    }
    renderSupportedManufacturers() {
        const carManufacturersListView = map(this.state.carManufacturersList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarWash': carItem.manufacturerId }); }}>
                    <div className={carItem.manufacturerId == this.state.activeCarWash ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <Scrollbars className="vendor-service-container">
                <ul className="vendor-service-list">
                    {carManufacturersListView}
                </ul>
            </Scrollbars>
        );
    }
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>Services</h4>
                    <Tabs defaultActiveKey={1} id="vendorServices">
                        <Tab eventKey={1} title="Car Wash">
                            {this.renderCarWash()}
                        </Tab>
                        <Tab eventKey={2} title="Car Repair">
                            {this.renderCarRepair()}
                        </Tab>
                        <Tab eventKey={3} title="Car Servicing">
                            {this.renderCarService()}
                        </Tab>
                        <Tab eventKey={4} title="Supported Manufacturers">
                            {this.renderSupportedManufacturers()}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}
