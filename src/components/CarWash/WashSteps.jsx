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
import CustomModal from '../common/CustomModal';
import { Modal } from 'react-bootstrap';


class WashSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PrefferedLocation:'Select Location',
            // startDate: moment(),
            step1Panel: true,
            step2Panel: false,
            carWashCategories: [
                {
                    id: 1,
                    active: false,
                    heading: "Brakes & Exhaust",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-5.png',
                    modalText:"Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                }, {
                    id: 2,
                    active: false,
                    heading: "Basic Wash",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-2.png',
                    modalText:"Basic Wash Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "

                }, {
                    id: 3,
                    active: false,
                    heading: "Awesome Wash & Detail",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-4.png',
                    modalText:"Awesome Wash & Detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                }, {
                    id: 4,
                    active: false,
                    heading: "Wash & Shine",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-1.png',
                    modalText:"Wash & Shine Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                },
                {
                    id: 5,
                    active: false,
                    heading: "Totally Awesome & Detail",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-3.png',
                    modalText:"Totally Awesome & Detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                },
                {
                    id: 6,
                    active: false,
                    heading: "Total detail",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-5.png',
                    modalText:"Total detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                },
                {
                    id: 7,
                    active: false,
                    heading: "AC Dust Sanitization",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-4.png',
                    modalText:"AC Dust Sanitization Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
                },
                {
                    id: 8,
                    active: false,
                    heading: "Monthly Package",
                    checkedCategoryCount: 0,
                    showModal:false,
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
                    image: '../../images/auto-service-icons-2.png',
                    modalText:"Monthly Package Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. "
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
    hidePanel(panel) {
        if (panel == 'step1') {
            this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false  });
        } else if (panel == 'step2') {
            this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
        }
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

    chageCheckoxState(e,val) {
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
                });
                washCategory.checkedCategoryCount = checkedCount;
            }
        });
        this.setState({
            carWashCategories: updateVal
        });

    }
    selectedDropdownText(location) {
        this.setState({PrefferedLocation:location});
    }
    render() {
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
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className={category.checked?"label active":"label"}><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.checked} {category.name}</label>
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
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className={category.checked?"label active":"label"}><input type="checkbox" checked={category.checked} onChange={(e) => { this.chageCheckoxState(e, category, index) }} value="" />{category.name}</label>
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
                    <div className="panel-head" onClick={() => { this.hidePanel('step1')}}>
                        <h4>Step 1: Select Car Wash Type</h4>
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
                            <Button btnType="submit" btnSize="sm" fontSize={14} label="Next" btnCallBack={() => { this.hidePanel('step2'); }}/>
                        </div>
                    </div>}
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={()=>{this.hidePanel('step2');}}>
                        <h4>Step 2: Create A Car Wash Request</h4>
                        <i className={this.state.step2Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step2Panel && 
                    <div className="panel-content">
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
                                    <h4 className="panel-sub-title">Preffered Time & Date</h4>
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
                                                showSecond={false}
                                                placeholder="Time"
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
                                <h4 className="panel-sub-title">Special Instruction</h4>
                                <p className="panel-text">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                </p>
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

export default WashSteps;
