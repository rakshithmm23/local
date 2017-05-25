import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { map, each } from 'lodash';


class Steps extends Component {
    constructor() {
        super()
        this.state = {
            activeLogo: null,
            activeModel: null,
            tab1: false,
            tab2: false,
            tab3: true,
            imageUploaded: []

        };
    }
    activeLogo(name) {
        this.setState({ activeLogo: name })
    }
    activeModel(name) {
        this.setState({ activeModel: name })
    }
    tabClose(val) {
        if (val == 'tab1') {
            this.setState({ tab1: true, tab2: false, tab3: false })
        } else if (val == 'tab2') {
            this.setState({ tab1: false, tab2: true, tab3: false })
        } else if (val == 'tab3') {
            this.setState({ tab1: false, tab2: false, tab3: true })
        }
    }
    fileNameUpload(e) {
        let files = [] 
        each(e.target.files, (val) => {
            files.push({ name: val.name, path: URL.createObjectURL(val) })
        });
        // upload = { ...this.state.imageUploaded, files }
        this.setState({
            imageUploaded: this.state.imageUploaded.concat(files)
        })


    }
    cancelImageUpload(val){
        const array = this.state.imageUploaded;
        array.splice(val, 1);
        this.setState({imageUploaded: array });


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

                <div className="col-md-2 image-view" onClick={() => { this.activeLogo(carItem.name) }}>
                    <div className={carItem.name == this.state.activeLogo ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            )
        })
        const carModelView = map(carModel, (carItem) => {
            return (
                <div className="col-md-2 image-view" onClick={() => { this.setState({ activeModel: carItem.name }) }}>
                    <div className={carItem.name == this.state.activeModel ? "img-circle active" : "img-circle"}>
                        <img src={carItem.logo} alt="" />
                    </div>
                    <h6>{carItem.name}</h6>
                </div>
            );
        });
        const imageUploadedView = map(this.state.imageUploaded, (img,index) => {
            return (
                <div className="upload-box-wrapper">
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={()=>{this.cancelImageUpload(index)}}>
                            <i className="mdi mdi-close"></i>
                        </span>
                        <img src={img.path} />
                    </div>
                    <h5>{img.name}</h5>
                </div>
            )
        })

        return (
            <div>
                <section className="s1">
                    <div className="title">
                        <h4>Step 1: Select The Manufacturer</h4>
                        <div className="search-box ">
                            <div className="form-group">
                                <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                            </div>
                            <i className="mdi mdi-magnify"></i>
                        </div>
                        <i className={this.state.tab1 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab1') }}></i>
                    </div>
                    {this.state.tab1 && <div>
                        <div className="img-container">
                            {carListView}
                        </div>
                        <div className="next-button">
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>

                    </div>}
                </section>
                <section className="s2">
                    <div className="title">
                        <h4>Step 2: Select The Modal</h4>
                        <i className={this.state.tab2 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab2') }}></i>
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
                            <Button btnType="submit" btnSize="sm" fontSize={13} label="Next" />
                        </div>
                    </div>}
                </section>
                <section className="s3">
                    <div className="title">
                        <h4>Step 3: Enter Other Details</h4>
                        <i className={this.state.tab3 ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} onClick={() => { this.tabClose('tab3') }}></i>
                    </div>
                    {this.state.tab3 &&
                        <div className="wrapper">
                            <div className="upload-image">
                                <h4>upload images</h4>
                                {imageUploadedView}
                                <Upload uploadChange={(e) => this.fileNameUpload(e)}/>
                            </div>
                            <div className="car-profile">
                                <div className="container-fluid">
                                    <h4>car profile</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="insurance-details">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 remove-left-padding">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="car-notes">
                                <div className="container-fluid">
                                    <h4>insurance details</h4>
                                    <div className="col-md-6 remove-left-padding ">
                                        <div className="form-group">
                                            <input type="text" className="form-control input-values" placeholder="Car Profile Name" />
                                        </div>
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