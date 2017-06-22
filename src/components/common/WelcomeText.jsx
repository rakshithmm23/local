import React, { Component } from 'react';
import Button from '../common/Button';

export default class WelcomeText extends Component {

    render() {
      const {router} = this.props;
        return (
           <div className="welcome-banner">
               <div className="container-fluid">
                   <div className="col-md-8 col-sm-8 col-xs-12">
                        <h4>Hi <span>Leon Olson !</span></h4>
                        <p>
                            It’s great to see that you have signed up with Carcility.
                                To get started, let’s create your car profile
                        </p>
                        <Button btnType="label" btnSize="lg" fontSize={16} label="Create a car profile" btnCallBack={() => {router.push('/car-profile')}}/>

                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <img src="../../images/welcome.png" alt=""/>
                    </div>
                </div>
           </div>
        );
    }
}
