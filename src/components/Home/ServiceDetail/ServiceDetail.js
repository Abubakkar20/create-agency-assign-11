import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'
const ServiceDetail = ({ service }) => {
    return (
       
            <div className="col-md-4 text-center serviceStyle">
                <img style={{ width: "50px" }} src={service.imges} alt="" />
                <h3>{service.title}</h3>
                <p>{service.body}</p>
            </div>
      
    );

};

export default ServiceDetail;