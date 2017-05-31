import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carWashCategories: [
                {
                    id: 1,
                    active: false,
                    heading: "AC Heating & Cooling",
                    categories: [
                        {
                            name: "subcategory 1"
                        }, {
                            name: "subcategory 2"
                        }, {
                            name: "subcategory 3"
                        }, {
                            name: "subcategory 4"
                        }, {
                            name: "subcategory 5"
                        }, {
                            name: "subcategory 6"
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 2,
                    active: false,
                    heading: "breaks and exhaust",
                    categories: [
                        {
                            name: "subcategory 1"
                        }, {
                            name: "subcategory 2"
                        }, {
                            name: "subcategory 3"
                        }, {
                            name: "subcategory 4"
                        }, {
                            name: "subcategory 5"
                        }, {
                            name: "subcategory 6"
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 3,
                    active: false,
                    heading: "Body Work",
                    categories: [
                        {
                            name: "subcategory 1"
                        }, {
                            name: "subcategory 2"
                        }, {
                            name: "subcategory 3"
                        }, {
                            name: "subcategory 4"
                        }, {
                            name: "subcategory 5"
                        }, {
                            name: "subcategory 6"
                        }],
                    image: '../../images/logo1.png'
                }, {
                    id: 4,
                    active: false,
                    heading: "engine",
                    categories: [
                        {
                            name: "subcategory 1"
                        }, {
                            name: "subcategory 2"
                        }, {
                            name: "subcategory 3"
                        }, {
                            name: "subcategory 4"
                        }, {
                            name: "subcategory 5"
                        }, {
                            name: "subcategory 6"
                        }],
                    image: '../../images/logo1.png'
                }
            ],

        };
    }
    openCategory(id) {
        let newCat = [];
        map(this.state.carWashCategories,(category)=>{
            let cat = {...category,active : false};
            if(category.id == id){
                    cat.active = true;
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
                    <div className="sub-collapse-panal" key={key}>
                        <div className={carWashCategory.active ? "title active" : "title "} onClick={() => { this.openCategory(carWashCategory.id); }}>
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
                    </div>);
            } else {
                leftBlock.push(
                    <div className="sub-collapse-panel" key={key} >
                        <div className={carWashCategory.active ? "title active" : "title "} onClick={() => { this.openCategory(carWashCategory.id) }}>
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
            <div className="panel-section car-wash">
                <section className="collapse-panel">
                    <div className="panel-head">
                        <h4>Step 1: Select Car Wash Type</h4>
                        <i className="mdi mdi-chevron-up" />
                    </div>
                    <div className="panel-content">
                        <div className="search-box col-md-6 clearfix">
                            <div className="remove-left-padding">
                                <TextInput label="Search" name="text" type="text" />
                            </div>
                            <i className="mdi mdi-magnify" />
                        </div>
                        <div className="row">
                            <div className="col-md-6">{leftBlock}</div>
                            <div className="col-md-6">{rightBlock}</div>
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>
                    </div>
                </section>
                <section className="collapse-panel">
                    <div className="panel-head">
                        <h4>Step 2: Create A Car Wash Request</h4>
                        <i className="mdi mdi-chevron-up" />
                    </div>
                    <div className="panel-content">
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
                                    <div className="date-time">
                                        <div className="col-md-6 padLeft0">
                                            <TextInput label="Date" name="text" type="text" />
                                        </div>
                                        <div className="col-md-6 padRight0">
                                            <TextInput label="Time" name="text" type="text" />
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
                                                containerElement={<div style={{ height: "auto", width: 570 + 'px' }} />}
                                                mapElement={<div style={{ height: 192 + 'px', width: 570 + 'px' }} />}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 right">
                                <h4 className="panel-sub-title">Special Instruction</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis.
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                </p>
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
