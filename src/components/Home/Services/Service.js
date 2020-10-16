import React from 'react';
import mobile from '../../../images/icons/service1.png'
import graphic from '../../../images/icons/service2.png'
import web from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const services = [
        {
            imges: mobile,
            title: "web & Mobile design",
            body: "We craft stunning an damazing web UL,using a well drrafted UX to fit youer product",
        },

        {
            imges: graphic,
            title: "Graphic design",
            body: "Amazing flyrs,social media posts and breand representation that would make your brand stand out",
        },
        {
            imges: web,
            title: "Web development",
            body: "Web development codes,we build amazing apps for all platforms,mobile and web apps in general",
        },
    ];


    return (
        <section className="container">

            <div>
                <h2 style={{ textAlign: 'center', marginTop: "60px" }}> Provide awesome <span style={{ color: '#7AB259' }}> services </span></h2>

            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Service;