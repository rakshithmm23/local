import React, {Component} from 'react';
import {map} from 'lodash';
import '../../styles/sidebar.css';

export default class Sidebar extends Component {
  render() {
    const {bgColor} = this.props;
    const sidebarItems = [
      {
        iconName: 'requests',
        name: 'My Requests',
        hyperLink: '#'
      },
      {
        iconName: 'my-cars',
        name: 'My Cars',
        hyperLink: '#'
      },
      {
        iconName: 'messages',
        name: 'Messages',
        hyperLink: '#'
      },
      {
        iconName: 'favourites',
        name: 'Favourites',
        hyperLink: '#'
      },
    ];

    const sideBarCardList = map(sidebarItems, (item, key) => {
      return (
        <li key={key}>
          <a href={item.hyperLink}>
            {item.iconName && <label className={item.iconName}/> }
            <span>{item.name}</span>
          </a>
        </li>
      );
    });
    return (
      <div className="sidebar" style={{backgroundColor: bgColor ? bgColor : '#181818'}}>
          <ul className="list-unstyled">
              {sideBarCardList}
          </ul>
      </div>
    );
  }
}
