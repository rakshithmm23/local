import React, { Component } from 'react';

class JobDetails extends Component {
    render() {
        
        return (
            <div>
                <div className="data-time col-md-12">
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Requested On:</title>
                            <span>Jan 2, 2017</span>
                        </div>
                    </div>
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Job Start Time:</title>
                            <span>11:30 AM on Jan 5 2017</span>
                        </div>
                    </div>
                    <div className="col-md-4 margin-correction">
                        <div className="wrapper">
                            <title className="title">Preffered Location:</title>
                            <span>11:30 AM on Jan 5 2017</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 repair-detail">
                    <div className="col-md-6 repair-category">
                        <title>Car Repair Categories:</title>
                        <div className="category-list">
                            <div>
                                <figure className="interior-clean"></figure>
                                <figcaption>Interior Clean (3 Selected)</figcaption>
                            </div>
                            <div>
                                <figure className="wash"></figure>
                                <figcaption>Interior Clean (3 Selected)</figcaption>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 more-details">
                        <title>More Details:</title>
                        <figcaption>In hac habitasse platea dictumst.
                        Vivamus adipiscing fermentum quam volutpat aliquam.
                        Integer et elit eget elit facilisis tristique.
                        Nam vel iaculis mauris.
                        Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
                        Brakes & Exhaust</figcaption>
                    </div>
                </div>
                <div className="col-md-12 uploads">
                    <title>Uploads:</title>
                    <div className="col-md-6 images">
                         <div className="figure no-top-padding">
                             <caption>Car Images:</caption>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>
                    <div className="col-md-6 images">
                         <div className="figure no-top-padding">
                             <caption>Police Report:</caption>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>
                    <div className="col-md-6 images ">
                         <div className="figure no-border" >
                             <caption>Driving Licence:</caption>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>
                    <div className="col-md-6 images ">
                         <div className="figure no-border">
                             <caption>Registration Card:</caption>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                             <div className="upload-images"><img src="../../images/test.jpg" alt=""/></div>
                         </div>
                    </div>
                   
                </div>
            </div>
        );
    }
}

export default JobDetails;