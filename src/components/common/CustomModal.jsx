import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../common/Button';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        // this.propTypes = {
        //     showModal: React.PropTypes.bool.isRequired,
        // }    
    }
    componentWillReceiveProps(nextProps) {
        const { showModal } = nextProps;
        if(this.state.showModal != showModal && showModal != undefined) {
            this.setState({
                showModal: nextProps
            });
        }
    }    
    close() {
        this.setState({ showModal: false });
    }
    render() {
        const { children, footer, className } = this.props;
        return (            
            <div>
                <Modal className={className} show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    {children}
                    {footer=="true" && <Modal.Footer>
                        <Button btnType="cancel" btnSize="sm" fontSize={15} label={this.props.cancelText?this.props.cancelText:"Cancel"}  btnCallBack={this.close.bind(this)}/>
                        <Button btnType="submit" btnSize="sm" fontSize={15} backgroundColor="red" label={this.props.saveText?this.props.saveText:"Save"} />
                    </Modal.Footer>}
                </Modal>
            </div>
        );
    }
}

export default CustomModal;