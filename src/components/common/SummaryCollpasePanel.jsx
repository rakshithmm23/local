import React, { Component } from 'react';
import { Accordion, Panel } from 'react-bootstrap';

class SummaryCollpasePanel extends Component {
    constructor(){
        super()
        this.state={
            open:false
        }
    }
    render() {
        return (
            <Accordion>
            <Panel   collapsible expanded={this.state.open}  header={
                <span>
                    <img src="../../images/auto-service-icons-4.png" alt="" />
                    <label>AC heating & Cooling</label>
                    <i className={this.state.open ? "mdi mdi-chevron-down" : "mdi mdi-chevron-up"} />
                </span>
                }>
                sdasds
            </Panel>
        </Accordion>
        );
    }
}

export default SummaryCollpasePanel;