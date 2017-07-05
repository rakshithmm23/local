import React, { Component } from 'react';
import { map, range } from 'lodash';

class StatusBar extends Component {
    constructor() {
        super();
        this.state = {
            statusPopupPosition: -40000,
            statusPopupArrow: -4000,
            margin: 0,
            activeButton:undefined,
        };
    }

    componentWillMount() {
        let totalWidth = (1075 / (this.props.statusCount - 1)) - 14;
        this.setState({ margin: totalWidth })
    }
    stepClick(e,key) {
        if (e.clientX > 1000) {
            this.setState({ statusPopupPosition: e.clientX - 550, statusPopupArrow: 80 + '%',activeButton:key })
        } else if (e.clientX < 350) {
            this.setState({ statusPopupPosition: e.clientX - 260, statusPopupArrow: 11 + '%',activeButton:key })
        }
        else {
            this.setState({ statusPopupPosition: e.clientX - 360, statusPopupArrow: 35 + '%',activeButton:key })
        }
    }
    render() {
        const style = {
            dotsWidth: {
                marginLeft: this.state.margin
            }, popupPos: {
                left: this.state.statusPopupPosition
            }, popupArrow: {
                left: this.state.statusPopupArrow
            }
        }
        const { statusCount } = this.props
        const stepCount = map(range(statusCount - 1), (stepVal, key) => {
            if (key != 0 && key - 1 != statusCount) {
                return (
                    <span className={this.state.activeButton==key?"dots active":"dots"} style={style.dotsWidth} key={key} onClick={(e) => { this.stepClick(e, key) }} />
                )
            }
        })
        return (
            <div>
                <div className="status-popup " style={style.popupPos}><span className="statusPopup-arrow" style={style.popupArrow}></span>
                    <div className="iconHolder"><span className="statusIcon"></span></div>
                    <div className="statusDescription">
                        <h4>Door Locking Mechanisms and Windows</h4><span>09 Mar 15 11:00 AM</span><span className="status-process">On going</span><a href="" className="view-worklog pull-right">View Worklog</a></div>
                </div>
                <div className="custom-dots ">
                    <div className="main-line" />
                    <div>
                        <span className={this.state.activeButton==0?"dots active":"dots"} onClick={(e) => { this.stepClick(e,0) }} />
                        {stepCount}
                        <span className={this.state.activeButton==-10?"dots active":"dots"} onClick={(e) => { this.stepClick(e,-10) }} />
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;