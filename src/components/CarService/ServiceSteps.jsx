import React, { Component } from 'react';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import { each, map, filter, size, cloneDeep } from 'lodash';
import Upload from '../common/Upload';
import Gmaps from '../MyRequest/Gmaps';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TimeInput from 'time-input';
import { DropdownButton, MenuItem,Modal } from 'react-bootstrap';
import ToggleSwitch from '@trendmicro/react-toggle-switch';


class ServiceSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TimePickerFrom: '00:00 AM',
            uploadImgSize: 0,
            uploadImageErrText: false,
            imageUploaded: [],
            policeReport: [],
            rationCard: [],
            drivingLicence: [],
            PreferedLocation: 'Select Location',
            // startDate: moment(),
            step1Panel: true,
            step2Panel: false,
            catDescriptionModalVisible: false,
            selectedCarCategoryForModel: undefined,
            carServiceCategories: {
              1: {
                id: 1,
                name: "Regular Service",
                image: '../../images/auto-service-icons-5.png',
                description: "Regular Service Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  1: {
                    name: 'Test 1',
                    id: 1
                  },
                  2: {
                    name: 'Subcategory 2',
                    id: 2
                  },
                  3: {
                    name: 'abc 3',
                    id: 3
                  },
                  4: {
                    name: 'test 4',
                    id: 4
                  },
                  5: {
                    name: 'Subcategory 5',
                    id: 5
                  },
                  6: {
                    name: 'Subcategory 6',
                    id: 6
                  }
                }
              },
              2: {
                id: 2,
                name: "Fuel Economy Service Type",
                image: '../../images/auto-service-icons-3.png',
                description: "Fuel Economy Service Type Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  7: {
                    name: 'Subcategory 1',
                    id: 7
                  },
                  8: {
                    name: 'Subcategory 2',
                    id: 8
                  },
                  9: {
                    name: 'Subcategory 3',
                    id: 9
                  },
                  10: {
                    name: 'Subcategory 4',
                    id: 10
                  },
                  11: {
                    name: 'Subcategory 5',
                    id: 11
                  },
                  12: {
                    name: 'Subcategory 6',
                    id: 12
                  }
                }
              },
              3: {
                id: 3,
                name: "Full Service",
                image: '../../images/auto-service-icons-4.png',
                description: "Full Service Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  13: {
                    name: 'Subcategory 1',
                    id: 13
                  },
                  14: {
                    name: 'Subcategory 2',
                    id: 14
                  },
                  15: {
                    name: 'Subcategory 3',
                    id: 15
                  },
                  16: {
                    name: 'Subcategory 4',
                    id: 16
                  },
                  17: {
                    name: 'Subcategory 5',
                    id: 17
                  },
                  18: {
                    name: 'Subcategory 6',
                    id: 18
                  }
                }
              },
              4: {
                id: 4,
                name: "Annual Package - Car Care & Dealing",
                image: '../../images/auto-service-icons-1.png',
                description: "Annual Package - Car Care & Dealing Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  19: {
                    name: 'Subcategory 1',
                    id: 19
                  },
                  20: {
                    name: 'Subcategory 2',
                    id: 20
                  },
                  21: {
                    name: 'Subcategory 3',
                    id: 21
                  },
                  22: {
                    name: 'Subcategory 4',
                    id: 22
                  },
                  23: {
                    name: 'Subcategory 5',
                    id: 23
                  },
                  24: {
                    name: 'Subcategory 6',
                    id: 24
                  }
                }
              }
            },
            visibleCategory: undefined
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.setState({
        'filteredCarServiceCategories': cloneDeep(this.state.carServiceCategories)
      })
    }

    filterCarType(searchTerm) {
      const filterKeyword = searchTerm.toLowerCase();
      if (filterKeyword) {
        const carCategories = cloneDeep(this.state.carServiceCategories);
        let filteredCarServiceCategories = {};
        each (carCategories, (carDetails) => {
          const carName = carDetails.name.toLowerCase();
          if (carName.indexOf(filterKeyword) > -1 ) {
            filteredCarServiceCategories[carDetails.id] = carDetails
          } else {
            let modifiedCarDetails = cloneDeep(carDetails);
            let filteredSubCategory = {};
            each (carDetails.subCategories, (subCategory) => {
              const subCategoryName = subCategory.name.toLowerCase();
              if (subCategory.checked) {
                filteredSubCategory[subCategory.id] = subCategory;
              } else if (subCategoryName.indexOf(filterKeyword) > -1) {
                filteredSubCategory[subCategory.id] = subCategory;
              }
            });
            if (size(filteredSubCategory)) {
              modifiedCarDetails['subCategories'] = filteredSubCategory;
              filteredCarServiceCategories[carDetails.id] = modifiedCarDetails;
            }
          }
        });
        this.setState({
          'filteredCarServiceCategories': filteredCarServiceCategories
        })
      } else {
        this.setState({
          'filteredCarServiceCategories': cloneDeep(this.state.carServiceCategories)
        })
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
      const filteredCarServiceCategories = cloneDeep(this.state.filteredCarServiceCategories);
      filteredCarServiceCategories[categoryId]['subCategories'][subCategoryId]['checked'] = isChecked;
      this.setState({
        filteredCarServiceCategories: filteredCarServiceCategories,
        carServiceCategories: filteredCarServiceCategories
      });
    }

    selectedDropdownText(location) {
        this.setState({ PreferedLocation: location });
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
    renderCarType(carDetails, key) {
      const checkedSubCategories = filter(carDetails.subCategories, (data)=>{return (data.checked)});
      return (
        <div className="sub-collapse-panel" key={key}>
          <figure onClick={(e)=>{this.showModal(e, carDetails)}}>
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
                      {carDetails.subCategories.length} {carDetails.subCategories.length == 1 ? "subcategory" : "subcategories"}
                  </span>
              }
              <i className={carDetails.id == this.state.visibleCategory  ? 'mdi mdi-chevron-up' : 'mdi mdi-chevron-down'} />
          </div>
          <div className={carDetails.id == this.state.visibleCategory  ? "sub-collapse-panel-body" : "sub-collapse-panel-body hide"}>
              {map(carDetails.subCategories, (subCategory, index) => {
                  return (<div className="options" key={index}>
                      <span className="checkbox-style">
                          <label className={subCategory.checked?"label active":"label"}><input type="checkbox" checked={subCategory.checked ? subCategory.checked : false} onChange={(e) => { this.changeCheckboxState(e, carDetails.id, subCategory.id) }} value="" />{subCategory.checked} {subCategory.name}</label>
                      </span>
                  </div>);
              })}
          </div>
        </div>
      )
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
        let catLength = 0;
        each(this.state.filteredCarServiceCategories, (carDetails) => {
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
                    <div className="panel-head" onClick={() => { this.hidePanel('step1') }}>
                        <h4>Step 1: Select Car Service Type</h4>
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
                                    <h4 className="panel-sub-title">Job Details</h4>
                                    <div className="model-select">
                                        <input type="text" className="jd-text" placeholder="Enter Text Here" />
                                    </div>
                                </div>

                                <div className="form-section">
                                    <h4 className="panel-sub-title">Prefered Time & Date</h4>
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
                                        <TimeInput value={this.state.TimePickerFrom} onChange={(e)=>this.setState({TimePickerFrom:e})}/>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 right padRight0">
                                <div className="form-section">
                                    <h4 className="panel-sub-title">Prefered location</h4>
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
                                            <p>Sorry, your image format is wrong or image size exceeds the limit of 20mb. Try again with another image</p>
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
