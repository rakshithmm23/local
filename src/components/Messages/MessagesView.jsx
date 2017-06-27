import React, { Component } from 'react';
import { Media } from "react-bootstrap";
import { FormGroup, InputGroup, FormControl } from 'react-bootstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default class MessagesView extends Component {
    constructor(props) {
      super(props);
      this.state = {
        messageList: {
          1: [
            {
              type: 'sender',
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
          ],
          2: [
            {
              type: 'sender',
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
          ],
          3: [
            {
              type: 'sender',
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
        },
        inboxList: [
          {
            vendorName: "Ayaz's Buick",
            vendorTitle: "Buddy's Car Service",
            requestType: 'Car Wash',
            vendorId: 1,
            message: "Lorem ipsum dolor sit amet, consectetuer",
            updatedAt: "3 hours ago",
          },
          {
            vendorName: "Ayaz's Buick",
            vendorTitle: "Buddy's Car Service",
            requestType: 'Car Wash',
            vendorId: 2,
            message: "Lorem ipsum dolor sit amet, consectetuer",
            updatedAt: "3 hours ago",
            unreadMessage: 1
          },
          {
            vendorName: "Ayaz's Buick",
            vendorTitle: "Buddy's Car Service",
            requestType: 'Car Wash',
            vendorId: 3,
            message: "Lorem ipsum dolor sit amet, consectetuer",
            updatedAt: "3 hours ago",
            unreadMessage: 0
          }
        ],
        selectedVendorId: 1,
        quotesMessage: ''
      };
    }
    renderQuotes(){
      const inboxListView =  this.state.inboxList.map((inbox, index) => {
        return (
          <div className={inbox.vendorId === this.state.selectedVendorId ? "messageCard active" : "messageCard"} key={index} onClick={(e) => {e.preventDefault(); this.onInboxSwitch(inbox.vendorId)}}>
            <Media>
                <Media.Left>
                    <img width={36} height={36} src="../../images/car.jpg" alt="Image" />
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{inbox.vendorName}</Media.Heading>
                    <h4 className="messenger-name">{inbox.requestType}</h4>
                    <span className="messenger-firm">{inbox.vendorTitle}</span>
                    <p><span>You:</span> {inbox.message}</p>
                    <div className="option_time">
                        <div className="three-dots-icon">
                            <DropdownButton bsSize="xsmall" footer="show" id="dropdown-size-extra-small" title={<i className="mdi mdi-dots-vertical" />} noCaret pullRight>
                                <MenuItem eventKey="Share">Share Offer Details</MenuItem>
                                <MenuItem eventKey="Vendor Profile">View Vendor Profile</MenuItem>
                                <MenuItem eventKey="Email Vendor">Email Vendor</MenuItem>
                            </DropdownButton>
                            <span className="messageTime">{inbox.updatedAt}</span>
                        </div>
                    </div>
                    {inbox.unreadMessage ? <div className="newMessage_count">
                        {inbox.unreadMessage}
                    </div>: ''}
                </Media.Body>
            </Media>
        </div>
        )
      });
      return inboxListView;
    }
    renderMessages(selectedVendorMessageList){
      const messageView = selectedVendorMessageList.map((messageObj, index) => {
        let messageClass = 'c-message';
        let showTimeStamp = true, showAvatar = true;
        messageClass += messageObj.type == 'sender' ? ' message-in' : ' message-out';
        if (index > 0 && selectedVendorMessageList[index]['type'] === selectedVendorMessageList[index-1]['type']) {
          showAvatar = false;
          messageClass += ' chain-msg';
        }
        if ((index + 1) < selectedVendorMessageList.length) {
          if (selectedVendorMessageList[index]['type'] === selectedVendorMessageList[index+1]['type']){
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
        )
      });
      return messageView;
    }
    onInboxSwitch(vendorId) {
      this.setState({'selectedVendorId': vendorId});
    }
    sendNewMessage(message){
      if (this.state.selectedVendorId && message) {
        let currentTime = new Date();
        currentTime = currentTime.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
        const newMessage = {
          type: 'receiver',
          message: message,
          timestamp: currentTime
        }
        const messageList = this.state.messageList;
        messageList[this.state.selectedVendorId].push(newMessage);
        this.setState({'messageList': messageList, 'quotesMessage': ''})
      }
    }
    render() {
        const inboxListView = this.state.inboxList ? this.renderQuotes() : '';
        const messagesView = this.state.selectedVendorId ? this.renderMessages(this.state.messageList[this.state.selectedVendorId]) : '';
        return (
            <div className="row">
                <div className="col-md-6 pad0">
                    <div className="inboxContainer">
                        <div className="inboxMessage">
                          {inboxListView}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 pad0">
                    <div className="messageBot">
                        <div className="quotes-right-header">
                            <div className="profile-head">
                                <span>
                                    <img src="../images/pic.png" alt="" />
                                </span>
                                <label> Shine Works </label>
                            </div>
                        </div>
                        <div className="quotes-chat-area">
                          {messagesView}
                        </div>
                        <div className="quotes-message-footer">
                          <form onSubmit={(e) => {e.preventDefault(); this.sendNewMessage(this.state.quotesMessage);}}>
                            <FormGroup>
                              <InputGroup>
                                <FormControl type="text" placeholder="Type your message here..." value={this.state.quotesMessage} onChange={(e) => {e.preventDefault(); this.setState({'quotesMessage': e.target.value})}}/>
                                <InputGroup.Addon onClick={(e) => {e.preventDefault(); this.sendNewMessage(this.state.quotesMessage);}}>
                                  <i className="mdi mdi-send" />
                                </InputGroup.Addon>
                              </InputGroup>
                            </FormGroup>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
