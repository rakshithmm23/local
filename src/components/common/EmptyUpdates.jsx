import React, { Component } from 'react';
import Button from '../common/Button';

export default class EmptyUpdates extends Component {

    render() {
        return (
           <div className="welcome-banner empty">
               <div className="container-fluid">
                   <div className="col-md-8 col-sm-8 col-xs-12 pad0">
                        <h4>Oops! look like you dont have any requests yet.</h4>
                        <p>
                            Fortunatelly, it’s easy to create one.
                            The illustration/icon pattern has to be similar to the top
                        </p>
                        <Button btnType="submit" btnSize="lg" fontSize={16} label="Create a  Request" />
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <img src="../../images/empty.png" alt=""/>
                    </div>
                </div>
           </div>
        );
    }
}
