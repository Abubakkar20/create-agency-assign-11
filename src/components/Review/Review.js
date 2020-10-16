import React from 'react';

const Review = () => {
    return (
        <section>

            <div className="d-flex justify-content-between container">
                <h4>Logo Here</h4>
                <h4>Order</h4>
                <h4>Name</h4>
            </div>

            <div className="container-fluid row">

                <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }} >
                    <ul className="list-unstyled py-5 px-4">
                        <li>Order</li>
                        <li>Service List</li>
                        <li>Review</li>
                    </ul>
                </div>

                <div className="col-md-10 orderliststyle">
                    <div style={{ width: "492px", marginTop: "40px" }}>

                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Youer name"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Company's name,Designation" />
                            </div>
                            <div>
                                <textarea style={{ height: "150px", width: "494px" }} placeholder="Description"></textarea>
                            </div>
                            <button type="Submit" style={{ width: "90px", marginTop: "10px" }} class="btn btn-dark btn-sm">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;