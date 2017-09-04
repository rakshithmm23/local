import React, { Component } from 'react';
import { map } from 'lodash';
import CarType from '../common/CarType'

class CardView extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            open: false,
            currentWidth: '',
            parentContainer: null
        };
        this.updateDimensions = this.updateDimensions.bind(this);
        this.windowWidth = this.windowWidth.bind(this);
    }
    windowWidth() {
        let docElemProp = window.document.documentElement.clientWidth,
            body = window.document.body;
        return window.document.compatMode === "CSS1Compat" && docElemProp || body && body.clientWidth || docElemProp;
    }
    componentWillMount() {
        this.updateDimensions();
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);

    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    updateDimensions() {
        const windowWidth = this.windowWidth();
        this.setState({ 'currentWidth': windowWidth });
    }
    render() {
        let jobLeftGridValue = "";
        let jobRightGridValue = "";
        if (this.state.currentWidth <= 1155 && this.state.currentWidth >= 992) {
            jobLeftGridValue = "col-md-7";
            jobRightGridValue = "col-md-5";
        } else if (this.state.currentWidth <= 1345 && this.state.currentWidth >= 1155) {
            jobLeftGridValue = "col-md-6";
            jobRightGridValue = "col-md-6";
        } else {
            jobLeftGridValue = "col-md-5";
            jobRightGridValue = "col-md-7";
        }
        return (

            <div>
                {map(this.props.data, (cardDetails, key) => {
                    return (
                        <div key={key}>
                            {<CarType router={this.props.route} key={key} cardDetails={cardDetails} jobLeftGridValue={jobLeftGridValue} jobRightGridValue={jobRightGridValue} messageRoute={() => { this.props.router.push(cardDetails.route) }} parentRef={this.state.parentContainer} />}
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default CardView;