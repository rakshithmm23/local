import React, { Component } from 'react';
import { map, range } from 'lodash';
import { OverlayTrigger, Popover } from 'react-bootstrap';

class StatusBar extends Component {
    constructor() {
        super();
        this.state = {
            statusPopupPosition: -40000,
            statusPopupArrow: -4000,
            margin: 0,
            activeButton: undefined,
        };
    }

    componentDidMount() {
        let divWidth = document.getElementById('custom-dots').offsetWidth
        let totalWidth = (divWidth / (this.props.statusCount - 1)) - 14;
        this.setState({ margin: totalWidth })
    }
    // stepClick(e, key) {
    //     if (e.clientX > 690) {
    //         this.setState({ statusPopupPosition: e.clientX - 650, statusPopupArrow: 84 + '%', activeButton: key })
    //     } else if (e.clientX < 350) {
    //         this.setState({ statusPopupPosition: e.clientX - 317, statusPopupArrow: 6 + '%', activeButton: key })
    //     }
    //     else {
    //         this.setState({ statusPopupPosition: e.clientX - 360, statusPopupArrow: 16 + '%', activeButton: key })
    //     }
    // }
    render() {
        const style = {
            dotsWidth: {
                marginLeft: this.state.margin
            }
        }
        const { statusCount } = this.props;
        const popoverClick = (
            <Popover id="popover-trigger-click" bsClass="status-popup">

                <div className=" " >
                    <div className="iconHolder"><span className="statusIcon"></span></div>
                    <div className="statusDescription">
                        <h4>Door Locking Mechanisms and Windows</h4><span>09 Mar 15 11:00 AM</span><span className="status-process">On going</span><a href="" className="view-worklog pull-right">View Worklog</a></div>
                </div>
            </Popover>
        );
        const stepCount = map(range(statusCount - 1), (stepVal, key) => {
            if (key != 0 && key - 1 != statusCount) {
                return (
                    <OverlayTrigger trigger={['hover']} placement="top" overlay={popoverClick} key={key}>
                        <span className={this.state.activeButton == key ? "dots active" : "dots"} style={style.dotsWidth} key={key}  />
                    </OverlayTrigger>
                )
            }
        })
        return (
            <div className="custom-dots-holder">

                <div className="custom-dots" id="custom-dots">
                    <div className="main-line" />
                    <div>
                        <OverlayTrigger trigger={['hover']} placement="top" overlay={popoverClick} >
                            <span className={this.state.activeButton == 0 ? "dots active" : "dots"}  />
                        </OverlayTrigger>
                        {stepCount}
                        <OverlayTrigger trigger={['hover']} placement="top" overlay={popoverClick} >
                            <span className={this.state.activeButton == -10 ? "dots active" : "dots"} />
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;