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
    componentWillMount() {
        document.body.addEventListener('mousedown', this.bodyClick.bind(this));
    }
    componentWillUnmount() {
        document.body.removeEventListener('mousedown', this.bodyClick.bind(this));
    }
    bodyClick(e){
        if(e.target.className== "dots"||e.target.closest('.status-popup')){
            return;
        }else{
            this.setState({activeButton: undefined})
        }
    }

    componentDidMount() {
        let divWidth = document.getElementById('custom-dots').offsetWidth
        let totalWidth = (divWidth / (this.props.statusCount - 1)) - 14;
        this.setState({ margin: totalWidth })
        // let inSecWidth=document.getElementsByClassName('inSection dash-jobupdate-bg')[0]
        // let jobHolderWidth=document.getElementsByClassName('jobUpdate-holder')[0]
        // let widthDiff = inSecWidth.clientWidth - jobHolderWidth.clientWidth;
        
        // debugger
        // console.log(widthDiff)

    }
    stepClick(e, key, parent) {
            // const screenSize = document.body.clientWidth;
            // const compSize = parent.clientWidth;
            // const reminder = screenSize - compSize;
            // const reminderWOLeftBar = reminder - 110;
            // const singleRe = reminder / 2;
            // const leftOffset = singleRe + 110;
            
            
            this.setState({ activeButton: key })
    }
    render() {
        const style = {
            dotsWidth: {
                marginLeft: this.state.margin
            }
        }
        const { statusCount } = this.props;
        const popoverClick = (
            <Popover id="popover-trigger-click-root-close" bsClass="status-popup">
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
                    <OverlayTrigger rootClose trigger={['click']} placement="top" overlay={popoverClick} key={key}>
                        <span className={this.state.activeButton == key ? "dots active" : "dots"} style={style.dotsWidth} key={key} onClick={(e)=>{this.stepClick(e,key,this.props.jobHolderDom)}} />
                    </OverlayTrigger>
                );
            }
        });
        return (
            <div className="custom-dots-holder">

                <div className="custom-dots" id="custom-dots">
                    <div className="main-line" />
                    <div>
                        <OverlayTrigger rootClose trigger={['click']} placement="top" overlay={popoverClick} >
                            <span className={this.state.activeButton == 0 ? "dots active" : "dots"}  onClick={(e)=>{this.stepClick(e,0,this.props.jobHolderDom)}}/>
                        </OverlayTrigger>
                        {stepCount}
                        <OverlayTrigger rootClose trigger={['click']} placement="top" overlay={popoverClick} >
                            <span className={this.state.activeButton == -10 ? "dots active" : "dots"} onClick={(e)=>{this.stepClick(e,-10, this.props.jobHolderDom)}}/>
                        </OverlayTrigger>
                    </div> 
                </div>
            </div>
        );
    }
}

export default StatusBar;