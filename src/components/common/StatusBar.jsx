import React, { Component } from 'react';
import { map, range, merge } from 'lodash';

class StatusBar extends Component {
    constructor() {
        super();
        this.state = {
            statusPopupPosition: -40000,
            statusPopupArrow: undefined,
            margin: 0,
            activeButton: undefined,
        };
    }

    componentDidMount() {
        let divWidth = document.getElementById('custom-dots').offsetWidth;
        let totalWidth = (divWidth / (this.props.statusCount - 1)) - 14;
        this.setState({ margin: totalWidth })
    }
    stepClick(e, key) {
        const totalTimelienWidth = document.getElementById('custom-dots').offsetWidth;
        let clickPosition = this.state.margin * key
        if (key == -10) {
            this.setState({ statusPopupPosition: totalTimelienWidth * .6, statusPopupArrow: totalTimelienWidth-23 });
        } else if (clickPosition > totalTimelienWidth * .6  ){
            this.setState({ statusPopupPosition: totalTimelienWidth * .6, statusPopupArrow: e.target.offsetLeft - 16  });
        } else {
            this.setState({ statusPopupPosition: this.state.margin * key, statusPopupArrow: e.target.offsetLeft - 16 });

        }
        // if (e.clientX > 690) {
        // this.setState({ statusPopupPosition: e.clientX - 650, statusPopupArrow: 84 + '%',activeButton:key })
        // } else if (e.clientX < 350) {
        //     this.setState({ statusPopupPosition: e.clientX - 317, statusPopupArrow: 6 + '%',activeButton:key })
        // }
        // else {
        //     this.setState({ statusPopupPosition: e.clientX - 360, statusPopupArrow: 16 + '%',activeButton:key })
        // }
    }
    render() {
        const style = {
            dotsWidth: {
                marginLeft: this.state.margin
            }, popupPos: {
                left: this.state.statusPopupPosition
            }, popupArrow: {
                left: this.state.statusPopupArrow
            }, arrowDown: {
                width: 0,
                height: 0,
                borderLeft: '10px solid transparent',
                borderRight: '10px solid transparent',
                borderTop: '10px solid #e0e0e0',
                position: 'absolute',
                top: '93px',
            }, arrPos: this.state.statusPopupArrow < 0 ? { right: 0,left: 28 } : { left: this.state.statusPopupArrow + 40 }
        }
        const { statusCount } = this.props
        const stepCount = map(range(statusCount - 1), (stepVal, key) => {
            if (key != 0 && key - 1 != statusCount) {
                return (
                    <span className={this.state.activeButton == key ? "dots active" : "dots"} style={style.dotsWidth} key={key} onMouseOver={(e) => { this.stepClick(e, key) }} onMouseLeave={()=>this.setState({statusPopupPosition:-40000,statusPopupArrow:null})}/>
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
                <div className={this.state.statusPopupArrow?"arrow-down":"arrow-down hide"} style={merge({}, style.arrowDown, style.arrPos)}></div>
                <div className="custom-dots" id="custom-dots">
                    <div className="main-line" />
                    <div>
                        <span className={this.state.activeButton == 0 ? "dots active" : "dots"} onMouseOver={(e) => { this.stepClick(e, 0) }} onMouseLeave={()=>this.setState({statusPopupPosition:-40000,statusPopupArrow:null})}/>
                        {stepCount}
                        <span className={this.state.activeButton == -10 ? "dots active" : "dots"} onMouseOver={(e) => { this.stepClick(e, -10) }} onMouseLeave={()=>this.setState({statusPopupPosition:-40000,statusPopupArrow:null})}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatusBar;