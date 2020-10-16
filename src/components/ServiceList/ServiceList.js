import React from 'react';

const ServiceList = () => {
    return (
        <section>

            <div className="d-flex justify-content-between container">
                <h4>Logo Here</h4>
                <h4>Service list</h4>
                <h4>Name</h4>
            </div>

            <div className="container-fluid row">

                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }} >
                    <ul className="list-unstyled py-5 px-4">
                        <li>Service List</li>
                        <li>Add Service</li>
                        <li>Make admin</li>
                    </ul>
                </div>

                <div className="col-md-10 orderliststyle">
                    <div style={{ width: "492px", marginTop: "40px" }}>

                    <h2>User Order Status here</h2>                  
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceList;