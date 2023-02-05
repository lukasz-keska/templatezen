import React, { Component } from 'react';

class Donation extends Component {
    render() {
        return (
            <section className="section-padding secondary-bg donation-img-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div className="section-header">
                                <h3>Support Our Mission</h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                    alteration in some</p>
                            </div>
                            <p>We provide Buddhism and meditation resources. We try to make our classes relaxed, informal and
                                interactive, and relevant to ordinary people leading ordinary lives. You do not have to be a
                                Buddhist or become a Buddhist or anything else in order to attend our classes.</p>
                            <div className="donation_form">
                                <form>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">$</span>
                                                    </div>
                                                    <input type="text" className="form-control w-auto mb-0" defaultValue="$100" />
                                                </div>
                                                <ul className="select_amount">
                                                    <li className="mb-0">$10.00</li>
                                                    <li className="mb-0">$25.00</li>
                                                    <li className="mb-0">$50.00</li>
                                                    <li className="mb-0 active">$100.00</li>
                                                    <li className="mb-0">$500.00</li>
                                                </ul>
                                                <input type="submit" className="btn dark-btn" defaultValue="Donate Now" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-center img-width-100">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home-page/img-2.jpg"} alt="img" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Donation;