import React, {Component} from 'react';
import {map} from 'lodash';
import '../../styles/sidebar.css';

export default class Sidebar extends Component {
  componentWillMount(){
   const currentPath = window.location.pathname;
   this.state = {
     currentPath: currentPath
   };
  }
  componentWillReceiveProps(){
   const currentPath = window.location.pathname;
   this.state = {
     currentPath: currentPath
   };
  }
  goToUrl(url){
    this.props.router.push(url);
  }
  render() {
    const {bgColor} = this.props;
    const sidebarItems = [
      {
        icon: '../images/sidebar/dashboard.svg',
        icon_active: '../../images/sidebar/dashboard_active.svg',
        name: 'Dashboard',
        hyperLink: '/dashboard'
      },
      {
        icon: '../images/sidebar/request.svg',
        icon_active: '../images/sidebar/request_active.svg',
        name: 'My Requests',
        hyperLink: '/request'
      },
      {
        icon: '../images/sidebar/car.svg',
        icon_active: '../images/sidebar/car_active.svg',
        name: 'My Cars',
        hyperLink: '/car-profiles'
      },
      {
        icon: '../images/sidebar/message.svg',
        icon_active: '../images/sidebar/message_active.svg',
        name: 'Messages',
        hyperLink: '/messages'
      },
      {
        icon: '../images/sidebar/fav.svg',
        icon_active: '../images/sidebar/fav_active.svg',
        name: 'Favourites',
        hyperLink: '/favourites'
      },
    ];

    const sideBarCardList = map(sidebarItems, (item, key) => {
      return (
        <li key={key} className={this.state.currentPath == item.hyperLink ? 'active': ''}
        onClick={this.goToUrl.bind(this,item.hyperLink)}>
          <a>
            {item.icon && <img src={item.icon} className="non_active"/> }
            {item.icon && <img src={item.icon_active} className="active_icon"/> }
            <span>{item.name}</span>
          </a>
        </li>
      );
    });
    return (
      <div className="sidebar" style={{backgroundColor: bgColor ? bgColor : '#fff'}}>
          <ul className="list-unstyled">
              {sideBarCardList}
          </ul>
      </div>
    );
  }
}
