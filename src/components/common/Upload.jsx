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
        // upload = { ...this.state.imageUploaded, files }
        this.setState({
            imageUploaded: this.state.imageUploaded.concat(files)
        })
    }
    render() {
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
            {imageUploadedView}
                <div className="upload-box-wrapper">
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