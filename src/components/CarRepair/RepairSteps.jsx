import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map, find } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { DropdownButton, MenuItem } from 'react-bootstrap';


class RepairSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadImgSize: 0,
            policeReportImgSize: 0,
            rationCardImgSize: 0,
            drivingLicenceImgSize: 0,
            uploadImage: [],
            policeReport: [],
            rationCard: [],
            drivingLicence: [],
            PrefferedLocation: 'Select Location',
            startDate: moment(),
            step1Panel: true,
            step2Panel: false,
            carWashCategories: [
                {
                    id: 1,
                    active: false,
                    heading: "AC Heating & cooling",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-5.png'
                }, {
                    id: 2,
                    active: false,
                    heading: "Brakes & Exhaust",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-3.png'
                }, {
                    id: 3,
                    active: false,
                    heading: "Body Work, Dents & Repair",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "subcategory 1",
                            checked: false
                        }, {
                            id: 2,
                            name: "subcategory 2",
                            checked: false
                        }, {
                            id: 3,
                            name: "subcategory 3",
                            checked: false
                        }, {
                            id: 4,
                            name: "subcategory 4",
                            checked: false
                        }, {
                            id: 5,
                            name: "subcategory 5",
                            checked: false
                        }, {
                            id: 6,
                            name: "subcategory 6",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-4.png'
                }, {
                    id: 4,
                    active: false,
                    heading: "Engine",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "subcategory 1",
                            checked: false
                        }, {
                            id: 2,
                            name: "subcategory 2",
                            checked: false
                        }, {
                            id: 3,
                            name: "subcategory 3",
                            checked: false
                        }, {
                            id: 4,
                            name: "subcategory 4",
                            checked: false
                        }, {
                            id: 5,
                            name: "subcategory 5",
                            checked: false
                        }, {
                            id: 6,
                            name: "subcategory 6",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-1.png'
                },
                {
                    id: 5,
                    active: false,
                    heading: "Clutch & Gearbox Repair",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-3.png'
                },
                {
                    id: 6,
                    active: false,
                    heading: "Total detail",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-5.png'
                },
                {
                    id: 7,
                    active: false,
                    heading: "Electrical & Batteries",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-4.png'
                },
                {
                    id: 8,
                    active: false,
                    heading: "Monthly Package",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-2.png'
                }, {
                    id: 8,
                    active: false,
                    heading: "Yearly Package",
                    checkedCategoryCount: 0,
                    categories: [
                        {
                            id: 1,
                            name: "Service title one",
                            checked: false
                        }, {
                            id: 2,
                            name: "Service title two",
                            checked: false
                        }, {
                            id: 3,
                            name: "Service title three",
                            checked: false
                        }, {
                            id: 4,
                            name: "I am not sure",
                            checked: false
                        }],
                    image: '../../images/auto-service-icons-3.png'
                }

            ],
            uploadImageErrText: false,
            policeReportErrText: false,
            rationCardErrText: false,
            drivingLicenceErrText: false,

        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    openCategory(id) {
        let newCat = [];
        map(this.state.carWashCategories, (category) => {
            let cat = { ...category };
            if (category.id == id) {
                cat.active = !cat.active;
            } else {
                cat.active = false;
            }
            newCat.push(cat);
        })
        this.setState({
            carWashCategories: newCat
        });
    }
    hidePanel(panel) {
        if (panel == 'step1') {
            this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false });
        } else if (panel == 'step2') {
            this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
        }
    }

    chageCheckoxState(e, val) {
        let updateVal = [...this.state.carWashCategories], checkedCount = 0;

        find(updateVal, (washCategory) => {
            if (washCategory.active) {
                find(washCategory.categories, (subCategory) => {
                    if (subCategory.name == val.name && subCategory.id == val.id) {
                        subCategory.checked = !subCategory.checked;
                    }
                    if (subCategory.checked) {
                        checkedCount++;
                    }
                })
                washCategory.checkedCategoryCount = checkedCount;
            }
        })
        this.setState({
            carWashCategories: updateVal
        })

    }
    selectedDropdownText(location) {
        this.setState({ PrefferedLocation: location });
    }
    uploadImage(e, img) {
        let files = [], fileImgSize = 0;

        if (img == 'uploadImage') {
            let errFileType = false;
            this.setState({ uploadImageErrText: false });
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val),size: val.size});
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
                    uploadImage: this.state.uploadImage.concat(files),
                    uploadImgSize: fileImgSize + this.state.uploadImgSize,
                });
            }

        }
        else if (img == 'policeReport') {
            let errFileType = false;
            this.setState({ policeReportErrText: false });
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val),size: val.size });
                fileImgSize += val.size;
                if (val.type == "image/png" || val.type == "image/jpeg") {
                } else {
                    errFileType = true;
                }
            });

            // upload = { ...this.state.imageUploaded, files }
            if (this.state.policeReportImgSize + fileImgSize >= 20000000 || errFileType == true) {
                this.setState({ policeReportErrText: true });
            } else {
                // this.state.uploadImgSize += fileImgSize;
                this.setState({
                    policeReport: this.state.policeReport.concat(files),
                    policeReportImgSize: fileImgSize + this.state.policeReportImgSize
                })
            }

        }
        else if (img == 'rationCard') {
            let errFileType = false;
            this.setState({ rationCardErrText: false });
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val),size: val.size })
                fileImgSize += val.size;
                if (val.type == "image/png" || val.type == "image/jpeg") {
                } else {
                    errFileType = true;
                }
            });
            // upload = { ...this.state.imageUploaded, files }
            if (this.state.rationCardImgSize + fileImgSize >= 20000000 || errFileType == true) {
                this.setState({ rationCardErrText: true });
            } else {
                // this.state.uploadImgSize += fileImgSize;
                this.setState({
                    rationCard: this.state.rationCard.concat(files),
                    rationCardImgSize: fileImgSize + this.state.rationCardImgSize
                });
            }

        }
        else if (img == 'drivingLicence') {
            let errFileType = false;
            this.setState({ drivingLicenceErrText: false });
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val),size: val.size })
                fileImgSize += val.size;
                if (val.type == "image/png" || val.type == "image/jpeg") {
                } else {
                    errFileType = true;
                }
            });
            // upload = { ...this.state.imageUploaded, files }
            if (this.state.drivingLicence + fileImgSize >= 20000000 || errFileType == true) {
                this.setState({ drivingLicenceErrText: true });
            } else {
                // this.state.uploadImgSize += fileImgSize;
                this.setState({
                    drivingLicence: this.state.drivingLicence.concat(files),
                    drivingLicenceImgSize: fileImgSize + this.state.drivingLicenceImgSize
                });
            }

        }
    }

    cancelUploadImage(val, index) {
        let deleteFileSize= 0
        if (val == 'uploadImage') {
            if (this.state.uploadImgSize >= 20000000) {
                this.setState({ uploadImageErrText: true });
            } else {
                this.setState({ uploadImageErrText: false });
            }
            const array = this.state.uploadImage;
            array.splice(index, 1);
            deleteFileSize=this.state.uploadImgSize-this.state.uploadImage[index].size ;
            this.setState({ uploadImage: array,uploadImgSize: deleteFileSize });
            
        } else if (val == 'policeReport') {
            if (this.state.rationCard >= 20000000) {
            this.setState({ policeReport: array });
                this.setState({ policeReportErrText: true });
            } else {
                this.setState({ policeReportErrText: false });
            }
            const array = this.state.policeReport;
            array.splice(index, 1);
            deleteFileSize = this.state.policeReportSize-this.state.policeReport[index].size ;
            this.setState({ uploadImage: array,policeReportSize: deleteFileSize });
        } else if (val == 'rationCard') {
            if (this.state.rationCard >= 20000000) {
            this.setState({ rationCard: array });
                this.setState({ rationCardErrText: true });
            } else {
                this.setState({ rationCardErrText: false });
            }

            const array = this.state.rationCard;
            array.splice(index, 1);
            deleteFileSize = this.state.rationCardSize-this.state.rationCard[index].size ;
            this.setState({ uploadImage: array,rationCardSize: deleteFileSize });
        } else if (val == 'drivingLicence') {
            if (this.state.drivingLicence >= 20000000) {
            this.setState({ drivingLicence: array });
                this.setState({ drivingLicenceErrText: true });
            } else {
                this.setState({ drivingLicenceErrText: false });
            }

            const array = this.state.drivingLicence;
            array.splice(index, 1);
            deleteFileSize = this.state.drivingLicenceSize - this.state.drivingLicence[index].size ;
            this.setState({ uploadImage: array,drivingLicenceSize: deleteFileSize });
        }

    }
    render() {
        const uploadImage = map(this.state.uploadImage, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow'>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage("uploadImage", index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        const policeReportView = map(this.state.policeReport, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow'>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('policeReport', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        const rationCardView = map(this.state.rationCard, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow'>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('rationCard', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        const drivingLicenceView = map(this.state.drivingLicence, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow'>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('drivingLicence', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        let leftBlock = [];
        let rightBlock = [];
        each(this.state.carWashCategories, (carWashCategory, key) => {
            if (key % 2 != 0) {
                rightBlock.push(
                    <div className="sub-collapse-panel" key={key}>
                        <div className={carWashCategory.active ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={() => { this.openCategory(carWashCategory.id); }}>
                            <figure>
                                <img src={carWashCategory.image} alt="" />
                            </figure>
                            <h4>{carWashCategory.heading}</h4>
                            {carWashCategory.checkedCategoryCount == 0 ?
                                <span className="sub-category-count">
                                    {carWashCategory.categories.length} {carWashCategory.categories.length == 1 ? "subcategory" : "subcategories"}
                                </span> :
                                <span className="sub-category-count">
                                    {carWashCategory.checkedCategoryCount}{carWashCategory.checkedCategoryCount == 1 ? " Category Selected" : " Categories Selected"}
                                </span>
                            }
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>);
            } else {
                leftBlock.push(
                    <div className="sub-collapse-panel" key={key}>
                        <div className={carWashCategory.active ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={() => { this.openCategory(carWashCategory.id); }}>
                            <figure>
                                <img src={carWashCategory.image} alt="" />
                            </figure>
                            <h4>{carWashCategory.heading}</h4>
                            {carWashCategory.checkedCategoryCount == 0 ?
                                <span className="sub-category-count">
                                    {carWashCategory.categories.length} {carWashCategory.categories.length == 1 ? "subcategory" : "subcategories"}
                                </span> :
                                <span className="sub-category-count">
                                    {carWashCategory.checkedCategoryCount}{carWashCategory.checkedCategoryCount == 1 ? " Category Selected" : " Categories Selected"}
                                </span>
                            }
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>);
            }
        });
        return (
            <div className="panel-section car-wash">
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.hidePanel('step1');}}>
                        <h4>Step 1: Select Car Repair Type</h4>
                        <i className={this.state.step1Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step1Panel && <div className="panel-content">
                        <div className="row">
                            <div className="col-md-6 pad0">
                                <div className="search-box">
                                    <TextInput label="Search" name="text" type="text" />
                                    <i className="mdi mdi-magnify" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 padLeft0">{leftBlock}</div>
                            <div className="col-md-6 padRight0">{rightBlock}</div>
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={() => { this.hidePanel('step2') }} />
                        </div>
                    </div>}
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.hidePanel('step2') }}>
                        <h4>Step 2: Create A Car Repair Request</h4>
                        <i className={this.state.step2Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step2Panel && <div className="panel-content">
                        <div className="row">
                            <div className="col-md-6 left padLeft0">

                                <div className="form-section">
                                    <h4 className="panel-sub-title">Select Car Profile</h4>
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
                                <div className="form-section">
                                    <h4 className="panel-sub-title">Reason For Repair</h4>
                                    <div className="radio-btn">
                                        <div className="radio-style">
                                            <label>
                                                <input type="radio" name="radio" />
                                                <i className="mf-radio-button" /><span>Accident</span>
                                            </label>
                                        </div>
                                        <div className="radio-style">
                                            <label>
                                                <input type="radio" name="radio" />
                                                <i className="mf-radio-button" /><span>General</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="panel-sub-title">Job Details</h4>
                                    <div className="model-select">
                                        <input type="text" className="jd-text" placeholder="Enter Text Here" />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="panel-sub-title">Preffered Time & Date</h4>
                                    <div className="radio-btn">

                                        <div className="radio-style">
                                            <label>
                                                <input type="radio" name="radio" />
                                                <i className="mf-radio-button" /><span>This is urgent request!</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="row date-time">
                                        <div className="col-md-6 padLeft0">
                                            <DatePicker
                                                selected={this.state.startDate}
                                                onChange={this.handleChange}
                                                placeholderText="Date"
                                            />

                                        </div>

                                        <div className="col-md-6 padRight0">
                                            <TimePicker
                                                placeholder="Time"
                                                showSecond={false}
                                                className="xxx"
                                                format={format}
                                                use12Hours
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="form-section">
                                    <h4 className="panel-sub-title">Preffered location</h4>
                                    <div className="model-select">
                                        <select className="car-selection ">
                                            <option value="volvo">Marathalli</option>
                                            <option value="saab">Mg Road</option>
                                            <option value="mercedes">Rajajinagar</option>
                                            <option value="audi">Mysore Road</option>
                                        </select>
                                        <i className="mdi mdi-chevron-down" />
                                    </div>
                                    <div className="map-panel">
                                        <div className="gmaps">
                                            <Gmaps
                                                center={{ lat: 12.9952672, lng: 77.5905857 }}
                                                zoom={9}
                                                containerElement={<div style={{ height: "auto", width: 100 + '%' }} />}
                                                mapElement={<div style={{ height: 192 + 'px', width: 100 + '%' }} />}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right padRight0">
                                <div className="form-section uploads">
                                    <div className="row">
                                        <h4 className="panel-sub-title">upload a image </h4>
                                        <div className="model-select upload">
                                            <Upload id="uploadImage" fileUpload={(e) => { this.uploadImage(e, 'uploadImage') }} />
                                            {uploadImage}
                                        </div>
                                    </div>
                                    <span className={this.state.uploadImageErrText ? "image-upload-error" : "image-upload-error hide"}>
                                        <p>Sorry, image exceeds the file size 20mb.
                                            or you uploaded wrong image type.</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ uploadImageErrText: false })} />
                                    </span>
                                </div>

                                <div className="form-section uploads">
                                    <div className="row">
                                        <h4 className="panel-sub-title">police report</h4>
                                        <div className="model-select upload">
                                            <Upload id="policeReport" fileUpload={(e) => { this.uploadImage(e, 'policeReport') }} />
                                            {policeReportView}
                                        </div>
                                    </div>
                                    <span className={this.state.policeReportErrText ? "image-upload-error" : "image-upload-error hide"}>
                                        <p>Sorry, image exceeds the file size 20mb.
                                            or you uploaded wrong image type.</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ policeReportErrText: false })} />
                                    </span>
                                </div>

                                <div className="form-section uploads">
                                    <div className="row">
                                        <h4 className="panel-sub-title">ration card</h4>
                                        <div className="model-select upload">
                                            <Upload id="rationCard" fileUpload={(e) => { this.uploadImage(e, 'rationCard') }} />
                                            {rationCardView}
                                        </div>
                                    </div>
                                    <span className={this.state.rationCardErrText ? "image-upload-error" : "image-upload-error hide"}>
                                        <p>Sorry, image exceeds the file size 20mb.
                                            or you uploaded wrong image type.</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ rationCardErrText: false })} />
                                    </span>
                                </div>

                                <div className="form-section uploads">
                                    <div className="row">
                                        <h4 className="panel-sub-title">driving licence</h4>
                                        <div className="model-select upload">
                                            <Upload id="drivingLicence" fileUpload={(e) => { this.uploadImage(e, 'drivingLicence') }} />
                                            {drivingLicenceView}
                                        </div>
                                    </div>
                                    <span className={this.state.drivingLicenceErrText ? "image-upload-error" : "image-upload-error hide"}>
                                        <p>Sorry, image exceeds the file size 20mb.
                                            or you uploaded wrong image type.</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ drivingLicenceErrText: false })} />
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="next-button clearfix">
                            <Button btnType="submit" btnSize="lg" fontSize={13} label="Request For Quotes" />
                        </div>
                    </div>}

                </section>
            </div>
        );
    }
}

export default RepairSteps;
