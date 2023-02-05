import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div className="section-padding">
                <div className="container">
                    <div className="donation_form">
                        <form>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Donation Amount *</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                            </div>
                                            <input type="text" className="form-control border w-auto" placeholder={100} defaultValue={100} required />
                                        </div>
                                        <ul className="select_amount">
                                            <li>$10.00</li>
                                            <li>$25.00</li>
                                            <li>$50.00</li>
                                            <li className="active">$100.00</li>
                                            <li>$500.00</li>
                                        </ul>
                                        <input type="number" className="form-control border w-auto" placeholder="Custom Donation" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Payment Method *</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="radio d-inline mr-4">
                                            <input type="radio" name="payment" id="online" defaultChecked />
                                            <label htmlFor="online">Online Payment</label>
                                        </div>
                                        <div className="radio d-inline">
                                            <input type="radio" name="payment" id="offline" />
                                            <label htmlFor="offline">Offline Payment</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Campaigns * </label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="select">
                                            <select className="form-control border" required>
                                                <option>Education for Every Child - (Target: 10000.00)</option>
                                                <option>Education for Every Child - (Target: 15000.00)</option>
                                                <option>Education for Every Child - (Target: 20000.00)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Message</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <textarea rows={3} className="form-control border" placeholder="Your Custom text" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Donator Details * </label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control border" placeholder="Full Name" required />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" className="form-control border" placeholder="Email Address" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2 m_none">
                                        &nbsp;
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <button type="submit" className="btn dark-btn">Donate Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;