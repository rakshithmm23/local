import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map, find } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';


class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            step1Panel:false,
            step2Panel:true,
            carWashCategories: [
                {
                    id: 1,
                    active: false,
                    heading: "Brakes & Exhaust",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 2,
                    active: false,
                    heading: "Basic Wash",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 3,
                    active: false,
                    heading: "Awesome Wash & Detail",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "subcategory 1",
                            checked:false
                        }, {
                            id:2,
                            name: "subcategory 2",
                            checked:false
                        }, {
                            id:3,
                            name: "subcategory 3",
                            checked:false
                        }, {id:4,
                            name: "subcategory 4",
                            checked:false
                        }, {
                            id:5,
                            name: "subcategory 5",
                            checked:false
                        }, {
                            id:6,
                            name: "subcategory 6",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 4,
                    active: false,
                    heading: "Wash & Shine",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "subcategory 1",
                            checked:false
                        }, {
                            id:2,
                            name: "subcategory 2",
                            checked:false
                        }, {
                            id:3,
                            name: "subcategory 3",
                            checked:false
                        }, {
                            id:4,
                            name: "subcategory 4",
                            checked:false
                        }, {
                            id:5,
                            name: "subcategory 5",
                            checked:false
                        }, {
                            id:6,
                            name: "subcategory 6",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                },
                {
                    id: 5,
                    active: false,
                    heading: "Totally Awesome & Detail",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                },
                {
                    id: 6,
                    active: false,
                    heading: "Total detail",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                },
                {
                    id: 7,
                    active: false,
                    heading: "AC Dust Sanitization",
                    checkedCategoryCount:0,
                   categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
                },
                {
                    id: 8,
                    active: false,
                    heading: "Monthly Package",
                    checkedCategoryCount:0,
                    categories: [
                        {
                            id:1,
                            name: "Service title one",
                            checked:false
                        }, {
                            id:2,
                            name: "Service title two",
                            checked:false
                        }, {
                            id:3,
                            name: "Service title three",
                            checked:false
                        }, {
                            id:4,
                            name: "I am not sure",
                            checked:false
                        }],
                    image: '../../images/logo1.png'
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
        debugger
        let newCat = [];
        map(this.state.carWashCategories, (category) => {
            let cat = { ...category};
            if (category.id == id) {
                cat.active = !cat.active;
            }else{
                cat.active=false;
            }
            newCat.push(cat);
        })
        this.setState({
            carWashCategories: newCat
        });
    }
    hidePanel(panel){
        if(panel == 'step1'){
            this.setState({step1Panel:!this.state.step1Panel});
        }else if(panel == 'step2'){
            this.setState({step2Panel:!this.state.step2Panel});
        }
    }
    chageCheckoxState(e,val){
        let updateVal=[...this.state.carWashCategories],checkedCount=0;

        find(updateVal,(washCategory)=>{
            if(washCategory.active){
            find(washCategory.categories,(subCategory)=>{
                if(subCategory.name == val.name && subCategory.id == val.id){
                    subCategory.checked = !subCategory.checked;
                }
                if(subCategory.checked){
                    checkedCount++
                }
            })
            washCategory.checkedCategoryCount = checkedCount;
            }
        })
        this.setState({
            carWashCategories:updateVal
        })

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
                        <div className={carWashCategory.active ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={() => { this.openCategory(carWashCategory.id); }}>
                            <figure>
                                <img src={carWashCategory.image} alt="" />
                            </figure>
                            <h4>{carWashCategory.heading}</h4>
                            {carWashCategory.checkedCategoryCount==0?
                            <span className="sub-category-count">
                                {carWashCategory.categories.length} {carWashCategory.categories.length==1?"subcategory":"subcategories"}
                            </span>:
                            <span className="sub-category-count">
                                {carWashCategory.checkedCategoryCount}{carWashCategory.checkedCategoryCount==1?" Category Selected":" Categories Selected"}
                            </span>
                            }
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e)=>{this.chageCheckoxState(e,category,index)}} value="" />{category.name}</label>
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
                            {carWashCategory.checkedCategoryCount==0?
                            <span className="sub-category-count">
                                {carWashCategory.categories.length} {carWashCategory.categories.length==1?"subcategory":"subcategories"}
                            </span>:
                            <span className="sub-category-count">
                                {carWashCategory.checkedCategoryCount}{carWashCategory.checkedCategoryCount==1?" Category Selected":" Categories Selected"}
                            </span>
                            }
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" checked={category.checked} onChange={(e)=>{this.chageCheckoxState(e,category,index)}} value="" />{category.name}</label>
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
                    <div className="panel-head" onClick={()=>{this.hidePanel('step1')}}>
                        <h4>Step 1: Select Car Wash Type</h4>
                        <i className={this.state.step1Panel?"mdi mdi-chevron-up":"mdi mdi-chevron-down"} />
                    </div>
                    <div className="panel-content">
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
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>
                    </div>
                </section>
                <section className="collapse-panel">
                    <div className="panel-head" onClick={()=>{this.hidePanel('step2')}}>>
                        <h4>Step 2: Create A Car Wash Request</h4>
                        <i className={this.state.step2Panel?"mdi mdi-chevron-up":"mdi mdi-chevron-down"} />
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
                                    <h4 className="panel-sub-title">Preffered Time & Date</h4>
                                    <div className="row date-time">
                                        {/*<div className="col-md-6 padLeft0">
                                            <TextInput label="Date" name="text" type="text" />
                                        </div>*/}
                                        <DatePicker 
                                            selected={this.state.startDate}
                                            onChange={this.handleChange}
                                        />
                                        {/*<div className="col-md-6 padRight0">
                                            <TextInput label="Time" name="text" type="text" />
                                        </div>*/}
                                        <TimePicker
                                            showSecond={false}
                                            defaultValue={now}
                                            className="xxx"
                                            
                                            format={format}
                                            use12Hours
                                        />
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
                            </div>
                        </div>
                    </div>}
                    <div className="next-button clearfix">
                        <Button btnType="submit" btnSize="lg" fontSize={13} label="Request For Quote" />
                    </div>
                </section>
            </div>
        );
    }
}

export default Steps;
