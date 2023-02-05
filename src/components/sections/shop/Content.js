import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shopblock from '../../../data/shop/shop.json';
import { getFilteredproducts, handleOutofStock } from '../../../helper/shopHelper';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getProducts(),
            activePage: 1,
            itemPerpage: 9
        }
    }
    getProducts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var minPrice = this.props.minPrice ? this.props.minPrice : '';
        var maxPrice = this.props.maxPrice ? this.props.maxPrice : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredproducts(shopblock, { cat, tag, priceFilter: [minPrice, maxPrice], searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-lg-4 col-md-6 col-sm-6">
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
        });
        return (
            <section className="section-padding tl-shop-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="shop-top-filter">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <form>
                                            <div className="sort-select-filter">
                                                <select name="sorting" id="sorting-1">
                                                    <option value={0}>Default Sorting</option>
                                                    <option value={1}>A-Z Sorting</option>
                                                    <option value={2}>Z-A Sorting</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12">
                                        <select name="sorting" id="sorting-2">
                                            <option value={0}>1-6 Products</option>
                                            <option value={1}>6-16 Products</option>
                                            <option value={2}>16-25 Products</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-md-12 ">
                                        <div className="shop-view">
                                            <p> showing all {paginationData.length} result</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {/* Data */}
                                {paginationData}
                                {/* Data */}
                            </div>
                            {/* /Pagination /*/}
                            <div className="col-lg-12">
                                <div className="pagination_wrap">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <p>Page {this.state.activePage} of {this.state.data.length / this.state.itemPerpage}</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <Pagination
                                                activePage={this.state.activePage}
                                                itemsCountPerPage={this.state.itemPerpage}
                                                totalItemsCount={this.state.data.length}
                                                pageRangeDisplayed={this.state.data.length}
                                                onChange={this.handlePageChange.bind(this)}
                                                innerClass="pagination"
                                                activeClass="active"
                                                itemClass="page-item"
                                                linkClass="page-link"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;