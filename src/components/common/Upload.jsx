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
        debugger
        let className = "upload-box-wrapper "+this.props.responsiveSize;
        const imageUploadedView = map(this.state.imageUploaded, (img,index) => {
            return (
                <div className={className}>
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
            <div className="img-uploads">
                <div className="clearfix"> 
                 {imageUploadedView}
            
                <div className={className}>
                    <label htmlFor="file-input" className="upload-box">
                        <img src="../../images/attach.png" />
                    </label>
                    <input id="file-input" type="file" className="hide" onChange={(e) => this.fileNameUpload(e)} multiple />
                </div>
                </div>
             </div>
        );
    }
}

export default Upload;