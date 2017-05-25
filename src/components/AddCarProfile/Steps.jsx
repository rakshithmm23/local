import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { map } from 'lodash';
import TextInput from '../common/TextInput';


class Steps extends Component {
    constructor() {
        super()
        this.state = {
            activeLogo: null,
            activeModel: null,
            tab1: false,
            tab2: false,
            tab3: true,
            imageUploaded: [],
            submissionError: false
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
        this.setState({ activeLogo: name })
    }
    activeModel(name) {
        this.setState({ activeModel: name })
    }
    tabOpen(val) {
        if (val == 'tab1') {
            this.setState({ tab1: true, tab2: false, tab3: false })
        } else if (val == 'tab2') {
            this.setState({ tab1: false, tab2: true, tab3: false })
        } else if (val == 'tab3') {
            this.setState({ tab1: false, tab2: false, tab3: true })
        }
    }
    
    


    render() {
        const carList = [
            {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 2'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 2'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 2'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 3'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 3'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 3'
            },{
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 2'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 2'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 2'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 3'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 3'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 3'
            },{
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 2'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 2'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 2'
            }, {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 3'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 3'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 3'
            }
        ]
        const carModel = [
            {
                logo: '../../images/logo1.png',
                name: 'Aston Martin 1'
            }, {
                logo: '../../images/logo2.png',
                name: 'Alfa Romeo 1'
            }, {
                logo: '../../images/logo3.png',
                name: 'Acura 1'
            }
        ]
        const carListView = map(carList, (carItem) => {
            return (

                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.activeLogo(carItem.name) }}>
                    <div className={carItem.name == this.state.activeLogo ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            )
        })
        const carModelView = map(carModel, (carItem) => {
            return (
                <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => { this.setState({ activeModel: carItem.name }) }}>
                    <div className={carItem.name == this.state.activeModel ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            );
        });

        return (
            <div>
                <section className="s1" >
                    <div className="title" onClick={() => { this.tabOpen('tab1') }}>
                        <h4>Step 1: Select The Manufacturer</h4>
                        <i className={this.state.tab1 ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} ></i>
                    </div>
                    {this.state.tab1 && <div>
                        <div className="search-box ">
                            <div className="remove-left-padding">
                                <TextInput label="Car Profile Name" name="text" type="text"/>
                            </div>
                            <i className="mdi mdi-magnify"></i>
                        </div>
                        <div className="img-container">
                            {carListView}
                    </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={(e) =>{e.preventDefault(); this.tabOpen('tab2')}}/>
                        </div>

                    </div>}
                </section>
                <section className="s2" >
                    <div className="title" onClick={() => {this.tabOpen('tab2') }}>
                        <h4>Step 2: Select The Modal</h4>
                        <i className={this.state.tab2 ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} ></i>
                    </div>
                    {this.state.tab2 && <div>
                        <div className="container-fluid select-option">
                            <div className="modal-select col-md-6">
                                <select>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                                <i className="mdi mdi-chevron-down"></i>
                            </div>
                        </div>
                        <div className="img-container">
                            {carModelView}
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" btnCallBack={(e) =>{e.preventDefault(); this.tabOpen('tab3')}}/>
                        </div>
                    </div>}
                </section>
                <section className="s3" >
                    <div className="title" onClick={() => { this.tabOpen('tab3') }}>
                        <h4>Step 3: Enter Other Details</h4>
                        <i className={this.state.tab3 ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} ></i>
                    </div>
                    {this.state.tab3 &&
                        <div className="wrapper">
                            <div className="upload-image">
                                <h4>upload images</h4>
                                <Upload />
                            </div>
                            <div className="car-profile">
                                <div className="container-fluid">
                                    <h4>car profile</h4>
                                    
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Car Profile Name" name="text" type="text"  showValidationError={this.errors['text']}  validationError="Enter a valid text" onChange={this.onFieldChange.bind(this)}/>
                                    </div>
                                     <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Plate Number*" name="text" type="text" validationError="Enter a valid text"/>
                                    </div>
                                     <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Enter a valid text"/>
                                    </div>
                                    
                                </div>

                            </div>
                            <div className="insurance-details">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Car Profile Name" name="text" type="text"  showValidationError={this.errors['text']}  validationError="Enter a valid text" onChange={this.onFieldChange.bind(this)}/>
                                    </div>
                                     <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Plate Number*" name="text" type="text" validationError="Enter a valid text"/>
                                    </div>
                                     <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Enter a valid text"/>
                                    </div>
                                </div>

                            </div>
                            <div className="car-notes">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                     <div className="col-md-6 remove-left-padding">
                                        <TextInput label="Kms Travelled*" name="text" type="text" validationError="Enter a valid text"/>
                                    </div>
                                </div>
                            </div>
                            <div className="next-button">
                                <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                            </div>
                        </div>}
                </section>
            </div>
        );
    }
}

export default Steps;