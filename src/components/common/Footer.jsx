import React, {Component} from 'react';
import {map} from 'lodash';

export default class Footer extends Component {

  render() {
    const footerItem = [
      {
        footerHeading: 'About Carcility',
        sublist: [{
            title:"About Us",
            hyperLink: "#",
        },
        {
            title:"Blog",
            hyperLink: "#",
        },
        {
            title:"Careers",
            hyperLink: "#",
        },
        {
            title:"Contact Us",
            hyperLink: "#",
        }]
      },
      {
        footerHeading: 'For Vendor',
        sublist: [{
            title:"Code of Conduct",
            hyperLink: "#",
        },
        {
            title:"Guidelines",
            hyperLink: "#",
        },
        {
            title:"Verification Process",
            hyperLink: "#",
        },
        {
            title:"Business Process",
            hyperLink: "#",
        }]
      },{
        footerHeading: 'For Customers',
        sublist: [{
            title:"User App",
            hyperLink: "#",
        },
        {
            title:"Community",
            hyperLink: "#",
        },
        {
            title:"FAQs",
            hyperLink: "#",
        },
        {
            title:"Customer Care",
            hyperLink: "#",
        }]
      }
    ];

    const footerLink = map(footerItem, (item, key) => {
      const subList = map(item.sublist, (subItem, subKey) => {
        return (
          <li key={subKey}>
            <a href={subItem.hyperLink}> {subItem.title}</a>
          </li>
        );
      });
      return (
          <div className="col-md-3 col-sm-6 col-xs-12" key={key}>
              <div className="footer-link">
                <h5>{item.footerHeading}</h5>
                {item.sublist && <ul className="list-unstyled">
                  {subList}
                </ul>}
              </div>
            </div>
        );
    });

    return (
      <div className="footer-section">
        <div className="container">
          {footerLink}
        </div>
      </div>
    );
  }
}
