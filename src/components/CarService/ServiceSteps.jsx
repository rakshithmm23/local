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


class ServiceSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    heading: "Regular Service",
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
                    image: '../../images/wash-icon.png'
                }, {
                    id: 2,
                    active: false,
                    heading: "Fuel Economy Service Type",
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
                    image: '../../images/wash-icon.png'
                }, {
                    id: 3,
                    active: false,
                    heading: "Full Service",
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
                    image: '../../images/wash-icon.png'
                }, {
                    id: 4,
                    active: false,
                    heading: "Annual Package - Car Care & Dealing",
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
                    image: '../../images/wash-icon.png'
                }
            ],

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
                        checkedCount++
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
    uploadImage(e, val) {
        if (val == 'uploadImage') {
            let files = []
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val) })
            });
            // upload = { ...this.state.imageUploaded, files }
            this.setState({
                uploadImage: this.state.uploadImage.concat(files)
            })
        }
        else if (val == 'policeReport') {
            let files = []
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val) })
            });
            // upload = { ...this.state.imageUploaded, files }
            this.setState({
                policeReport: this.state.policeReport.concat(files)
            })
        }
        else if (val == 'rationCard') {
            let files = []
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val) })
            });
            // upload = { ...this.state.imageUploaded, files }
            this.setState({
                rationCard: this.state.rationCard.concat(files)
            })
        }
        else if (val == 'drivingLicence') {
            let files = []
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val) })
            });
            // upload = { ...this.state.imageUploaded, files }
            this.setState({
                drivingLicence: this.state.drivingLicence.concat(files)
            })
        }
    }

    cancelUploadImage(val, index) {
        if (val == 'uploadImage') {
            const array = this.state.uploadImage;
            array.splice(index, 1);
            this.setState({ uploadImage: array });
        } else if (val == 'policeReport') {
            const array = this.state.policeReport;
            array.splice(index, 1);
            this.setState({ imageUploaded: array });
        } else if (val == 'rationCard') {
            const array = this.state.rationCard;
            array.splice(index, 1);
            this.setState({ imageUploaded: array });
        } else if (val == 'drivingLicence') {
            const array = this.state.drivingLicence;
            array.splice(index, 1);
            this.setState({ imageUploaded: array });
        }

    }
    render() {
        const uploadImage = map(this.state.uploadImage, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow'>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage("uploadImage", index) }}>
                            <i className="mdi mdi-close"></i>
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
                            <i className="mdi mdi-close"></i>
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
                            <i className="mdi mdi-close"></i>
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
                            <i className="mdi mdi-close"></i>
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
            if (key % 2 == 0) {
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
                    <div className="panel-head" onClick={() => { this.hidePanel('step1') }}>
                        <h4>Step 1: Select Car Service Type</h4>
                        <i className={this.state.step1Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step1Panel && <div className="panel-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="search-box">
                                    <TextInput label="Search" name="text" type="text" />
                                    <i className="mdi mdi-magnify" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">{rightBlock}</div>
                            <div className="col-md-6">{leftBlock}</div>
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={() => { this.hidePanel('step2') }} />
                        </div>
                    </div>}
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.hidePanel('step2') }}>
                        <h4>Step 2: Create A Car Service Request</h4>
                        <i className={this.state.step2Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step2Panel && <div className="panel-content">
                        <div className="row">
                            <div className="col-md-6 left">

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
                                            />

                                        </div>

                                        <div className="col-md-6 padRight0">
                                            <TimePicker
                                                showSecond={false}
                                                defaultValue={now}
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
                            <div className="col-md-6 right">
                                <h4 className="panel-sub-title">Special Instruction</h4>
                                <p className="panel-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                </p>
                                <div className="form-section uploads">
                                    <div className="row">
                                        <h4 className="panel-sub-title">upload a image </h4>
                                        <div className="model-select upload">
                                            <Upload id="uploadImage" fileUpload={(e) => { this.uploadImage(e, 'uploadImage') }} />
                                            {uploadImage}
                                        </div>
                                        <span className="image-ipload-error">
                                            <p>Sorry, your image exceeds the file size limit of 20mb.
                                            Try again with another image.</p>
                                            <i className="mdi mdi-close" />
                                        </span>
                                    </div>
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

export default ServiceSteps;
