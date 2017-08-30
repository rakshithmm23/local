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
import CustomModal from '../common/CustomModal';
import { Modal } from 'react-bootstrap';


class WashSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PrefferedLocation:'Select Location',
            // startDate: moment(),
            heating:false,
            step1Panel: true,
            step2Panel: false,
            catDescriptionModalVisible: false,
            selectedCarCategoryForModel: undefined,
            carWashCategories: {
              1: {
                id: 1,
                name: "Brakes & Exhaust",
                image: '../../images/auto-service-icons-5.png',
                description: "Brakes & Exhaust Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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
                name: "Basic Wash",
                image: '../../images/auto-service-icons-2.png',
                description: "Basic Wash Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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
                name: "Awesome Wash & Detail",
                image: '../../images/auto-service-icons-4.png',
                description: "Awesome Wash & Detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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
                name: "Wash & Shine",
                image: '../../images/auto-service-icons-1.png',
                description: "Wash & Shine Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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
              },
              5: {
                id: 5,
                name: "Totally Awesome & Detail",
                image: '../../images/auto-service-icons-3.png',
                description: "Totally Awesome & Detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  25: {
                    name: 'Subcategory 1',
                    id: 25
                  },
                  26: {
                    name: 'Subcategory 2',
                    id: 26
                  },
                  27: {
                    name: 'Subcategory 3',
                    id: 27
                  },
                  28: {
                    name: 'Subcategory 4',
                    id: 28
                  },
                  29: {
                    name: 'Subcategory 5',
                    id: 29
                  },
                  30: {
                    name: 'Subcategory 6',
                    id: 30
                  }
                }
              },
              6: {
                id: 6,
                name: "Total detail",
                image: '../../images/auto-service-icons-5.png',
                description: "Total detail Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  31: {
                    name: 'Subcategory 1',
                    id: 31
                  },
                  32: {
                    name: 'Subcategory 2',
                    id: 32
                  },
                  33: {
                    name: 'Subcategory 3',
                    id: 33
                  },
                  34: {
                    name: 'Subcategory 4',
                    id: 34
                  },
                  35: {
                    name: 'Subcategory 5',
                    id: 35
                  },
                  36: {
                    name: 'Subcategory 6',
                    id: 36
                  }
                }
              },
              7: {
                id: 7,
                name: "AC Dust Sanitization",
                image: '../../images/auto-service-icons-4.png',
                description: "AC Dust Sanitization Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  37: {
                    name: 'Subcategory 1',
                    id: 37
                  },
                  38: {
                    name: 'Subcategory 2',
                    id: 38
                  },
                  39: {
                    name: 'Subcategory 3',
                    id: 39
                  },
                  40: {
                    name: 'Subcategory 4',
                    id: 40
                  },
                  41: {
                    name: 'Subcategory 5',
                    id: 41
                  },
                  42: {
                    name: 'Subcategory 6',
                    id: 42
                  }
                }
              },
              8: {
                id: 8,
                name: "Monthly Package",
                image: '../../images/auto-service-icons-2.png',
                description: "Monthly Package Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                subCategories: {
                  43: {
                    name: 'Subcategory 1',
                    id: 43
                  },
                  44: {
                    name: 'Subcategory 2',
                    id: 44
                  },
                  45: {
                    name: 'Subcategory 3',
                    id: 45
                  },
                  46: {
                    name: 'Subcategory 4',
                    id: 46
                  },
                  47: {
                    name: 'Subcategory 5',
                    id: 47
                  },
                  48: {
                    name: 'Subcategory 6',
                    id: 48
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
        'filteredCarWashCategories': cloneDeep(this.state.carWashCategories)
      })
    }

    filterCarType(searchTerm) {
      const filterKeyword = searchTerm.toLowerCase();
      if (filterKeyword) {
        const carCategories = cloneDeep(this.state.carWashCategories);
        let filteredCarWashCategories = {};
        each (carCategories, (carDetails) => {
          const carName = carDetails.name.toLowerCase();
          if (carName.indexOf(filterKeyword) > -1 ) {
            filteredCarWashCategories[carDetails.id] = carDetails
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
              filteredCarWashCategories[carDetails.id] = modifiedCarDetails;
            }
          }
        });
        this.setState({
          'filteredCarWashCategories': filteredCarWashCategories
        })
      } else {
        this.setState({
          'filteredCarWashCategories': cloneDeep(this.state.carWashCategories)
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

    hidePanel(panel) {
        if (panel == 'step1') {
            this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false  });
        } else if (panel == 'step2') {
            this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
        }
    }

    showModal(e, categoryDetails){
        e.preventDefault();
        this.setState({
          'selectedCarCategoryForModel': categoryDetails,
          'catDescriptionModalVisible': true
        })
    }

    changeCheckboxState(e, categoryId, subCategoryId) {
      const isChecked = e.target.checked;
      const filteredCarWashCategories = cloneDeep(this.state.filteredCarWashCategories);
      filteredCarWashCategories[categoryId]['subCategories'][subCategoryId]['checked'] = isChecked;
      this.setState({
        filteredCarWashCategories: filteredCarWashCategories,
        carWashCategories: filteredCarWashCategories
      });
    }

    selectedDropdownText(location) {
        this.setState({PrefferedLocation:location});
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
              <div className="select-type">
                <span className="checkbox-style">
                  <input type="checkbox"  checked={this.state.heating} onChange={(e) => { this.payment(e, "heating") }}/>
                </span>
              </div>
          </div>
        </div>
      )
    }
    render() {
        const format = 'h:mm a';
        const now = moment().hour(0).minute(0);
        let leftBlock = [];
        let rightBlock = [];
        let catLength = 0;
        each(this.state.filteredCarWashCategories, (carDetails) => {
          catLength += 1;
          if (catLength % 2 == 0) {
              rightBlock.push(this.renderCarType(carDetails, catLength));
          } else {
              leftBlock.push(this.renderCarType(carDetails, catLength));
          }
        });
        const resultsCount = size(this.state.filteredCarWashCategories);
        return (
            <div className="panel-section car-wash">
                <section className="collapse-panel">
                    <div className="panel-head" onClick={() => { this.hidePanel('step1')}}>
                        <h4>Step 1: Select Car Wash Type</h4>
                        <i className={this.state.step1Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
                    </div>
                    {this.state.step1Panel && <div className="panel-content">
                        <div className="row">
                            <div className="col-md-9 pad0">
                                <div className="search-box">
                                    <TextInput label="Search" name="text" type="text" onChange={this.filterCarType.bind(this)}/>
                                    <i className="mdi mdi-magnify" />
                                </div>
                            </div>
                        </div>
                        {resultsCount > 0 ?
                          <div className="row">
                            <div className="col-md-12 pad0">{leftBlock}</div>
                            <div className="col-md-12 pad0">{rightBlock}</div>
                        </div>
                        : <div className="row"><h4>No result found</h4></div>
                        }
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
                            <div className="col-md-12 pad0">
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
                                    <h4 className="panel-sub-title">Preffered Time & Date</h4>
                                    <div className="row date-time  model-select">
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
                            <div className="col-md-12 pad0">
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
                <CustomModal showModal={this.state.catDescriptionModalVisible} title={this.state.selectedCarCategoryForModel && this.state.selectedCarCategoryForModel.name} closeIcon={true} hideModal={() => {this.setState({'catDescriptionModalVisible': false})}}>
                  <Modal.Body>
                    <p className="info-text">{this.state.selectedCarCategoryForModel && this.state.selectedCarCategoryForModel.description}</p>
                  </Modal.Body>
                </CustomModal>
            </div>
        );
    }
}

export default WashSteps;
