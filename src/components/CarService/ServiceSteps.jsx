import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map, find, equal } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { DropdownButton, MenuItem,Modal } from 'react-bootstrap';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import CustomModal from '../common/CustomModal';


class ServiceSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadImgSize: 0,
            uploadImageErrText: false,
            imageUploaded: [],
            policeReport: [],
            rationCard: [],
            drivingLicence: [],
            PrefferedLocation: 'Select Location',
            // startDate: moment(),
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
                    image: '../../images/wash-icon.png',
                    modalText:"Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
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
                    image: '../../images/wash-icon.png',
                    modalText:"Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
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
                    image: '../../images/wash-icon.png',
                    modalText:"Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
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
                    image: '../../images/wash-icon.png',
                    modalText:"Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
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
                cat.showModal = false;
            } else {
                cat.active = false;
                cat.showModal = false;
            }
            newCat.push(cat);
        })
        this.setState({
            carWashCategories: newCat
        });
    }
    showModal(e,id){
        e.preventDefault();
        let updateVal=[...this.state.carWashCategories]
        each(updateVal, function(value) {
            value.showModal = false;
            if(value.id == id){
                value.showModal = !value.showModal;
            }
        });
        this.setState({carWashCategories:updateVal})
    }
    hidePanel(panel) {
        if (panel == 'step1') {
            this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false });
        } else if (panel == 'step2') {
            this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
        }
    }

    chageCheckoxState(e, val) {
        debugger
        let updateVal = [...this.state.carWashCategories], checkedCount = 0;

        find(updateVal, (washCategory) => {
            washCategory.showModal=false;
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

        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        let leftBlock = [];
        let rightBlock = [];
        each(this.state.carWashCategories, (carWashCategory, key) => {
            if (key % 2 == 0) {
                rightBlock.push(
                    <div className="sub-collapse-panel" key={key}>
                        <figure onClick={(e)=>{this.showModal(e,carWashCategory.id)}}>
                                <img src={carWashCategory.image} alt="" />
                        </figure>
                        <div className={carWashCategory.active ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={(event) => { event.preventDefault();this.openCategory(carWashCategory.id); }}>
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
                                return (<div className="options" key={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                        <CustomModal showModal={carWashCategory.showModal} footer="false" title={carWashCategory.heading} closeIcon="true">
                            <Modal.Body>
                                <p className="info-text">{carWashCategory.modalText}</p>
                                
                            </Modal.Body>

                        </CustomModal>
                    </div>);
            } else {
                leftBlock.push(
                    <div className="sub-collapse-panel" key={key}>
                        <figure onClick={(e)=>{this.showModal(e,carWashCategory.id)}}>
                                <img src={carWashCategory.image} alt="" />
                        </figure>
                        <div className={carWashCategory.active ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={(event) => { event.preventDefault();this.openCategory(carWashCategory.id); }}>
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
                                return (<div className="options" key={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                        <CustomModal showModal={carWashCategory.showModal} footer="false" title={carWashCategory.heading} closeIcon="true">
                            <Modal.Body>
                                <p className="info-text">{carWashCategory.modalText}</p>
                                
                            </Modal.Body>

                        </CustomModal>
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
                            <div className="col-md-6 pad0">
                                <div className="search-box">
                                    <TextInput label="Search" name="text" type="text" />
                                    <i className="mdi mdi-magnify" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 padLeft0">{rightBlock}</div>
                            <div className="col-md-6 padRight0">{leftBlock}</div>
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={14} label="Next" btnCallBack={() => { this.hidePanel('step2') }} />
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
                                    <h4 className="panel-sub-title">Job Details</h4>
                                    <div className="model-select">
                                        <input type="text" className="jd-text" placeholder="Enter Text Here" />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="panel-sub-title">Preffered Time & Date</h4>
                                    <div className="toggleBtn">
                                        <span> This is an urgent request ! </span>
                                        <ToggleSwitch
                                            checked
                                            size="small"
                                            ref={(node) => {
                                                this.toggleSwitch = node;
                                            }}
                                        />
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

                            </div>
                            <div className="col-md-6 right padRight0">
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
                                    <div className="gmaps">
                                        <Gmaps
                                            center={{ lat: 12.9952672, lng: 77.5905857 }}
                                            zoom={9}
                                            containerElement={<div style={{ height: "auto", width: 100 + '%' }} />}
                                            mapElement={<div style={{ height: 140 + 'px', width: 100 + '%' }} />}
                                        />
                                    </div>
                                </div>
                                <div className="form-section uploads car-service-upload">
                                    <div className="row">
                                        <h4 className="panel-sub-title">upload a image </h4>
                                        <div className="model-select upload">
                                            <Upload id="uploadImage" fileUpload={(e) => { this.fileNameUpload(e) }} />
                                            {imageUploadedView}
                                        </div>
                                        <span className={this.state.uploadImageErrText ? "image-upload-error padLeft15" : "image-upload-error padLeft15 hide"}>
                                            <p>Sorry, your image exceeds the file size limit of 20mb.
                                            Try again with another image.</p>
                                            <i className="mdi mdi-close" onClick={() => this.setState({ uploadImageErrText: false })} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="next-button clearfix">
                            <Button btnType="submit" btnSize="lg" fontSize={14} label="Request For Quotes" />
                        </div>
                    </div>}

                </section>
            </div>
        );
    }
}

export default ServiceSteps;
