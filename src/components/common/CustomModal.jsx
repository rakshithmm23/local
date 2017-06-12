import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../common/Button';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.propTypes = {
            showModal: React.PropTypes.bool.isRequired,
        }    
    }
    componentWillReceiveProps(nextProps) {
        debugger
        const { showModal } = nextProps;
        if(this.state.showModal != showModal) {
            this.setState({
                showModal: nextProps
            });
        }
    }    
    close() {
        debugger
        this.setState({ showModal: false });
    }
    render() {
        const { children, footer } = this.props;
        return (            
            <div>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    {children}
                    {footer=="true" && <Modal.Footer>
                        <Button btnType="submit" btnSize="sm" fontSize={15} label="Cancel" btnCallBack={this.close.bind(this)}/>
                        <Button btnType="submit" btnSize="sm" fontSize={15} label="Save" />
                    </Modal.Footer>}
                </Modal>
            </div>
        );
    }
}

export default CustomModal;