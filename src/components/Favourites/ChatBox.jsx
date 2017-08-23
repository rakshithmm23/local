import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Media } from "react-bootstrap";
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Scroll from 'react-scroll';
import { map, filter } from 'lodash';

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.defaultChatMessage = [
      {
        type: 'sender1',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      },
      {
        type: 'receiver',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      },
      {
        type: 'receiver',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      },
      {
        type: 'sender',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      },
      {
        type: 'sender',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      },
      {
        type: 'sender',
        message: 'Lorem ipsum dolor sit amet, et tamquam docendi deleniti est',
        timestamp: '2:44 PM'
      }
    ]
    this.state = {
      messageList: {},
      selectedVendorId: 1,
      quotesMessage: '',
      
    };
  }

  componentDidMount() {
    this.chatHeight();
  }
  componentWillUpdate() {
    this.chatHeight();  
  }

  componentWillMount() {
    let messagesVal = {};
    map(this.props.data, (chatMsg, key) => {
      messagesVal[key] = this.defaultChatMessage;
    });
    let id = (filter(this.props.data, { "isActive": true })[0].id)
    this.setState({ messageList: messagesVal, selectedVendorId: id });
  }

  componentDidUpdate(prevProps, prevState) {
     this.chatHeight(); 
  }
 
  chatHeight() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    if (node.scrollHeight) {
      node.scrollTop = node.scrollHeight;
    }
  }

  renderMessages(selectedVendorMessageList) {
    
    const messageView = selectedVendorMessageList.map((messageObj, index) => {
      let messageClass = 'c-message';
      let showTimeStamp = true, showAvatar = true;
      messageClass += messageObj.type == 'sender' ? ' message-in' : ' message-out';
      if (index > 0 && selectedVendorMessageList[index]['type'] === selectedVendorMessageList[index - 1]['type']) {
        showAvatar = false;
        messageClass += ' chain-msg';
      }
      if ((index + 1) < selectedVendorMessageList.length) {
        if (selectedVendorMessageList[index]['type'] === selectedVendorMessageList[index + 1]['type']) {
          showTimeStamp = false;
          messageClass += ' message-continuation';
        }
      }
      

      return (
        <div className={messageClass} key={index}>
          <div className="profile-head">
            <span>
              <img src="../images/pic.png" alt="" />
            </span>
          </div>
          <div className="c-chat">
            <p>{messageObj.message}</p>
          </div>
          <div className="delivered-details">
            <label>{messageObj.timestamp}</label>
          </div>
        </div>
      );
    });
    return messageView;
    
  }
  onInboxSwitch(vendorId) {
    console.log('vendorId')
    this.setState({ 'selectedVendorId': vendorId });
  }
  sendNewMessage(message) {
    if (this.state.selectedVendorId && message) {
      let currentTime = new Date();
      currentTime = currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      const newMessage = {
        type: 'receiver',
        message: message,
        timestamp: currentTime
      }
      const newMessageList = Object.assign({}, this.state.messageList);
      newMessageList[this.state.selectedVendorId].push(newMessage);
      this.setState({ 'messageList': newMessageList, 'quotesMessage': '' });


    }
  }
  render() {
    const inboxListView = this.state.inboxList ? this.renderQuotes() : '';
    const messagesView = this.state.selectedVendorId ? this.renderMessages(this.state.messageList[this.state.selectedVendorId]) : '';
    return (
      <div className="row">
        <div className={this.props.hide}>
          <div className="quotes-chat-area" id="quotes-chat-area" ref={(el) => { this.messagesEnd = el; }}>
            {messagesView}
          </div>
          <div className="quotes-message-footer">
            <form onSubmit={(e) => { e.preventDefault(); this.sendNewMessage(this.state.quotesMessage); }}>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" placeholder="Type your message here..." value={this.state.quotesMessage} onChange={(e) => { e.preventDefault(); this.setState({ 'quotesMessage': e.target.value }) }} />
                  <InputGroup.Addon onClick={(e) => { e.preventDefault(); this.sendNewMessage(this.state.quotesMessage); }}>
                    <i className="mdi mdi-send" />
                  </InputGroup.Addon>
                </InputGroup>
              </FormGroup>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
