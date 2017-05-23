import React, { Component } from 'react';
import Button from '../common/Button';
import CarLogo from './CarLogo';
import { map } from 'lodash';

class Steps extends Component {
    constructor() {
        super()
        this.state = {
            activeLogo: null,
            tab1: true,
            tab2: false,
            tab3: false,
        };
    }
    activeLogo(carId) {
        this.setState({ activeLogo: carId })
    }
    tabClose(val) {
        if (val == 'tab1') {
            this.setState({ tab1: true, tab2: false, tab3: false })
        } else if (val == 'tab2') {
            this.setState({ tab1: false, tab2: true, tab3: false })
        } else if (val == 'tab3') {
            this.setState({ tab1: false, tab2: false, tab3: true })
        }
    }


    render() {
        const carList = [
            {
                logo: '../../images/logo1.png',
                carId: 1,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo2.png',
                carId: 2,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 3,
                name: 'Acura'
            }, {
                logo: '../../images/logo1.png',
                carId: 4,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo2.png',
                carId: 5,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 6,
                name: 'Acura'
            }, {
                logo: '../../images/logo1.png',
                carId: 7,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo2.png',
                carId: 8,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 9,
                name: 'Acura'
            }, {
                logo: '../../images/logo1.png',
                carId: 10,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo2.png',
                carId: 11,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 12,
                name: 'Acura'
            }, {
                logo: '../../images/logo1.png',
                carId: 13,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo2.png',
                carId: 14,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 15,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo1.png',
                carId: 16,
                name: 'Acura'
            }, {
                logo: '../../images/logo2.png',
                carId: 17,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 18,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo1.png',
                carId: 19,
                name: 'Acura'
            }, {
                logo: '../../images/logo2.png',
                carId: 20,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 21,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo1.png',
                carId: 22,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo2.png',
                carId: 23,
                name: 'Acura'
            }, {
                logo: '../../images/logo3.png',
                carId: 24,
                name: 'Aston Martin'
            }, {
                logo: '../../images/logo1.png',
                carId: 25,
                name: 'Acura'
            }, {
                logo: '../../images/logo2.png',
                carId: 26,
                name: 'Alfa Romeo'
            }, {
                logo: '../../images/logo3.png',
                carId: 27,
                name: 'Acura'
            }
        ]
        const carListView = map(carList, (carItem) => {
            return (
                <CarLogo imgUrl={carItem.logo} active={carItem.carId == this.state.activeLogo} carName={carItem.name} activeClick={() => { this.activeLogo(carItem.carId) }} />
            )
        })

        return (
            <div>
                <section className="s1">
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <div className="search-box ">
                            <input type="text" placeholder="Search" />
                            <i className="mdi mdi-magnify"></i>
                        </div>
                        <i className={this.state.tab1 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab1') }}></i>
                    </div>
                    {this.state.tab1 && <div>
                        <div className="img-container">
                            {carListView}
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>

                    </div>}
                </section>
                <section className="s2">
                    <div className="title">
                        <h4>Step 2: Select The Modal</h4>
                    </div>
                    <div className="container-fluid">
                        <div className="modal-select col-md-6">
                            <select>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                            <i className="mdi mdi-chevron-down"></i>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Steps;