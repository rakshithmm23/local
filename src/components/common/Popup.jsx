import React, { Component } from 'react';

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }    
    componentWillMount() {
        const {
            open
        } = this.props;
        if(open != this.state.open) {
            this.setState({
                open: open
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        const {
            open
        } = nextProps;
        if(open != this.state.open) {
            this.setState({
                open: open
            });
        }
    }
    render() {
        const {
            open
        } = this.state;
        const {
            children
        } = this.props;
        return (
            open 
            ? children
            : null            
        );
    }
}

export default Popup;