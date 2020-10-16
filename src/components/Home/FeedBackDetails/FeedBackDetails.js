import React from 'react';
import './FeedBackDetails.css'
const FeedBackDetails = ({ clientFeedBack }) => {

    console.log(clientFeedBack.name)

    return (
        <div className="col-md-4 text-center feed-Container">
            <div className="d-flex feedbackstyle">
                <div> <img style={{ marginRight: "5px" }} src={clientFeedBack.img} alt="" /></div>
                <div>
                    <h5>{clientFeedBack.name}</h5>
                    <h6> {clientFeedBack.status}</h6>
                </div>
            </div>
            <div>

                <p>{clientFeedBack.body}</p>

            </div>

        </div>
    );
};

export default FeedBackDetails;