import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { map, each } from 'lodash';
import TextInput from '../common/TextInput';
import { Scrollbars } from 'react-custom-scrollbars';



class ProfileSteps extends Component {
    constructor() {
        super();
        this.state = {
            uploadImgSize: 0,
            uploadImageErrText: false,
            imageUploaded: [],
            activeLogo: null,
            activeModel: null,
            manufacturerTabVisible: true,
            modelTabVisible: false,
            otherDetailsTabVisible: false,
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
        let files = [], fileImgSize = 0, errFileType = false;
        this.setState({ uploadImageErrText: false });
        each(e.target.files, (val) => {
            files.push({ name: val.name, path: URL.createObjectURL(val), size: val.size });
            fileImgSize += val.size;
            if (val.type == "image/png" || val.type == "image/jpeg") {
            } else {
                errFileType = true;
            }
        });
        // upload = { ...this.state.imageUploaded, files }
        if (this.state.uploadImgSize + fileImgSize >= 20000000 || errFileType == true) {
            this.setState({ uploadImageErrText: true });
        } else {
            // this.state.uploadImgSize += fileImgSize;
            this.setState({
                imageUploaded: this.state.imageUploaded.concat(files),
                uploadImgSize: fileImgSize + this.state.uploadImgSize,
            });
        }
    }
    cancelImageUpload(val) {
        let deleteSize = 0;
        if (this.state.uploadImgSize >= 20000000) {
            this.setState({ uploadImageErrText: true });
        } else {
            this.setState({ uploadImageErrText: false });
        }

        const array = this.state.imageUploaded;
        deleteSize = this.state.uploadImgSize - this.state.imageUploaded[val].size;
        array.splice(val, 1);
        this.setState({ imageUploaded: array, uploadImgSize: deleteSize });
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
        ];
        const carModel = [
            {
                logo: '../../images/audi-a3.png',
                name: 'audi a3',
                modalId: 1
            }, {
                logo: '../../images/audi-a6.png',
                name: 'audi a6',
                modalId: 2
            }, {
                logo: '../../images/audi-a3.png',
                name: 'audi a5',
                modalId: 1
            }, {
                logo: '../../images/audi-a6.png',
                name: 'audi a7',
                modalId: 2
            }, {
                logo: '../../images/audi-a3.png',
                name: 'audi a8',
                modalId: 1
            }, {
                logo: '../../images/audi-a6.png',
                name: 'audi a9',
                modalId: 2
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
                                <div className="col-md-6 pad0">
                                    <div className="search-box">
                                        <TextInput label="Search" name="text" type="text" />
                                        <i className="mdi mdi-magnify" />
                                    </div>
                                </div>
                            </div>
                            <Scrollbars className="img-container">
                                {carListView}
                            </Scrollbars>
                            <div className="next-button">
                                <Button disabled={this.state.activeLogo ? false : true} btnType="submit" btnSize="sm" fontSize={14} label="Next"
                                    btnCallBack={(e) => {
                                        e.preventDefault(); this.tabOpen('modelTabVisible');
                                        this.setState({ 'modelTabIsUnlocked': this.state.activeLogo ? true : false });
                                    }} />
                            </div>
                        </div>}
                </section>
                <section className="collapse-panel selectModal">
                    <div className="panel-head" onClick={() => { this.tabOpen('modelTabVisible'); }}>
                        <h4>Step 2: Select The model</h4>
                        <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.modelTabVisible &&
                        <div className="panel-content">
                            <div className="row">
                                <div className="col-md-6 padLeft0">
                                    <div className="model-select">
                                        <select className="car-selection ">
                                            <option value="" selected> Select Launch Year</option>
                                            <option value="2013">2013</option>
                                            <option value="2014">2014</option>
                                            <option value="2015">2015</option>
                                            <option value="2016">2016</option>
                                            <option value="2017">2017</option>
                                        </select>
                                        <i className="mdi mdi-chevron-down" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="img-container">
                                    {carModelView}
                                </div>
                            </div>
                            <div className="next-button">
                                <Button disabled={this.state.activeModel ? false : true} btnType="submit" btnSize="sm" fontSize={14} label="Next" btnCallBack={(e) => { e.preventDefault(); this.tabOpen('otherDetailsTabVisible'); this.setState({ 'otherDetailsTabIsUnlocked': this.state.activeModel ? true : false }) }} />
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
                                <div className="row upload-image car-repair">
                                    <h4 className="panel-sub-title">Upload images</h4>
                                    <div className="img-uploads">
                                        <Upload id="carProfileUpload" fileUpload={(e) => this.fileNameUpload(e)} />
                                        {imageUploadedView}
                                    </div>
                                    <span className={this.state.uploadImageErrText ? "image-upload-error padLeft15" : "image-upload-error padLeft15 hide"}>
                                        <p>Sorry, your image exceeds the file size limit of 20mb.
                                            Try again with another image.</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ uploadImageErrText: false })} />
                                    </span>
                                </div>
                                <div className="row car-profile">
                                    <h4 className="panel-sub-title">car profile</h4>
                                    <div className="col-md-6 padLeft0">
                                        <TextInput label="Car Profile Name" name="text" type="text" showValidationError={this.errors['text']} validationError="Profile Name cannot be empty" onChange={this.onFieldChange.bind(this)} />
                                    </div>
                                    <div className="col-md-6 padRight0">
                                        <TextInput label="Plate Number*" name="text" type="text" validationError="Plate Number cannot be empty" />
                                    </div>
                                    <div className="col-md-6 padLeft0">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Kms Travelled cannot be empty" />
                                    </div>
                                </div>
                                <div className="row insurance-details">
                                    <h4 className="panel-sub-title">Insurance Details (Optional)</h4>
                                    <div className="col-md-6 padLeft0">
                                        <TextInput label="Insurance Provider" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6 padRight0">
                                        <TextInput label="Insurance Policy Number" name="text" type="text" />
                                    </div>
                                    <div className="col-md-6 padLeft0">
                                        <TextInput label="State" name="text" type="text" />
                                    </div>
                                </div>
                                <div className="row car-notes">
                                    <h4 className="panel-sub-title">Car Notes (Optional)</h4>
                                    <div className="col-md-6 padLeft0">
                                        <TextInput label="Additional Details About The Car (Optional)" name="text" type="text" validationError="Enter a valid text" />
                                    </div>
                                </div>
                                <div className="next-button">
                                    <Button btnType="submit" btnSize="sm" fontSize={14} label="Save" />
                                </div>
                            </div>
                        </div>}
                </section>
            </div>
        );
    }
}

export default ProfileSteps;
