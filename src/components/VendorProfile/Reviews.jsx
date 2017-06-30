import React, { Component } from 'react';
import { ProgressBar, Media, DropdownButton, MenuItem } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';

export default class Reviews extends Component {
    constructor(...args) {
        super(...args);
        this.toggleSwitchVal = { Open24_7: false, showFavourites: false, authorizedBusinesses: false, dealsOffers: false, byCash: true, byCreditcard: false }
        this.state = {
            dropDownOpen:false,
            filterSort: "high-low",
            sortBydropdown: false,
        };
    }
    componentWillMount() {
        // window.addEventListener('mousedown',this.bodyClick.bind(this))
    }
    // bodyClick(e){
    //     if(e.target.closest('.sortFilter')){

    //     }
    // }
    
    filterOption(val) {
        this.setState({ filterSort: val, sortBydropdown: false });
    }
    render() {
        return (
            <div className="vendor-services">
                <div className="vendor-description">
                    <h4>21 Reviews</h4>
                    <div className="filterSection">
                        <DropdownButton bsSize="small" id="dropdown-size-small" onToggle={(isOpen) => {this.setState({'sortBydropdown': isOpen});}} open={this.state.sortBydropdown} noCaret title={
                            <div className="filterLabel showSortBy" >
                                <label>Sort by</label>
                                <i className="mdi mdi-chevron-down" />
                            </div>
                        }>
                            <div className="sortFilter filterCard">
                                <ul className="list-unstyled">
                                    <li onClick={() => (this.filterOption("high-low"))} className={this.state.filterSort == "high-low" ? "active" : ""}>
                                        <label>
                                            Rating - Highest to Lowest
                                    </label>
                                        <span>
                                            <i className="mdi mdi-check" />
                                        </span>
                                    </li>
                                    <li onClick={() => (this.filterOption("low-high"))} className={this.state.filterSort == "low-high" ? "active" : ""}>
                                        <label>
                                            Rating - Lowest to Highest
                                    </label>
                                        <span>
                                            <i className="mdi mdi-check" />
                                        </span>
                                    </li>
                                    <li onClick={() => (this.filterOption("new-old"))} className={this.state.filterSort == "new-old" ? "active" : ""}>
                                        <label>
                                            Date - Newest to Oldest
                                    </label>
                                        <span>
                                            <i className="mdi mdi-check" />
                                        </span>
                                    </li>
                                    <li onClick={() => (this.filterOption("old-new"))} className={this.state.filterSort == "old-new" ? "active" : ""}>
                                        <label>
                                            Date - Oldest to Newest
                                    </label>
                                        <span>
                                            <i className="mdi mdi-check" />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </DropdownButton>
                    </div>
                    <div className="vendor-review-section">
                        <div className="row">
                            <div className="col-md-12 pad0">
                                <div className="col-md-3 pad0">
                                    <div className="vendor-overall-rating">
                                        <label>4.5</label>
                                        <span>Overall rating <br /> out of 5 </span>
                                    </div>
                                </div>
                                <div className="col-md-9 pad0">
                                    <div className="vendor-customer-ratings">
                                        <ul>
                                            <li>
                                                <label>Excellent</label>
                                                <div className="rating">
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star-outline" />
                                                </div>
                                                <div className="rating-progress">
                                                    <ProgressBar now={60} />
                                                </div>
                                                <span className="ratings-count">5</span>
                                            </li>
                                            <li>
                                                <label>Very Good</label>
                                                <div className="rating">
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star-outline" />
                                                </div>
                                                <div className="rating-progress">
                                                    <ProgressBar now={80} />
                                                </div>
                                                <span className="ratings-count">7</span>
                                            </li>
                                            <li>
                                                <label>Average</label>
                                                <div className="rating">
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                </div>
                                                <div className="rating-progress">
                                                    <ProgressBar now={40} />
                                                </div>
                                                <span className="ratings-count">4</span>
                                            </li>
                                            <li>
                                                <label>Poor</label>
                                                <div className="rating">
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                </div>
                                                <div className="rating-progress">
                                                    <ProgressBar now={30} />
                                                </div>
                                                <span className="ratings-count">3</span>
                                            </li>
                                            <li>
                                                <label>Terrible</label>
                                                <div className="rating">
                                                    <span className="mdi mdi-star" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                    <span className="mdi mdi-star-outline" />
                                                </div>
                                                <div className="rating-progress">
                                                    <ProgressBar now={20} />
                                                </div>
                                                <span className="ratings-count">1</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vendor-comments-section">
                        <div className="vendor-comments-container">
                            <ul>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                                <li>
                                    <Media>
                                        <Media.Left>
                                            <img width={50} height={50} src="../../images/notification1.png" alt="Image" />
                                        </Media.Left>
                                        <Media.Body>
                                            <Media.Heading>Alan Cruz</Media.Heading>
                                            <div className="rating">
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                                <span className="mdi mdi-star-outline" />
                                            </div>
                                            <span className="commented-time">
                                                12 March 2017
                                        </span>
                                        </Media.Body>
                                    </Media>
                                    <p>
                                        Lorem ipsum dolor sit amet, vim aperiam assentior moderatius an, eum facilisi pericula ea. Pro ut abhorreant intellegam, at est tota elitr…
                                </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
