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
    activeLogo(name) {
        debugger
        this.setState({ activeLogo: name })
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
                name: 'Aston Martin 1'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 2'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 2'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 2'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 3'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 3'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 3'
            }
        ]
        debugger
        const carListView = map(carList, (carItem) => {
            return (
                <CarLogo imgUrl={carItem.logo} active={carItem.name == this.state.activeLogo} carName={carItem.name} activeClick={() => { this.activeLogo(carItem.name) }} />
            )
        })

        return (
            <div>
                <section className="s1">
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <div className="search-box ">
                            <div className="form-group">
                                <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                            </div>
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
                        <i className={this.state.tab1 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab2') }}></i>
                    </div>
                    {this.state.tab2 && <div>
                        <div className="container-fluid select-option">
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
                        <div className="img-container">
                            <div className="col-md-2 image-view" >
                                <div className="img-circle" >
                                    <img src='../../images/logo1.png' alt="" />
                                </div>
                                <h6>Aston Martin</h6>
                            </div>
                            <div className="col-md-2 image-view" >
                                <div className="img-circle" >
                                    <img src='../../images/logo1.png' alt="" />
                                </div>
                                <h6>Aston Martin</h6>
                            </div>
                            <div className="col-md-2 image-view" >
                                <div className="img-circle" >
                                    <img src='../../images/logo1.png' alt="" />
                                </div>
                                <h6>Aston Martin</h6>
                            </div>
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>
                    </div>}
                </section>
                <section className="s3">
                    <div className="title">
                        <h4>Step 3: Enter Other Details</h4>
                        <i className={this.state.tab1 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab3') }}></i>
                    </div>
                    {this.state.tab3 &&
                        <div className="wrapper">
                            <div className="upload-image">
                                <h4>upload images</h4>
                                <div className="upload-box">
                                </div>
                            </div>
                            <div className="car-profile">
                                <div className="container-fluid">
                                    <h4>car profile</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="insurance-details">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="car-notes">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                    <div className="col-md-6 remove-left-padding ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="next-button">
                                <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                            </div>
                        </div>}
                </section>
            </div>
        );
    }
}

export default Steps;