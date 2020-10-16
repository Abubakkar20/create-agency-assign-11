import React from 'react';
import './Footers.css'
const Footers = () => {
    return (
        <section className="container footerstyle">

            <div className="row ">
                <div className="col-md-6">
                    <h2>Let us handle your <br />project,professionally</h2>
                    <p>With well codes, we build a,azing apps for all<br /> plattform mobile and web apps in general </p>

                </div>
                <div className="col-md-6">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your email address" />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your name / company name" />
                        </div>

                        <div>
                            <textarea style={{height:"200px",width:"494px"}} placeholder="Your massage here,,,,,"></textarea>
                        </div>
                        <button type="button" style={{ width: "120px" }} class="btn btn-dark btn-sm">Hire Us</button>
                    </form>
                </div>
            </div>
            <p style={{ textAlign: "center",marginTop:"80px" }}>copyright orange labs 2020</p>
        </section>
    );
};

export default Footers;