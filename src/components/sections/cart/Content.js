import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cartItems from "../../../data/shop/shop.json";
import { handleDeleteFromCart } from "../../../helper/shopHelper";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: cartItems,
            priceTotal: cartItems.slice(0, 5).reduce((totalPrice, item) => totalPrice + item.price * item.rating, 0),
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(item) {
        item.rating = item.rating + 1;
        this.setState({ cartItems: this.state.cartItems, priceTotal: cartItems.slice(0, 5).reduce((totalPrice, item) => totalPrice + item.price * item.rating, 0) });
    }
    decrement(item) {
        item.rating = item.rating > 1 ? item.rating - 1 : 1;
        this.setState({ cartItems: this.state.cartItems, priceTotal: cartItems.slice(0, 5).reduce((totalPrice, item) => totalPrice + item.price * item.rating, 0) });
    }
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    {/* Section Heading */}
                    <div className="cart-section-heading">
                        <div className="section-header text-center">
                            <h2>Cart</h2>
                        </div>
                    </div>
                    {/*/ Section Heading */}
                    {/* table */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 table-responsive mb-4">
                                {/* Table Heading */}
                                <table className="table hm-cart-table">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th scope="col" className="product-name">Product</th>
                                            <th scope="col" className="product-qty">Quantity</th>
                                            <th scope="col" className="product-price">Total</th>
                                        </tr>
                                    </thead>
                                    {/*/ Table Heading */}
                                    {/* Table body */}
                                    <tbody>
                                        {/* Data */}
                                        {cartItems.slice(0, 5).map((item, i) => (
                                            <tr key={i}>
                                                <td className="product-remove hm-align text-center">
                                                    <Link to="#" onClick={handleDeleteFromCart}><i className="fa fa-times" /></Link>
                                                </td>
                                                <td data-title="Product" className="has-title">
                                                    <div className="product-thumbnail">
                                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} />
                                                    </div>
                                                    <Link to={"/shop-details/" + item.id} className="btn-link">{item.title}</Link>
                                                </td>
                                                <td className="quantity hm-align has-title" data-title="Quantity">
                                                    <button type="button" className="minus btn dark-btn btn-outline-secondary hm-qty-btn" onClick={(e) => this.decrement(item)}>-</button>
                                                    <input type="text" className="input-text qty text" name="quantity" value={item.rating} title="Qty" readOnly />
                                                    <button type="button" className="plus btn dark-btn btn-outline-secondary hm-qty-btn" onClick={(e) => this.increment(item)}>+</button>
                                                </td>
                                                <td className="product-price hm-align has-title" data-title="Price">
                                                    <span className="product-currency">$</span> <span className="product-amount">{new Intl.NumberFormat().format((item.price * item.rating).toFixed(2))}</span>
                                                </td>
                                            </tr>
                                        ))}
                                        {/* Data */}
                                    </tbody>
                                    {/* /Table body */}
                                    {/* Table footer */}
                                    <tfoot>
                                        <tr>
                                            <td colSpan={4}>
                                                <button className="btn btn-sm dark-btn check-btn btn-width float-left">Continue Shoping</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                    {/* /Table footer*/}
                                </table>
                            </div>
                            {/* Discount code */}
                            <div className="row">
                                <div className="col-lg-6 col-md-12 mb-3">
                                    <div className="hm-product-promo">
                                        <div className="hm-title">
                                            <h5>Discount Code</h5>
                                        </div>
                                        {/* Discount code form */}
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="couponCode">Enter coupon code</label>
                                                <input type="text" className="form-control" placeholder="Coupon Code" id="couponCode" />
                                                <button type="submit" className="btn dark-btn btn-sm mt-4">Apply</button>
                                            </div>
                                        </form>
                                        {/*/ Discount code form */}
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="hm-product-promo">
                                        {/* Discount code table */}
                                        <table className="table hm-table-borderless">
                                            <tbody>
                                                <tr>
                                                    <td> <b>Subtotal</b> </td>
                                                    <td className="text-right">$ {new Intl.NumberFormat().format((this.state.priceTotal).toFixed(2))}</td>
                                                </tr>
                                                <tr>
                                                    <td> <b>Shipping</b> </td>
                                                    <td className="text-right">$ 2.99</td>
                                                </tr>
                                                <tr>
                                                    <td> <b>Total</b> </td>
                                                    <td className="text-right">$ {new Intl.NumberFormat().format((this.state.priceTotal + 2.99).toFixed(2))}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <Link to="/checkout" className="btn dark-btn w-100">Proceed to Checkout</Link>
                                    </div>
                                </div>
                                {/*/ Discount code */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;