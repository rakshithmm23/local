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
import {findIndex} from 'lodash';


class WashSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PrefferedLocation: 'Select Location',
      // startDate: moment(),
      heating: false,
      step1Panel: true,
      step2Panel: false,
      catDescriptionModalVisible: false,
      selectedCarCategoryForModel: undefined,
      getCarWashData: [],
      searchGetCarWashData: [],
      visibleCategory: undefined
    };
    this.handleChange = this.handleChange.bind(this);
  }


  componentWillReceiveProps(nextProps){
    this.setState({
      ...this.state,
      getCarWashData: nextProps.bookServiceReducers && nextProps.bookServiceReducers.getAllServices && nextProps.bookServiceReducers.getAllServices[0].sub_services,
      searchGetCarWashData: nextProps.bookServiceReducers && nextProps.bookServiceReducers.getAllServices && nextProps.bookServiceReducers.getAllServices[0].sub_services
    });
  }

//******* Search Categories **********************************************************************************************************************************/
  filterCarType(searchTerm) {
    const filterKeyword = searchTerm.toLowerCase();
    if (filterKeyword) {
      const carCategories = cloneDeep(this.state.getCarWashData);
      let filteredCarWashCategories = [];
      each(carCategories, (carDetails) => {
        const carName = carDetails.name.toLowerCase();
        if (carName.indexOf(filterKeyword) > -1) {
          filteredCarWashCategories.push(carDetails);
        }
      });
      this.setState({
        ...this.state,
        searchGetCarWashData: filteredCarWashCategories,
      });
    } else {
      this.setState({
        ...this.state,
        searchGetCarWashData: cloneDeep(this.state.getCarWashData)
      });
    }
  }
//********************************************************************************************************************************************************** */

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
      this.setState({ step1Panel: !this.state.step1Panel, step2Panel: false });
    } else if (panel == 'step2') {
      this.setState({ step1Panel: false, step2Panel: !this.state.step2Panel });
    }
  }

  showModal(e, categoryDetails) {
    e.preventDefault();
    this.setState({
      'selectedCarCategoryForModel': categoryDetails,
      'catDescriptionModalVisible': true
    });
  }

  changeCheckboxState(e, categoryId) {
    const isChecked = e.target.checked;
    const filteredCarWashCategories = cloneDeep(this.state.searchGetCarWashData);
console.log(this.state.searchGetCarWashData);
    let findCategoryIndex = findIndex(filteredCarWashCategories,{id:categoryId});
    filteredCarWashCategories[findCategoryIndex]['checked'] = isChecked;
    this.setState({
      ...this.state,
      searchGetCarRepairData: filteredCarWashCategories,
      getCarRepairData: filteredCarWashCategories
    });
  }

  selectedDropdownText(location) {
    this.setState({ PrefferedLocation: location });
  }




  render() {
console.log(this.state.searchGetCarRepairData);
//*******  TO GET WASH SUB-CATEGORIES *********************************************************************** */
    const getCarWashData = this.state.searchGetCarWashData && this.state.searchGetCarWashData.length && this.state.searchGetCarWashData.map((carDetails,key)=>{
      if(carDetails){
        return(
          <div className="sub-collapse-panel" key={key}>
            <figure onClick={(e) => { this.showModal(e, carDetails); }}>
              <img src={carDetails.image} alt="" />
            </figure>
            <div className={carDetails.id == this.state.visibleCategory ? "sub-collapse-panel-head active" : "sub-collapse-panel-head "} >
              <h4>{carDetails.name}</h4>
              <div className="select-type">
                <span className="checkbox-style">
                  {/* <input type="checkbox" checked={this.state.heating} onChange={(e) => { this.payment(e, "heating"); }} /> */}
                  <input type="checkbox"  onChange={(e) => { this.changeCheckboxState(e, carDetails.id); }} value="" />
                </span>
              </div>
            </div>
          </div>
        );
      }
    });
  //*********************************************************************************************************** */

    const format = 'h:mm a';
    //const now = moment().hour(0).minute(0);

    return (
      <div className="panel-section car-wash">
        <section className="collapse-panel">
          <div className="panel-head" onClick={() => { this.hidePanel('step1') }}>
            <h4>Step 1: Select Car Wash Type</h4>
            <i className={this.state.step1Panel ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
          </div>
          {this.state.step1Panel && <div className="panel-content">
            <div className="row">
              <div className="col-md-9 pad0">
                <div className="search-box">
                  <TextInput label="Search" name="text" type="text" onChange={this.filterCarType.bind(this)} />
                  <i className="mdi mdi-magnify" />
                </div>
              </div>
            </div>
            {this.state.searchGetCarWashData.length > 0 ?
              <div className="row">
                <div className="col-md-12 pad0">{getCarWashData}</div>
              </div>
              : <div className="row"><h4>No result found</h4></div>
            }
            <div className="next-button">
              <Button btnType="submit" btnSize="sm" fontSize={14} label="Next" btnCallBack={() => { this.hidePanel('step2'); }} />
            </div>
          </div>}
        </section>
        <section className="collapse-panel">
          <div className="panel-head" onClick={() => { this.hidePanel('step2'); }}>
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
        <CustomModal showModal={this.state.catDescriptionModalVisible} title={this.state.selectedCarCategoryForModel && this.state.selectedCarCategoryForModel.name} closeIcon={true} hideModal={() => { this.setState({ 'catDescriptionModalVisible': false }) }}>
          <Modal.Body>
            <p className="info-text">{this.state.selectedCarCategoryForModel && this.state.selectedCarCategoryForModel.description}</p>
          </Modal.Body>
        </CustomModal>
      </div>
    );
  }
}

export default WashSteps;
