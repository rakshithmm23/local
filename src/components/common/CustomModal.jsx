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
                showModal: showModal
            });
        }
    }
   
    // close() {
    //     debugger
    //     this.setState({ showModal: false });
    //     // if (this.props.closeModalCallBack){
    //     //   this.props.closeModalCallBack();
    //     // }
    // }
    render() {
        const { children, footer, className, closeIcon,header } = this.props;
        return (
            <div>
                <Modal className={className} show={this.state.showModal} onHide={this.props.hideModal} >
                    {!header?"":<Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                        {closeIcon && <label className="close-modal" onClick={()=>this.setState({showModal: false})}>
                          <i className="mdi mdi-close"/>
                        </label>}
                    </Modal.Header>}
                    {children}
                    {footer && <Modal.Footer>
                        <Button btnType="cancel" btnSize="sm" fontSize={15} label={this.props.cancelText?this.props.cancelText:"Cancel"}  btnCallBack={this.props.hideModal}/>
                        <Button btnType="submit" btnSize="sm" fontSize={15} backgroundColor="red" label={this.props.saveText?this.props.saveText:"Save"} btnCallBack={() => {this.props.submitCallBack && this.props.submitCallBack() }} />
                    </Modal.Footer>}
                </Modal>
            </div>
        );
    }
}

export default CustomModal;
