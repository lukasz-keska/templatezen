import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Packages extends Component {
    render() {
        return (
            <section className="trip-section section-padding secondary-bg">
                <div className="container">
                    <div className="trip-pack">
                        <div className="section-header-center text-center">
                            <h3>Yatra Package</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-4">
                            <div className="trip-box-wrapper">
                                <div className="trip-date"><Link to="/contact" className="text-white"> 29, June</Link></div>
                                <div className="trip-box-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/home-page/yatra-2.jpg"} alt="img" className="img-fluid" />
                                </div>
                                <div className="trip-box-content">
                                    <div className="ratings">
                                        <div className="rating-stars mr-2">
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span><i className="fa fa-star" /></span>
                                        </div>
                                        <span className="trip-location"><i className="fas fa-map-marker-alt" /> Kedarnath</span>
                                    </div>
                                    <h6>dapibus Vivamus elementum</h6>
                                    <p>Integer tincidunt, Cras dapibus, Vivamus elementum semper nisi, Aenean vulputate eleifend tellus.</p>
                                    <ul className="list-class">
                                        <li><span><i className="fas fa-binoculars" /></span> Sightseeing</li>
                                        <li><span><i className="fas fa-bus" /></span> Accommodation</li>
                                        <li><span><i className="fas fa-utensils" /></span> Meals</li>
                                    </ul>
                                </div>
                                <div className="review-button">
                                    <Link to="/contact" className="btn btn-block btn-sm">Book Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-4">
                            <div className="trip-box-wrapper">
                                <div className="trip-date"><Link to="/contact" className="text-white"> 13, March</Link></div>
                                <div className="trip-box-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/home-page/yatra-4.jpg"} alt="img" className="img-fluid" />
                                </div>
                                <div className="trip-box-content">
                                    <div className="ratings">
                                        <div className="rating-stars mr-2">
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span><i className="fa fa-star" /></span>
                                            <span><i className="fa fa-star" /></span>
                                        </div>
                                        <span className="trip-location"><i className="fas fa-map-marker-alt" /> Banaras</span>
                                    </div>
                                    <h6>Vivamus elementum semper</h6>
                                    <p>Integer tincidunt, Cras dapibus, Vivamus elementum semper nisi, Aenean vulputate eleifend tellus.</p>
                                    <ul className="list-class">
                                        <li><span><i className="fas fa-binoculars" /></span> Sightseeing</li>
                                        <li><span><i className="fas fa-bus" /></span> Accommodation</li>
                                        <li><span><i className="fas fa-utensils" /></span> Meals</li>
                                    </ul>
                                </div>
                                <div className="review-button">
                                    <Link to="/contact" className="btn btn-block btn-sm">Book Now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-4">
                            <div className="trip-box-wrapper">
                                <div className="trip-date"><Link to="/contact" className="text-white"> 19, May</Link></div>
                                <div className="trip-box-img">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/home-page/yatra-5.jpg"} alt="img" className="img-fluid" />
                                </div>
                                <div className="trip-box-content">
                                    <div className="ratings">
                                        <div className="rating-stars mr-2">
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                            <span className="rate"><i className="fa fa-star" /></span>
                                        </div>
                                        <span className="trip-location"><i className="fas fa-map-marker-alt" /> Haridwar</span>
                                    </div>
                                    <h6>dapibus Vivamus elementum</h6>
                                    <p>Integer tincidunt, Cras dapibus, Vivamus elementum semper nisi, Aenean vulputate eleifend tellus.</p>
                                    <ul className="list-class">
                                        <li><span><i className="fas fa-binoculars" /></span> Sightseeing</li>
                                        <li><span><i className="fas fa-bus" /></span> Accommodation</li>
                                        <li><span><i className="fas fa-utensils" /></span> Meals</li>
                                    </ul>
                                </div>
                                <div className="review-button">
                                    <Link to="/contact" className="btn btn-block btn-sm">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Packages;