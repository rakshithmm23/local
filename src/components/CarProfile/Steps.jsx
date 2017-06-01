import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { map, each } from 'lodash';
import TextInput from '../common/TextInput';


class Steps extends Component {
    constructor() {
        super();
        this.state = {
            imageUploaded: [],
            activeLogo: null,
            activeModel: null,
            manufacturerTabVisible: false,
            modelTabVisible: false,
            otherDetailsTabVisible: true,
            modelTabIsUnlocked: false,
            otherDetailsTabIsUnlocked: false,
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
        this.setState({ activeLogo: name, modelTabIsUnlocked: true });
    }
    activeModel(name) {
        this.setState({ activeModel: name, otherDetailsTabIsUnlocked: true });
    }
    tabOpen(val) {
        if (val == 'manufacturerTabVisible') {
            this.setState({ manufacturerTabVisible: true, modelTabVisible: false, otherDetailsTabVisible: false });
        } else if (val == 'modelTabVisible' && this.state.modelTabIsUnlocked) {
            this.setState({ manufacturerTabVisible: false, modelTabVisible: true, otherDetailsTabVisible: false });
        } else if (val == 'otherDetailsTabVisible', this.state.otherDetailsTabIsUnlocked) {
            this.setState({ manufacturerTabVisible: false, modelTabVisible: false, otherDetailsTabVisible: true });
        }
    }
    fileNameUpload(e) {
        let files = [];
        each(e.target.files, (val) => {
            files.push({ name: val.name, path: URL.createObjectURL(val) });
        });
        // upload = { ...this.state.imageUploaded, files }
        this.setState({
            imageUploaded: this.state.imageUploaded.concat(files)
        })
    }
    cancelImageUpload(val) {
        const array = this.state.imageUploaded;
        array.splice(val, 1);
        this.setState({ imageUploaded: array });
    }
    render() {
        const imageUploadedView = map(this.state.imageUploaded, (img, index) => {
            return (
                <div className="upload-box-wrapper box-shadow">
                    <span className="cancel-image" onClick={() => { this.cancelImageUpload(index); }}>
                        <i className="mdi mdi-close" />
                    </span>
                    <img src={img.path} />
                </div>
            );
        });
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
                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.activeLogo(carItem.name); }} key={key}>
                    <div className={carItem.name == this.state.activeLogo ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            );
        });
        const carModelView = map(carModel, (carItem, key) => {
            return (
                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.setState({ activeModel: carItem.name }); }} key={key}>
                    <div className={carItem.name == this.state.activeModel ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            );
        });

        return (
            <div className="panel-section">
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.tabOpen('manufacturerTabVisible') }}>
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.manufacturerTabVisible &&
                        <div className="panel-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="search-box">
                                        <TextInput label="Search" name="text" type="text" />
                                        <i className="mdi mdi-magnify" />
                                    </div>
                                </div>
                            </div>
                            <div className="img-container clearfix">
                                {carListView}
                            </div>
                            <div className="next-button">
                                <Button disabled={this.state.activeLogo ? false : true} btnType="submit" btnSize="sm" fontSize={13} label="Next"
                                    btnCallBack={(e) => {
                                        e.preventDefault(); this.tabOpen('modelTabVisible');
                                        this.setState({ 'modelTabIsUnlocked': this.state.activeLogo ? true : false });
                                    }} />
                            </div>
                        </div>}
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.tabOpen('modelTabVisible'); }}>
                        <h4>Step 2: Select The model</h4>
                        <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.modelTabVisible &&
                        <div className="panel-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="model-select">
                                        <select className="car-selection ">
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                        <i className="mdi mdi-chevron-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="img-container ">
                                    {carModelView}
                                </div>
                            </div>
                            <div className="next-button">
                                <Button disabled={this.state.activeModel ? false : true} btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={(e) => { e.preventDefault(); this.tabOpen('otherDetailsTabVisible'); this.setState({ 'otherDetailsTabIsUnlocked': this.state.activeModel ? true : false }) }} />
                            </div>
                        </div>}
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.tabOpen('otherDetailsTabVisible'); }}>
                        <h4>Step 3: Enter Other Details</h4>
                        <i className={this.state.otherDetailsTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.otherDetailsTabVisible &&
                        <div className="panel-content">
                            <div className="wrapper">
                                <div className="row upload-image">
                                    <h4 className="panel-sub-title">Upload images</h4>
                                    <div className="img-uploads">
                                        <Upload id="carProfileUpload" fileUpload={(e) => this.fileNameUpload(e)} />
                                        {imageUploadedView}
                                    </div>
                                </div>
                                <div className="row car-profile">
                                    <h4 className="panel-sub-title">car profile</h4>
                                    <div className="col-md-6">
                                        <TextInput label="Car Profile Name" name="text" type="text" showValidationError={this.errors['text']} validationError="Profile Name cannot be empty" onChange={this.onFieldChange.bind(this)} />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput label="Plate Number*" name="text" type="text" validationError="Plate Number cannot be empty" />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Kms Travelled cannot be empty" />
                                    </div>
                                </div>
                                <div className="row insurance-details">
                                    <h4 className="panel-sub-title">Insurance Details (Optional)</h4>
                                    <div className="col-md-6">
                                        <TextInput label="Insurance Provider" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput label="Insurance Policy Number" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6">
                                        <TextInput label="State" name="text" type="text" />
                                    </div>
                                </div>
                                <div className="row car-notes">
                                    <h4 className="panel-sub-title">Car Notes (Optional)</h4>
                                    <div className="col-md-6">
                                        <TextInput label="Additional Details About The Car (Optional)" name="text" type="text" validationError="Enter a valid text" />
                                    </div>
                                </div>
                                <div className="next-button">
                                    <Button btnType="submit" btnSize="sm" fontSize={13} label="Save" />
                                </div>
                            </div>
                        </div>}
                </section>
            </div>
        );
    }
}

export default Steps;
