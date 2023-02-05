import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductByCategory, handleOutofStock, getProduct } from '../../../helper/shopHelper';

class Relatedproducts extends Component {
    render() {
        const detailId = this.props.detailId;
        const product = getProduct(detailId);
        return (
            <section className="section-padding pt-0">
                <div className="container tl-bg-color">
                    <div className="row">
                        <div className="col-lg-12 sa-pdrl8">
                            <div className="tl-shop-title-area d-flex justify-content-between">
                                <div className="tl-shop-title">
                                    <h2>Similar Products</h2>
                                </div>
                            </div>
                        </div>
                        {/* Data */}
                        {getProductByCategory(product.category, detailId).slice(0, 4).map((item, i) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                                <div className="img-shop-wrapper tl-shop-single">
                                    <div className="tl-img-shop">
                                        <img src={process.env.PUBLIC_URL + "/" + item.image[0]} alt={item.title} className="mx-auto image-fluid d-block" />
                                    </div>
                                    <div className="tl-product-content">
                                        <h4><Link to={"/shop-details/" + item.id}>{item.title}</Link></h4>
                                        <p>${new Intl.NumberFormat().format((item.price).toFixed(2))}</p>
                                        {/* Cart */}
                                        {item.stock === true ?
                                            <Link to="#" className="btn btn-sm">Add To Cart</Link>
                                            :
                                            <Link to="#" className="btn btn-sm" onClick={handleOutofStock}>Add To Cart</Link>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Relatedproducts;