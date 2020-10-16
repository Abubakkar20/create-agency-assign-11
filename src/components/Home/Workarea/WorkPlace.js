import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netFlix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
import './WorkPlace.css'
const WorkPlace = () => {
    return (
        <section class= "container ">
           <div className="workPlace-image d-flex justify-content-around">
            <img src= {slack} alt=""/>
            <img src= {google} alt=""/>  
            <img src= {uber} alt=""/>
            <img src= {netFlix} alt=""/>
            <img src= {airbnb} alt=""/>
           </div>
        </section>
    );
};

export default WorkPlace;