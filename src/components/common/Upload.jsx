import React, { Component } from 'react';
import { map, each } from 'lodash';


class Upload extends Component {
    constructor() {
        super()
        this.state = {
            imageUploaded: []
        };
    }
    cancelImageUpload(val){
        const array = this.state.imageUploaded;
        array.splice(val, 1);
        this.setState({imageUploaded: array });
    }
    fileNameUpload(e) {
        let files = []
        each(e.target.files, (val) => {
            files.push({ name: val.name, path: URL.createObjectURL(val) })
        });
        let upload = this.state.imageUploaded.concat(files)
        this.setState({
          imageUploaded: upload
        });
        this.props.cb(upload);
    }
    render() {
        const imageUploadedView = map(this.state.imageUploaded, (img,index) => {
            return (
                <div className="upload-box-wrapper col-md-2 col-sm-3 col-xs-6" key={index}>
                    <div className="uploaded-image">
                        <span className="cancel-image" onClick={()=>{this.cancelImageUpload(index)}}>
                            <i className="mdi mdi-close"></i>
                        </span>
                        <img src={img.path} />
                    </div>
                    {/*<h5>{img.name}</h5>*/}
                </div>
            )
        })
        return (
            <div className="">
            {imageUploadedView}
                <div className="upload-box-wrapper col-md-2 col-sm-3 col-xs-6">
                    <label htmlFor="file-input" className="upload-box">
                        <img src="../../images/attach.png" />
                    </label>
                    <input id="file-input" type="file" className="hide" onChange={(e) => this.fileNameUpload(e)} multiple />
                </div>
            </div>
        );
    }
}

export default Upload;
