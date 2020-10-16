import React from 'react';
import coustomer1 from '../../../images/customer-1.png'
import coustomer2 from '../../../images/customer-2.png'
import coustomer3 from '../../../images/customer-3.png'
import FeedBackDetails from '../FeedBackDetails/FeedBackDetails';

const FeedBack = () => {

const clientFeedBack =[
    {
        img: coustomer1,
        name: 'Nash Patrik',
        status:'CEO, Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing'
    },

    {
        img: coustomer2,
        name: 'Miriam Baron',
        status:'CEO, Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    {
        img: coustomer3,
        name: 'Nash Patrik',
        status:'CEO, Manpol',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing'
    },
]

    return (
        <section className="container">

        <div>
            <h2 style={{ textAlign: 'center', marginTop: "60px" }}>Clients <span style={{ color: '#7AB259' }}>feedback</span></h2>

        </div>
        <div className="d-flex justify-content-center">
            <div className="w-100 row">
                {
                    clientFeedBack.map(clientFeedBack => <FeedBackDetails clientFeedBack={clientFeedBack}></FeedBackDetails>)
                }
            </div>
        </div>

    </section>
    );
};

export default FeedBack;