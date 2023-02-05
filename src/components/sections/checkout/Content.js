import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartItems from "../../../data/shop/shop.json";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: cartItems,
            priceTotal: cartItems.slice(0, 5).reduce((totalPrice, item) => totalPrice + item.price * item.rating, 0),
        };
    }
    render() {
        return (
            <section className="section-padding checkout-form">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="sj-about-heading sj-section-heading">
                            <h2>Checkout</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <div className="card mb-3">
                                <div className="card-title">
                                    <h6>Buyer Info</h6>
                                    <h6>
                                        <Link to="/login">Login Here</Link>
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <form className="hm-checkout-body" method="post">
                                        <div className="form-group row">
                                            <label htmlFor="inputFname" className="col-sm-4 col-form-label">First Name:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputFname" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputLname" className="col-sm-4 col-form-label">Last Name:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputLname" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputAddress1" className="col-sm-4 col-form-label">Address 1:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputAddress1" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputAddress2" className="col-sm-4 col-form-label">Address 2:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputAddress2" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputCity" className="col-sm-4 col-form-label">City:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputCity" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputPcode" className="col-sm-4 col-form-label">Postal Code:</label>
                                            <div className="col-sm-8">
                                                <input type="number" className="form-control" id="inputPcode" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputState" className="col-sm-4 col-form-label">State:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputState" />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="inputCount" className="col-sm-4 col-form-label">Country:</label>
                                            <div className="col-sm-8">
                                                <input type="text" className="form-control" id="inputCount" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h6>Billing Details</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="hm-checkout-body">
                                                <table className="table hm-table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Product</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* Data */}
                                                        {cartItems.slice(0, 5).map((item, i) => (
                                                            <tr key={i}>
                                                                <td>{item.title}</td>
                                                                <td>{item.rating}</td>
                                                                <td>${new Intl.NumberFormat().format((item.price * item.rating).toFixed(2))}</td>
                                                            </tr>
                                                        ))}
                                                        {/* Data */}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr className="hm-table-footer">
                                                            <td>Order total</td>
                                                            <td />
                                                            <td>${new Intl.NumberFormat().format((this.state.priceTotal + 2.99).toFixed(2))}</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="card">
                                        <div className="card-title">
                                            <h6>Payment Methods</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="hm-checkout-body">
                                                <div className="hm-text-content">
                                                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                </div>
                                                <div className="hm-payment-form">
                                                    <form className="hm-pay-form">
                                                        <table>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <label htmlFor="inputCnumber" className="col-form-label">Card Number:</label>
                                                                    </td>
                                                                    <td colSpan={3}>
                                                                        <input type="text" className="form-control" id="inputCnumber" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label htmlFor="inputCcv" className="col-form-label">CCV:</label>
                                                                    </td>
                                                                    <td colSpan={3}>
                                                                        <input type="text" className="form-control" id="inputCcv" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <label htmlFor="inputMonth" className="col-form-label">Month</label>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            <input type="number" className="form-control" id="inputMonth" />
                                                                        </span>
                                                                    </td>
                                                                    <td>
                                                                        <label htmlFor="inputYear" className="col-form-label">Year</label>
                                                                    </td>
                                                                    <td>
                                                                        <span>
                                                                            <input type="number" className="form-control" id="inputYear" />
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                            <div className="hm-checkout-btn mt-5  hm-center-item text-right">
                                <button className="btn sj-btn-round-2 btn-md">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;