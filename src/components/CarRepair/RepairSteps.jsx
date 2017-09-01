import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map, filter, size, cloneDeep } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimePicker from 'rc-time-picker';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import ToggleSwitch from '@trendmicro/react-toggle-switch';
import { Modal } from 'react-bootstrap';
import {findIndex} from 'lodash';


class RepairSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accidentRadioBtn:true,
            generalRadioBtn:false,
            uploadImgSize: 0,
            policeReportImgSize: 0,
            rationCardImgSize: 0,
            drivingLicenceImgSize: 0,
            uploadImage: [],
            policeReport: [],
            rationCard: [],
            drivingLicence: [],
            PrefferedLocation: 'Select Location',
            startDate:"",
            step1Panel: true,
            step2Panel: false,
            catDescriptionModalVisible: false,
            selectedCarCategoryForModel: undefined,
            getCarRepairData: [],
            searchGetCarRepairData: [],
            visibleCategory: undefined,
            uploadImageErrText: false,
            policeReportErrText: false,
            rationCardErrText: false,
            drivingLicenceErrText: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // componentDidMount() {
    //   this.setState({
    //     'filteredCarRepairCategories': cloneDeep(this.state.carRepairCategories)
    //   })
    // }

    componentWillReceiveProps(nextProps){
      this.setState({
        ...this.state,
        getCarRepairData: nextProps.bookServiceReducers && nextProps.bookServiceReducers.getAllServices && nextProps.bookServiceReducers.getAllServices[2].sub_services,
        searchGetCarRepairData: nextProps.bookServiceReducers && nextProps.bookServiceReducers.getAllServices && nextProps.bookServiceReducers.getAllServices[2].sub_services
      });
    }

    filterCarType(searchTerm) {
      const filterKeyword = searchTerm.toLowerCase();
      if (filterKeyword) {
        const carCategories = cloneDeep(this.state.searchGetCarRepairData);
        let filteredCarRepairCategories = {};
        each (carCategories, (carDetails) => {
          const carName = carDetails.name.toLowerCase();
          if (carName.indexOf(filterKeyword) > -1 ) {
            filteredCarRepairCategories[carDetails.id] = carDetails;
          } else {
            let modifiedCarDetails = cloneDeep(carDetails);
            let filteredSubCategory = {};
            each (carDetails.sub_services, (subCategory) => {
              const subCategoryName = subCategory.name.toLowerCase();
              if (subCategory.checked) {
                filteredSubCategory[subCategory.id] = subCategory;
              } else if (subCategoryName.indexOf(filterKeyword) > -1) {
                filteredSubCategory[subCategory.id] = subCategory;
              }
            });
            if (size(filteredSubCategory)) {
              modifiedCarDetails['sub_services'] = filteredSubCategory;
              filteredCarRepairCategories[carDetails.id] = modifiedCarDetails;
            }
          }
        });
        this.setState({
          searchGetCarRepairData: filteredCarRepairCategories
        });
      } else {
        this.setState({
          searchGetCarRepairData: cloneDeep(this.state.getCarRepairData)
        });
      }
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    openCategory(id) {
      this.setState({
        'visibleCategory': id
      })
    }

    showModal(e, categoryDetails){
        e.preventDefault();
        this.setState({
          'selectedCarCategoryForModel': categoryDetails,
          'catDescriptionModalVisible': true
        })
    }

    hidePanel(panel) {
        if (panel == 'step1') {
            this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false });
        } else if (panel == 'step2') {
            this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
        }
    }

    changeCheckboxState(e, categoryId, subCategoryId) {
      const isChecked = e.target.checked;
      const filteredCarRepairCategories = cloneDeep(this.state.searchGetCarRepairData);
      let findCategoryIndex = findIndex(filteredCarRepairCategories,{id:categoryId});
      let findSubCategoryIndex = findIndex(filteredCarRepairCategories[findCategoryIndex]['sub_services'],{id:subCategoryId});
      filteredCarRepairCategories[findCategoryIndex]['sub_services'][findSubCategoryIndex]['checked'] = isChecked;
      this.setState({
        searchGetCarRepairData: filteredCarRepairCategories,
        getCarRepairData: filteredCarRepairCategories
      });
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
                    uploadImage: this.state.uploadImage.concat(files),
                    uploadImgSize: fileImgSize + this.state.uploadImgSize,
                });
            }

        }
        else if (img == 'policeReport') {
            let errFileType = false;
            this.setState({ policeReportErrText: false });
            each(e.target.files, (val) => {
                files.push({ name: val.name, path: URL.createObjectURL(val), size: val.size });
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
                files.push({ name: val.name, path: URL.createObjectURL(val), size: val.size })
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
                files.push({ name: val.name, path: URL.createObjectURL(val), size: val.size })
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
        let deleteFileSize = 0;
        if (val == 'uploadImage') {
            if (this.state.uploadImgSize >= 20000000) {
                this.setState({ uploadImageErrText: true });
            } else {
                this.setState({ uploadImageErrText: false });
            }
            const array = this.state.uploadImage;
            array.splice(index, 1);
            deleteFileSize = this.state.uploadImgSize - this.state.uploadImage[index].size;
            this.setState({ uploadImage: array, uploadImgSize: deleteFileSize });
        } else if (val == 'policeReport') {
            if (this.state.rationCard >= 20000000) {
                this.setState({ policeReport: array });
                this.setState({ policeReportErrText: true });
            } else {
                this.setState({ policeReportErrText: false });
            }
            const array = this.state.policeReport;
            array.splice(index, 1);
            deleteFileSize = this.state.policeReportSize - this.state.policeReport[index].size;
            this.setState({ uploadImage: array, policeReportSize: deleteFileSize });
        } else if (val == 'rationCard') {
            if (this.state.rationCard >= 20000000) {
                this.setState({ rationCard: array });
                this.setState({ rationCardErrText: true });
            } else {
                this.setState({ rationCardErrText: false });
            }
            const array = this.state.rationCard;
            array.splice(index, 1);
            deleteFileSize = this.state.rationCardSize - this.state.rationCard[index].size;
            this.setState({ uploadImage: array, rationCardSize: deleteFileSize });
        } else if (val == 'drivingLicence') {
            if (this.state.drivingLicence >= 20000000) {
                this.setState({ drivingLicence: array });
                this.setState({ drivingLicenceErrText: true });
            } else {
                this.setState({ drivingLicenceErrText: false });
            }
            const array = this.state.drivingLicence;
            array.splice(index, 1);
            deleteFileSize = this.state.drivingLicenceSize - this.state.drivingLicence[index].size;
            this.setState({ uploadImage: array, drivingLicenceSize: deleteFileSize });
        }
    }

    renderCarType(carDetails, key) {
      const checkedSubCategories = filter(carDetails.sub_services, (data)=>{return (data.checked);});
      return (
        <div className="sub-collapse-panel" key={key}>
          <figure onClick={(e)=>{this.showModal(e, carDetails);}}>
            <img src={carDetails.image} alt="" />
          </figure>
          <div className={carDetails.id == this.state.visibleCategory ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} onClick={(event) => { event.preventDefault(); this.openCategory(carDetails.id); }}>
              <h4>{carDetails.name}</h4>
              {checkedSubCategories && checkedSubCategories.length > 0 ?
                  <span className="sub-category-count">
                      {checkedSubCategories.length}{checkedSubCategories.length == 1 ? " Category Selected" : " Categories Selected"}
                  </span>
                    :
                  <span className="sub-category-count">
                      {carDetails.sub_services.length} {carDetails.sub_services.length == 1 ? "subcategory" : "subcategories"}
                  </span>
              }
              <i className={carDetails.id == this.state.visibleCategory  ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
          </div>
          <div className={carDetails.id == this.state.visibleCategory  ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
            {map(carDetails.sub_services, (subCategory, index) => {
              return (<div className="options" key={index}>
                <span className="checkbox-style">
                  <label className={subCategory.checked?"label active":"label"}><input type="checkbox" checked={subCategory.checked ? subCategory.checked : false} onChange={(e) => { this.changeCheckboxState(e, carDetails.id, subCategory.id); }} value="" />{subCategory.checked} {subCategory.name}</label>
                </span>
              </div>);
            })}
          </div>
        </div>
      );
    }

    render() {
        console.log(this.state.searchGetCarRepairData);
        const uploadImage = map(this.state.uploadImage, (img, index) => {
          return (
              <div className='upload-box-wrapper box-shadow' index={index}>
                  <div className="uploaded-image">
                      <span className="cancel-image" onClick={() => { this.cancelUploadImage("uploadImage", index) }}>
                          <i className="mdi mdi-close" />
                      </span>
                      <img src={img.path} />
                  </div>
                  {/*<h5>{img.name}</h5>*/}
              </div>
          );
        });
        const policeReportView = map(this.state.policeReport, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow' index={index}>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('policeReport', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            );
        });
        const rationCardView = map(this.state.rationCard, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow' index={index}>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('rationCard', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            );
        });
        const drivingLicenceView = map(this.state.drivingLicence, (img, index) => {
            return (
                <div className='upload-box-wrapper box-shadow' index={index}>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={() => { this.cancelUploadImage('drivingLicence', index) }}>
                            <i className="mdi mdi-close" />
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            );
        });
        const format = 'h:mm a';
        let leftBlock = [];
        let rightBlock = [];
        let catLength = 0;
        each(this.state.searchGetCarRepairData, (carDetails) => {
          catLength += 1;
          if (catLength % 2 == 0) {
              rightBlock.push(this.renderCarType(carDetails, catLength));
          } else {
              leftBlock.push(this.renderCarType(carDetails, catLength));
          }
        });
        return (
            <div className="panel-section car-wash">
                <section className="collapse-panel">
                  <div className="panel-head" onClick={() => { this.hidePanel('step1'); }}>
                      <h4>Step 1: Select Car Repair Type</h4>
                      <i className={this.state.step1Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                  </div>
                  {this.state.step1Panel && <div className="panel-content">
                    <div className="row">
                      <div className="col-md-6 pad0">
                        <div className="search-box">
                          <TextInput label="Search" name="text" type="text" onChange={this.filterCarType.bind(this)}/>
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
                                            <option value="select">Select Car Brand</option>
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
                                                <input type="radio" name="radio" checked={this.state.accidentRadioBtn} onChange={()=>this.setState({accidentRadioBtn:true,generalRadioBtn:false})}/>
                                                <i className="mf-radio-button" /><span>Accident</span>
                                            </label>
                                        </div>
                                        <div className="radio-style">
                                            <label>
                                                <input type="radio" name="radio" checked={this.state.generalRadioBtn} onChange={()=>this.setState({accidentRadioBtn:false,generalRadioBtn:true})}/>
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
                                <div className="form-section">
                                    <h4 className="panel-sub-title">Preffered location</h4>
                                    <div className="model-select">
                                        <select className="car-selection ">
                                            <option value="select">Select Location</option>
                                            <option value="marathalli">Marathalli</option>
                                            <option value="mgroad">Mg Road</option>
                                            <option value="rajajinagar">Rajajinagar</option>
                                            <option value="mysoreroad">Mysore Road</option>
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
                                        <p>Sorry, your image format is wrong or image size exceeds the limit of 20mb. Try again with another image</p>
                                        <i className="mdi mdi-close" onClick={() => this.setState({ uploadImageErrText: false })} />
                                    </span>
                                </div>

                                {this.state.accidentRadioBtn && <div className="clearfix">
                                    <div className="form-section uploads">
                                        <div className="row">
                                            <h4 className="panel-sub-title">police report</h4>
                                            <div className="model-select upload">
                                                <Upload id="policeReport" fileUpload={(e) => { this.uploadImage(e, 'policeReport') }} />
                                                {policeReportView}
                                            </div>
                                        </div>
                                        <span className={this.state.policeReportErrText ? "image-upload-error" : "image-upload-error hide"}>
                                            <p>Sorry, your image format is wrong or image size exceeds the limit of 20mb. Try again with another image</p>
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
                                          <p>Sorry, your image format is wrong or image size exceeds the limit of 20mb. Try again with another image</p>
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
                                            <p>Sorry, your image format is wrong or image size exceeds the limit of 20mb. Try again with another image</p>
                                            <i className="mdi mdi-close" onClick={() => this.setState({ drivingLicenceErrText: false })} />
                                        </span>
                                    </div>
                                </div>}

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
