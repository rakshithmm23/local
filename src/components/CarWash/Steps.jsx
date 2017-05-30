import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map } from 'lodash'

class Steps extends Component { 
    constructor(props){
        super(props)
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
        ]
        };
    }
    openCategory(id){        
        let newCat = [];
        map(this.state.carWashCategories,(category)=>{
            let cat = {...category, active: false}
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
        each(this.state.carWashCategories,(carWashCategory, key)=>{
            if (key%2==0) {
                    rightBlock.push(
                    <div className="sub-collapse-panal" key={key}  onClick={()=>{this.openCategory(carWashCategory.id)}}>
                        <div className="title">
                            <span> 
                                <figure>
                                    <img src={carWashCategory.image} alt=""/>
                                </figure>
                                <h4>{carWashCategory.heading}</h4>
                                <span className="sub-category-count">6 subcategories</span>
                            </span>
                            <i className= "mdi mdi-chevron-up"/>
                        </div>
                        <div className={ carWashCategory.active ? "sub-category" : "sub-category hide" }>
                            {map(carWashCategory.categories,(category,index)=>{
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" value=""/>{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>)
            }else{
                    leftBlock.push(
                    <div className="sub-collapse-panal" key={key} onClick={()=>{this.openCategory(carWashCategory.id)}}>
                        <div className="title">
                            <span> 
                                <figure>
                                    <img src={carWashCategory.image} alt=""/>
                                </figure>
                                <h4>{carWashCategory.heading}</h4>
                                <span className="sub-category-count">6 subcategories</span>
                            </span>
                            <i className= "mdi mdi-chevron-up"/>
                        </div>
                        <div className={carWashCategory.active ? "sub-category" : "sub-category hide"}>
                            {map(carWashCategory.categories,(category,index)=>{
                                return (<div className="options" index={index}>
                                    <span className="checkbox-style">
                                        <label className="label"><input type="checkbox" value=""/>{category.name}</label>
                                    </span>
                                </div>);
                            })}
                        </div>
                    </div>)
                }
        });
        return (
            <div className="collapse-panal">
                <section className="s1" >
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className= "mdi mdi-chevron-up" ></i>
                    </div>
                    <div className="">
                        <div className="search-box col-md-6 clearfix">
                            <div className="remove-left-padding">
                                <TextInput label="Search" name="text" type="text"/>
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
                            <Button  btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Steps;
