import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';

class Steps extends Component {
    constructor(props) {
        super(props)
        this._uploadCallBack = this._uploadCallBack.bind(this);
        this.state = {
            carWashCategories:[
            {
                id:1,
                active:false,
                heading:"AC Heating & Cooling",
                categories:[
                    {
                        name:"subcategory 1"
                    },{
                        name:"subcategory 2"
                    },{
                        name:"subcategory 3"
                    },{
                        name:"subcategory 4"
                    },{
                        name:"subcategory 5"
                    },{
                        name:"subcategory 6"
                    }],
                image:'../../images/logo1.png'
            },{
                id:2,
                active:false,
                heading:"breaks and exhaust",
                categories:[
                    {
                        name:"subcategory 1"
                    },{
                        name:"subcategory 2"
                    },{
                        name:"subcategory 3"
                    },{
                        name:"subcategory 4"
                    },{
                        name:"subcategory 5"
                    },{
                        name:"subcategory 6"
                    }],
                image:'../../images/logo1.png'
            },{
                id:3,
                active:false,
                heading:"Body Work",
                categories:[
                    {
                        name:"subcategory 1"
                    },{
                        name:"subcategory 2"
                    },{
                        name:"subcategory 3"
                    },{
                        name:"subcategory 4"
                    },{
                        name:"subcategory 5"
                    },{
                        name:"subcategory 6"
                    }],
                image:'../../images/logo1.png'
            },{
                id:4,
                active:false,
                heading:"engine",
                categories:[
                    {
                        name:"subcategory 1"
                    },{
                        name:"subcategory 2"
                    },{
                        name:"subcategory 3"
                    },{
                        name:"subcategory 4"
                    },{
                        name:"subcategory 5"
                    },{
                        name:"subcategory 6"
                    }],
                image:'../../images/logo1.png'
            }
        ],
        imgUploads: [],
        policeReports: [],
        rationCard: [],
        drivingLicense: []
        };
    }
    _uploadCallBack(name, files) {
      switch(name) {
        case 'imgUploads':
          this.setState({'imgUploads': files})
          break;
      }
      this.setState({})
    }
    openCategory(id) {
        let newCat = [];
        map(this.state.carWashCategories,(category)=>{
            let cat = {...category}
            if(category.id == id){
                if(cat.active == true){
                    cat.active = false;
                }else{
                    cat.active = true;
                }
            }
            newCat.push(cat);
        })
        this.setState({
            carWashCategories: newCat
        });
    }
    render() {
        let leftBlock = [];
        let rightBlock = [];
        each(this.state.carWashCategories, (carWashCategory, key) => {
            if (key % 2 == 0) {
                rightBlock.push(
                    <div className="sub-collapse-panal" key={key} onClick={() => { this.openCategory(carWashCategory.id) }}>
                        <div className={carWashCategory.active ? "title active" : "title "}>
                            <span>
                                <figure>
                                    <img src={carWashCategory.image} alt="" />
                                </figure>
                                <h4>{carWashCategory.heading}</h4>
                                <span className="sub-category-count">6 subcategories</span>
                            </span>
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-category" : "sub-category hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>)
            } else {
                leftBlock.push(
                    <div className="sub-collapse-panal" key={key} onClick={() => { this.openCategory(carWashCategory.id) }}>
                        <div className={carWashCategory.active ? "title active" : "title "}>
                            <span>
                                <figure>
                                    <img src={carWashCategory.image} alt="" />
                                </figure>
                                <h4>{carWashCategory.heading}</h4>
                                <span className="sub-category-count">6 subcategories</span>
                            </span>
                            <i className={carWashCategory.active ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
                        </div>
                        <div className={carWashCategory.active ? "sub-category" : "sub-category hide"}>
                            {map(carWashCategory.categories, (category, index) => {
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" value="" />{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>)
            }
        });
        return (
            <div className="collapse-panal car-wash">
                <section className="s1" >
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className="mdi mdi-chevron-up" ></i>
                    </div>
                    <div className="">
                        <div className="search-box col-md-6 clearfix">
                            <div className="remove-left-padding">
                                <TextInput label="Search" name="text" type="text" />
                            </div>
                            <i className="mdi mdi-magnify"></i>
                        </div>
                        <div className="container-fluid">

                            <div className="col-md-12">
                                <div className="col-md-6">{leftBlock}</div>
                                <div className="col-md-6">{rightBlock}</div>
                            </div>
                        </div>
                        <div className="next-button clearfix">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>

                    </div>
                </section>
                <section className="s2 " >
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className="mdi mdi-chevron-up" ></i>
                    </div>
                    <div className="content clearfix">
                        <div className="col-md-12">
                            <div className="clearfix">
                                <div className="col-md-6 left">
                                    <div className="scr sec-container">
                                        <div className="clearfix">
                                            <div className="dd-title">
                                                <title className="sec-title">Select Car Profile</title>
                                            </div>
                                            <div className="selection col-md-11">
                                                <div className="clearfix">
                                                    <div className="model-select  ">

                                                        <select className="car-selection ">
                                                            <option value="volvo">Volvo</option>
                                                            <option value="saab">Saab</option>
                                                            <option value="mercedes">Mercedes</option>
                                                            <option value="audi">Audi</option>
                                                        </select>

                                                        <i className="mdi mdi-chevron-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="repair-reasons sec-container">
                                        <title className="sec-title">Reason For Repair</title>
                                        <div className="radio-btn">
                                            <div className="radio-style">
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <i className="mf-radio-button"/><span>Accident</span>
                                                </label>
                                            </div>
                                            <div className="radio-style">
                                                <label>
                                                    <input type="radio" name="radio" />
                                                    <i className="mf-radio-button"/><span>General</span>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="job-details sec-container">
                                        <div className="clearfix">
                                            <title className="sec-title">Job Details</title>
                                            <div className="col-md-11 remove-left-padding">
                                                <input type="text" className="jd-text" placeholder="Enter Text Here"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="preffered-time-date sec-container">
                                        <div className="clearfix">
                                            <title className="sec-title">Preffered Time & Date</title>
                                            <div className="radio-btn">
                                            <div className="radio-style">
                                                <label>
                                                    <input type="radio" name="preffered-time" />
                                                    <i className="mf-radio-button"/><span>General</span>
                                                </label>
                                            </div>

                                        </div>
                                                <div className="date-time col-md-11  no-left-pad">
                                                    <div className="clearfix">
                                                        <div className="col-md-6 no-left-pad">
                                                            <div className="clearfix">
                                                                <TextInput label="Date" name="text" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="clearfix">
                                                                <TextInput label="Time" name="text" type="text" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="preffered-location sec-container">
                                        <div className="clearfix">
                                            <title className="sec-title">Preffered location</title>
                                            <div className="selection col-md-11 no-left-pad">
                                                <div className="clearfix">
                                                    <div className="model-select  ">
                                                        <select className="car-selection ">
                                                            <option value="volvo">Marathalli</option>
                                                            <option value="saab">Mg Road</option>
                                                            <option value="mercedes">Rajajinagar</option>
                                                            <option value="audi">Mysore Road</option>
                                                        </select>
                                                        <i className="mdi mdi-chevron-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="gmaps">
                                                <Gmaps
                                                    center={{ lat: 12.9952672, lng: 77.5905857 }}
                                                    zoom={9}
                                                    containerElement={<div style={{ height: "auto",width: 570 + 'px' }} />}
                                                    mapElement={<div style={{ height: 500 + 'px',width: 570 + 'px' }} />}

                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-6 right">
                                    <div className="clearfix">
                                        <div className="uai sec-title">
                                            <div className="clearfix">
                                                <title className="sec-title">Upload An Image</title>
                                                <Upload uploadData={this.state.imgUploads} name="imgUploads" uploadCallBack={this._uploadCallBack} responsiveSize="col-md-3 col-sm-2 col-xs-2 no-left-pad " key={1}/>

                                            </div>
                                        </div>

                                        <div className="police-report sec-container">
                                            <div className="clearfix">
                                                <title className="sec-title">police report</title>
                                                <Upload uploadData={this.state.policeReports} name="policeReports" uploadCallBack={this._uploadCallBack} responsiveSize="col-md-3 col-sm-2 col-xs-2 no-left-pad " key={2} />

                                            </div>
                                        </div>
                                        <div className="ration card sec-container">
                                            <div className="clearfix">
                                                <title className="sec-title">ration card</title>
                                                <Upload uploadData={this.state.rationCard} name="rationCard" uploadCallBack={this._uploadCallBack} responsiveSize="col-md-3 col-sm-2 col-xs-2 no-left-pad " key={3} />

                                            </div>
                                        </div>
                                        <div className="driving-licence sec-container">
                                            <div className="clearfix">
                                                <title className="sec-title">driving licence</title>
                                                <Upload uploadData={this.state.drivingLicense} name="drivingLicense" uploadCallBack={this._uploadCallBack} responsiveSize="col-md-3 col-sm-2 col-xs-2 no-left-pad " key={4} />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="next-button clearfix">
                        <Button btnType="submit" btnSize="lg" fontSize={13} label="Request For Quote" />
                    </div>

                </section>
            </div>
        );
    }
}

export default Steps;
