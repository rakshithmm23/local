import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import Button from '../common/Button';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
          this.close = this.close.bind(this);
        // this.propTypes = {
        //     showModal: React.PropTypes.bool.isRequired,
        // }
    }
    // componentWillReceiveProps(nextProps) {
    //     const { showModal } = nextProps;
    //     if(this.state.showModal != showModal && showModal != undefined) {
    //         this.setState({
    //             showModal: nextProps
    //         });
    //     }
    // }
    close() {
      if (this.props.onHide) {
        this.props.onHide();
      }

    }
    render() {
        const { children, footer, className, closeIcon,title } = this.props;
        return (
            <div>
                <Modal className={className} show={this.props.showModal} onHide={this.close}>
                   {title? <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                        {closeIcon && <label className="close-modal" onClick={this.close}>
                          <i className="mdi mdi-close"/>
                        </label>}
                    </Modal.Header>:""}
                    {children}
                    {footer? <Modal.Footer>
                        <Button btnType="cancel" btnSize="sm" fontSize={15} label={this.props.cancelText?this.props.cancelText:"Cancel"}  btnCallBack={this.close.bind(this)}/>
                        <Button btnType="submit" btnSize="sm" fontSize={15} backgroundColor="red" label={this.props.saveText?this.props.saveText:"Save"} btnCallBack={this.props.submitCallBack}/>
                    </Modal.Footer>:""}
                </Modal>
            </div>
        );
    }
}

export default CustomModal;
