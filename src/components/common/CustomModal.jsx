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
        // const { showModal } = nextProps;
        // if(this.state.showModal != showModal && showModal != undefined) {
        //     this.setState({
        //         showModal: nextProps
        //     });
        // }
    }    
    // close() {
    //     // this.setState({ showModal: false });
    //     if (this.props.onHide) {
    //         this.props.onHide(this);
    //     }
    // }
    render() {
        const { children, footer, className, showModal } = this.props;
        return (            
            <div>
                <Modal className={className} show={showModal} onHide={() => this.props.onHide ? this.props.onHide() : ''}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    {children}
                    {footer=="true" && <Modal.Footer>
                        <Button btnType="cancel" btnSize="sm" fontSize={15} label={this.props.cancelText?this.props.cancelText:"Cancel"}  btnCallBack={() => this.props.onHide ? this.props.onHide() : ''}/>
                        <Button btnType="submit" btnSize="sm" fontSize={15} backgroundColor="red" label={this.props.saveText?this.props.saveText:"Save"} />
                    </Modal.Footer>}
                </Modal>
            </div>
        );
    }
}

export default CustomModal;