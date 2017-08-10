import React, { Component } from 'react';
import Button from '../common/Button';
import Upload from '../common/Upload';
import { filter, map, each, concat } from 'lodash';
import TextInput from '../common/TextInput';
// import { Scrollbars } from 'react-custom-scrollbars';



class ProfileSteps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadImgSize: 0,
      uploadImageErrText: false,
      imageUploaded: [],
      activeLogo: null,
      activeModel: null,
      manufacturerTabVisible: true,
      modelTabVisible: false,
      otherDetailsTabVisible: false,
      modelTabIsUnlocked: false,
      otherDetailsTabIsUnlocked: false,
      submissionError: false,
      selectError: false,
      carList: [],
      carModel: [],
      isLoading: true
    };
    this.initialFormData = {
      'make': '',
      'model': '',
      'name': '',
      'year': '',
      'plate_no': '',
      'mileage': '',
      'insuranceprovider': '',
      'insurancepolicynumber': '',
      'registrationnumber': '',
      'state': '',
      'carnotes': '',
      'photos': []
    };
    this.formData = {
      ...this.initialFormData
    };
    this.errors = {};

    this.resetFields = Object.assign({}, this.state)
    this.onFieldChange = this.onFieldChange.bind(this);
    this.filterCarModelList = this.filterCarModelList.bind(this);
    this.filterCarModelListByYear = this.filterCarModelListByYear.bind(this);
  }

  onSubmit() {
    this.props.onSubmit(this.formData, this.props.isEditProfile);
  }

  onFieldChange(value, key, name) {
    if (value) {
      this.formData[name] = value;
      this.errors[name] = false;
    }
    if (name === 'year') {
      if (!value) {
        this.errors[name] = true;
        this.setState({ 'selectError': true });
      } else {
        if (this.formData['model'] && !this.props.isEditProfile) {
          this.setState({
            'selectError': false,
            'manufacturerTabVisible': false,
            'modelTabVisible': false,
            'otherDetailsTabVisible': true
          });
        } else {
          this.setState({ 'selectError': false });
        }
      }
    }
  }
  activeLogo(name) {
    this.setState({ activeLogo: name, modelTabIsUnlocked: true });
    this.formData['make'] = name;
  }
  activeModel(name) {
    this.setState({ activeModel: name, otherDetailsTabIsUnlocked: true });
    this.formData['model'] = name;
  }
  tabOpen(val) {
    if (val == 'manufacturerTabVisible') {
      this.setState({ manufacturerTabVisible: true, modelTabVisible: false, otherDetailsTabVisible: false });
    } else if (val == 'modelTabVisible') {
      if (this.formData.make) {
        this.setState({ manufacturerTabVisible: false, modelTabVisible: true, otherDetailsTabVisible: false });
      }
    } else if (val == 'otherDetailsTabVisible') {
      if (!this.formData.year) {
        this.errors['year'] = true;
      } else {
        if (this.formData.year && this.formData.model) {
          this.setState({ manufacturerTabVisible: false, modelTabVisible: false, otherDetailsTabVisible: true });
        }
      }
    }
  }
  fileNameUpload(e) {
    let files = [], fileBlob = [], fileImgSize = 0, errFileType = false;
    this.setState({ uploadImageErrText: false });
    each(e.target.files, (val) => {
      files.push({ name: val.name, path: URL.createObjectURL(val), size: val.size });
      fileBlob.push(val);
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
      this.formData['photos'] = this.state.imageUploaded.concat(fileBlob);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.carProfileReducer && nextProps.carProfileReducer.carMakeAndModels) {
      this.setState({ carList: nextProps.carProfileReducer.carMakeAndModels, isLoading:false });
    }
    const { carProfileReducer } = nextProps;
    if (carProfileReducer.currentComponentKey === '/car-profiles/create') {
      this.formData = { ...this.initialFormData };
      this.state = { ...this.resetFields };
    }
    if (nextProps.isEditProfile && nextProps.profileData) {
      if (nextProps.profileData.images && nextProps.profileData.images.length && !this.formData.photos.length) {
        this.formData.photos = nextProps.profileData.images;
        this.setState({
          'activeLogo': nextProps.profileData.make,
          'activeModel': nextProps.profileData.model,
          'imageUploaded': this.formData.photos
        });
      } else {
        this.setState({
          'activeLogo': nextProps.profileData.make,
          'activeModel': nextProps.profileData.model
        });
      }
      each(nextProps.profileData, (val, key) => {
        if (key == 'plateNo' && val) {
          this.formData['plate_no'] = val;
        } else {
          this.formData[key] = val;
        }
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
    this.formData['photos'] = array;
  }
  filterCarModelList(e) {
    const inputValue = e ? e.toLowerCase() : '';
    if (inputValue) {
      const carList = filter(this.state.carList, (car) => {
        const carName = car.name.toLowerCase();
        return (carName.indexOf(inputValue) > -1);
      });
      this.setState({ 'filteredCarList': carList });
    } else {
      this.setState({ 'filteredCarList': this.state.carList });
    }
  }
  filterCarModelListByYear(year) {
    if (year) {
      const carModelList = filter(this.state.carModel, (car) => {
        const carYear = car.year;
        return carYear == year;
      });
      this.setState({ 'filteredCarModelList': carModelList });
    } else {
      this.setState({ 'filteredCarModelList': this.state.carModel });
    }
  }

  render() {
    const imageUploadedView = map(this.state.imageUploaded, (img, index) => {
      return (
        <div className="upload-box-wrapper box-shadow" key={index}>
          <span className="cancel-image" onClick={() => { this.cancelImageUpload(index); }}>
            <i className="mdi mdi-close" />
          </span>
          <img src={img.original ? img.original : img.path} />
        </div>
      );
    });
    const carList = this.state.filteredCarList ? this.state.filteredCarList : this.state.carList;
    const carListView = map(carList, (carItem, key) => {
      return (
        <div className="col-md-2 col-sm-3 col-xs-6 image-view" onClick={() => {
          this.setState({ carModel: carItem.carmodel, filteredCarModelList: carItem.carmodel });
          this.formData['year'] = 1;
          this.activeLogo(carItem.name);
          this.tabOpen('modelTabVisible');
        }} key={key}>
          <div className={carItem.name == this.state.activeLogo ? "img-circle active" : "img-circle"}>
            <img src={carItem.photos} alt="" />
          </div>
          <h6>{carItem.name}</h6>
        </div>
      );
    });

    let years = [];
    map(this.state.carModel, (carItem) => {
      years.push(carItem.year);
    });

    const carModelList = this.state.filteredCarModelList ? this.state.filteredCarModelList : this.state.carModel;
    const carModelView = map(carModelList, (carItem, key) => {
      return (
        <div className="col-md-2 col-sm-3 col-xs-6 image-view"
          onClick={() => { this.activeModel(carItem.name); this.tabOpen('otherDetailsTabVisible'); }} key={key}>
          <div className={carItem.name == this.state.activeModel ? "img-circle active" : "img-circle"} >
            <img src={carItem.photos} alt="" />
          </div>
          <h6>{carItem.name}</h6>
        </div>
      );
    });

    return (
      <div className="panel-section">
        <section className="collapse-panel">
          <div className="panel-head" onClick={() => { this.tabOpen('manufacturerTabVisible') }}>
            <h4>Step 1: Select The Manufacturer</h4>
            <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
          </div>
          {this.state.manufacturerTabVisible &&
            <div className="panel-content">
              <div className="row">
                <div className="col-md-6 pad0">
                  <div className="search-box">
                    <TextInput label="Search" name="text" type="text" onChange={this.filterCarModelList} />
                    <i className="mdi mdi-magnify" />
                  </div>
                </div>
              </div>
              { !this.state.isLoading ?
              <div className="img-container row">
                {carListView}
              </div> :
              <div className="img-container row">
                <div className="loader">
                  <img src="../../images/preloader.gif" alt="" />
                </div>
              </div>}
            </div>}
        </section>
        <section className="collapse-panel selectModal">
          <div className="panel-head" onClick={() => { this.tabOpen('modelTabVisible'); }}>
            <h4>Step 2: Select The model</h4>
            <i className={this.state.manufacturerTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
          </div>
          {this.state.modelTabVisible &&
            <div className="panel-content">
              <div className="row">
                <div className="col-md-6 padLeft0">
                  <div className="model-select">
                    <select className="car-selection " value={this.formData && this.formData.year ? this.formData.year : 1} placeholder="Select Launch Year" onChange={(e) => { this.onFieldChange(e.target.value, '', e.target.name); this.filterCarModelListByYear(e.target.value); }} name="year">
                      <option value='1' disabled>Select Launch Year</option>
                      {map(years, (year, key) => {
                        return (
                          <option key={year} value={year}>{year}</option>
                        );
                      })}
                    </select>
                    <i className="mdi mdi-chevron-down" />
                  </div>
                  {this.errors && this.errors['year'] && <span className="error-text"> Please Select Year </span>}
                </div>
              </div>
              <div className="row">
                <div className="img-container">
                  {carModelView}
                </div>
              </div>
            </div>}
        </section>
        <section className="collapse-panel">
          <div className="panel-head" onClick={() => { this.tabOpen('otherDetailsTabVisible'); }}>
            <h4>Step 3: Enter Other Details</h4>
            <i className={this.state.otherDetailsTabVisible ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} />
          </div>
          {this.state.otherDetailsTabVisible &&
            <div className="panel-content">
              <div className="wrapper">
                <div className="row upload-image car-repair">
                  <h4 className="panel-sub-title">Upload images</h4>
                  <div className="img-uploads">
                    <Upload id="carProfileUpload" fileUpload={(e) => this.fileNameUpload(e)} />
                    {imageUploadedView}
                  </div>
                  <span className={this.state.uploadImageErrText ? "image-upload-error padLeft15" : "image-upload-error padLeft15 hide"}>
                    <p>Sorry, your image exceeds the file size limit of 20mb.
                                            Try again with another image.</p>
                    <i className="mdi mdi-close" onClick={() => this.setState({ uploadImageErrText: false })} />
                  </span>
                </div>
                <div className="row car-profile">
                  <h4 className="panel-sub-title">car profile</h4>
                  <div className="col-md-6 padLeft0">
                    <TextInput showValidationError={this.errors['name']} label="Car Profile Name*" name="name" type="text" value={this.formData.name} showValidationError={this.errors['name']} validationError="Profile Name cannot be empty" onChange={this.onFieldChange.bind(this)} />
                  </div>
                  <div className="col-md-6 padRight0">
                    <TextInput label="Plate Number*" name="plate_no" type="text" validationError="Plate Number cannot be empty" value={this.formData.plate_no}
                      onChange={this.onFieldChange.bind(this)} />
                  </div>
                  <div className="col-md-6 padLeft0">
                    <TextInput label="Kms Travelled*" name="mileage" type="text" validationError="Kms Travelled cannot be empty" value={this.formData.mileage}
                      onChange={this.onFieldChange.bind(this)} />
                  </div>
                </div>
                <div className="row insurance-details">
                  <h4 className="panel-sub-title">Insurance Details (Optional)</h4>
                  <div className="col-md-6 padLeft0">
                    <TextInput label="Insurance Provider" name="insuranceprovider" type="text" value={this.formData.insuranceprovider}
                      onChange={this.onFieldChange.bind(this)} />
                  </div>
                  <div className="col-md-6 padRight0">
                    <TextInput label="Insurance Policy Number" name="insurancepolicynumber" type="text" onChange={this.onFieldChange.bind(this)} value={this.formData.insurancepolicynumber} />
                  </div>
                  <div className="col-md-6 padLeft0">
                    <TextInput label="Vehicle Reg. Number" name="registrationnumber" type="text" onChange={this.onFieldChange.bind(this)} value={this.formData.registrationnumber}/>
                  </div>
                  <div className="col-md-6 padRight0">
                    <TextInput label="State" name="state" type="text" onChange={this.onFieldChange.bind(this)} value={this.formData.state} />
                  </div>
                </div>
                <div className="row car-notes">
                  <h4 className="panel-sub-title">Car Notes (Optional)</h4>
                  <div className="col-md-6 padLeft0">
                    <TextInput label="Additional Details About The Car (Optional)" name="carnotes" type="text" validationError="Enter a valid text" onChange={this.onFieldChange.bind(this)} value={this.formData.carnotes} />
                  </div>
                </div>
                <div className="next-button">
                  <Button btnType="submit" btnSize="sm" fontSize={14} label="Save" btnCallBack={() => this.onSubmit()} />
                </div>
              </div>
            </div>}
        </section>
      </div>
    );
  }
}

export default ProfileSteps;
