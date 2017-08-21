import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { map } from 'lodash';
import CustomScroll from 'react-custom-scroll';


export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCarWash: 0,
            carWashList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    washId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    washId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    washId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    washId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    washId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    washId: 6
                }

            ],
            activeCarRepair: 0,
            carRepairList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    repairId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    repairId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    repairId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    repairId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    repairId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    repairId: 6
                }

            ],
            activeCarService: 0,
            carServiceList: [
                {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a3',
                    serviceId: 1
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a6',
                    serviceId: 2
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a5',
                    serviceId: 3
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a7',
                    serviceId: 4
                }, {
                    logo: '../../images/audi-a3.png',
                    name: 'audi a8',
                    serviceId: 5
                }, {
                    logo: '../../images/audi-a6.png',
                    name: 'audi a9',
                    serviceId: 6
                }

            ],
            activeCarManufacturers: 0,
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
            vendorAddress: {
                address: '29 Airport Road, Doha 00150, Qatar',
                phone: '055 456876',
                emailID: 'contact@buddyscarcare.com',
                website: 'www.buddyscarcare.com',
                paymentType: 'Cash & Credit Cards Accepted',

            }
        };
        this.renderCarWash = this.renderCarWash.bind(this);
        this.renderCarRepair = this.renderCarRepair.bind(this);
        this.renderCarService = this.renderCarService.bind(this);
        this.renderSupportedManufacturers = this.renderSupportedManufacturers.bind(this);
    }
    renderCarWash() {
        const carWashListView = map(this.state.carWashList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarWash': carItem.washId }); }}>
                    <div className={carItem.washId == this.state.activeCarWash ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <div className="vendor-service-container">
                <CustomScroll heightRelativeToParent="calc(100%)">
                    <ul className="vendor-service-list">
                        {carWashListView}
                    </ul>
                </CustomScroll>
            </div>
        );
    }
    renderCarRepair() {
        const carRepairListView = map(this.state.carRepairList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarRepair': carItem.repairId }); }}>
                    <div className={carItem.repairId == this.state.activeCarRepair ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <div className="vendor-service-container">
                <CustomScroll heightRelativeToParent="calc(100%)">
                    <ul className="vendor-service-list">
                        {carRepairListView}
                    </ul>
                </CustomScroll>
            </div>
        );
    }
    renderCarService() {
        const carServiceListView = map(this.state.carServiceList, (carItem, key) => {
            return (
                <li key={key} onClick={() => { this.setState({ 'activeCarService': carItem.serviceId }); }}>
                    <div className={carItem.serviceId == this.state.activeCarService ? 'img-circle active' : 'img-circle'}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <div className="vendor-service-container">
                <CustomScroll heightRelativeToParent="calc(100%)">
                    <ul className="vendor-service-list">
                        {carServiceListView}
                    </ul>
                </CustomScroll>
            </div>
        );
    }
    renderSupportedManufacturers() {
        const carManufacturersListView = map(this.state.carManufacturersList, (carItem, key) => {
            return (
                <li key={key}>
                    <div className="img-circle">
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </li>
            );
        });
        return (
            <div className="vendor-service-container">
                <CustomScroll heightRelativeToParent="calc(100%)">
                    <ul className="vendor-service-list">
                        {carManufacturersListView}
                    </ul>
                </CustomScroll>
            </div>
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
                        <Tab eventKey={3} title="Car Service">
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
