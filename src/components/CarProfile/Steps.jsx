import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { map } from 'lodash';
import TextInput from '../common/TextInput';


class Steps extends Component {
    constructor() {
        super();
        this.state = {
            activeLogo: null,
            activeModel: null,
            manufacturerTabVisible: true,
            modelTabVisible: false,
            otherDetailsTabVisible: false,
            modelTabIsUnlocked: false,
            otherDetailsTabIsUnlocked: false,
            imageUploaded: [],
            submissionError: false,
        };
        this.initialFormData = {
            'email': '',
            'password': '',
        };
        this.formData = {
            ...this.initialFormData
        };
        this.errors = {
            'email': false,
            'password': false,
        };
        this.onFieldChange = this.onFieldChange.bind(this);
    }
    onFieldChange(value, key, name) {
        if (value) {
            this.formData[name] = value;
            this.errors[name] = false;
        }
    }
    activeLogo(name) {
        this.setState({ activeLogo: name, modelTabIsUnlocked: true })
    }
    activeModel(name) {
        this.setState({ activeModel: name, otherDetailsTabIsUnlocked: true })
    }
    tabOpen(val) {
        if (val == 'manufacturerTabVisible') {
            this.setState({ manufacturerTabVisible: true, modelTabVisible: false, otherDetailsTabVisible: false })
        } else if (val == 'modelTabVisible' && this.state.modelTabIsUnlocked) {
            this.setState({ manufacturerTabVisible: false, modelTabVisible: true, otherDetailsTabVisible: false })
        } else if (val == 'otherDetailsTabVisible', this.state.otherDetailsTabIsUnlocked) {
            this.setState({ manufacturerTabVisible: false, modelTabVisible: false, otherDetailsTabVisible: true })
        }
    }




    render() {
        const carList = [
            {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1',
                manufacturerId: 1
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1',
                manufacturerId: 2
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1',
                manufacturerId: 3
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 2',
                manufacturerId: 4
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 2',
                manufacturerId: 5
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 2',
                manufacturerId: 6
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 3',
                manufacturerId: 7
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 3',
                manufacturerId: 8
            }, {
                logo: '../../images/logo3.png',
            }
        ];
        const carModel = [
            {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1',
                modalId: 1
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1',
                modalId: 2
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1',
                modalId: 3
            }
        ];
        const carListView = map(carList, (carItem, key) => {
            return (
                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.activeLogo(carItem.name) }} key={key}>
                    <div className={carItem.name == this.state.activeLogo ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            )
        });
        const carModelView = map(carModel, (carItem, key) => {
            return (
                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.setState({ activeModel: carItem.name }) }} key={key}>
                    <div className={carItem.name == this.state.activeModel ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            );
        });

        return (
            <div className="collapse-panal">
                <section className="s1" >
                    <div className="title" onClick={() => { this.tabOpen('manufacturerTabVisible'); }}>
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.manufacturerTabVisible && 
                    <div>
                        <div className="search-box col-md-6 clearfix">
                            <div className="remove-left-padding">
                                <TextInput label="Search for manufacturer" name="text" type="text" />
                            </div>
                            <i className="mdi mdi-magnify" />
                        </div>
                        <div className="img-container clearfix">
                            {carListView}
                    </div>
                        <div className="next-button clearfix">
                            <Button disabled={this.state.activeLogo ? false : true} btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={(e) =>{e.preventDefault(); this.tabOpen('modelTabVisible'); this.setState({'modelTabIsUnlocked': this.state.activeLogo ? true : false})}}/>
                        </div>

                    </div>}
                </section>
                <section className="s2" >
                    <div className="title" onClick={() => { this.tabOpen('modelTabVisible'); }}>
                        <h4>Step 2: Select The model</h4>
                        <i className={this.state.modelTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.modelTabVisible && <div>
                        <div className="container-fluid select-option col-md-6">
                            <div className="model-select ">
                                <select>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <i className="mdi mdi-chevron-down" />
                            </div>
                        </div>
                        <div className="img-container ">
                            {carModelView}
                        </div>
                        <div className="next-button clearfix">
                            <Button disabled={this.state.activeModel ? false : true} btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={(e) =>{e.preventDefault(); this.tabOpen('otherDetailsTabVisible'); this.setState({'otherDetailsTabIsUnlocked': this.state.activeModel ? true : false})}}/>
                        </div>
                    </div>}
                </section>
                <section className="s3" >
                    <div className="title" onClick={() => { this.tabOpen('otherDetailsTabVisible'); }}>
                        <h4>Step 3: Enter Other Details</h4>
                        <i className={this.state.otherDetailsTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.otherDetailsTabVisible &&
                        <div className="wrapper">
                            <div className="upload-image">
                                <h4>upload images</h4>
                                <Upload responsiveSize="col-md-2 col-sm-3 col-xs-6"/>
                            </div>
                            <div className="car-profile">
                                <div className="container-fluid">
                                    <h4>car profile</h4>

                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Car Profile Name" name="text" type="text" showValidationError={this.errors['text']} validationError="Profile Name cannot be empty" onChange={this.onFieldChange.bind(this)} />
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Plate Number*" name="text" type="text" validationError="Plate Number cannot be empty" />
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Kms Travelled cannot be empty" />
                                    </div>

                                </div>

                            </div>
                            <div className="insurance-details">
                                <div className="container-fluid">
                                    <h4>Insurance Details (Optional)</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Insurance Provider" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Insurance Policy Number" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="State" name="text" type="text" />
                                    </div>
                                </div>

                            </div>
                            <div className="car-notes">
                                <div className="container-fluid">
                                    <h4>Car Notes (Optional)</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Additional Details About The Car (Optional)" name="text" type="text" validationError="Enter a valid text" />
                                    </div>
                                </div>
                            </div>
                            <div className="next-button clearfix">
                                <Button btnType="submit" btnSize="sm" fontSize={13} label="Save" />
                            </div>
                        </div>}
                </section>
            </div>
        );
    }
}

export default Steps;
