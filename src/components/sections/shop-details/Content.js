import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { handleOutofStock, getProduct } from '../../../helper/shopHelper';
import { getTags, getCategories, getAuthor, Rating } from '../../../helper/helper';
import { Tab, Nav } from 'react-bootstrap';
import Slider from 'react-slick';

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true
}
const settingsThumb = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
}
class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty: 1,
            nav1: null,
            nav2: null
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({
            qty: this.state.qty + 1
        });
    }
    decrement() {
        this.setState({
            qty: this.state.qty > 1 ? this.state.qty - 1 : 1
        });
    }
    handleChange(event) {
        this.setState({ qty: event.target.value });
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    render() {
        const detailId = this.props.detailId;
        const item = getProduct(detailId);
        return (
            <Fragment>
                <section className=" section-padding tl-product-details-section pb-0">
                    <div className="container sa-bg-color">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 ss-synced-slider-2">
                                <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="sa-product-images ss-slider-sync-content">
                                    {/* Data */}
                                    {item.image.map((image, i) => (
                                        <img key={i} src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                                    ))}
                                    {/* Data */}
                                </Slider>
                                <Slider {...settingsThumb} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="ss-slider-sync-nav">
                                    {/* Data */}
                                    {item.image.map((image, i) => (
                                        <img key={i} src={process.env.PUBLIC_URL + "/" + image} alt={item.title} />
                                    ))}
                                    {/* Data */}
                                </Slider>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="tl-single-product-details-area">
                                    <div className="tl-single-product-details-social">
                                        <ul>
                                            <li><Link to="#"><i className="fa fa-share-alt" /></Link></li>
                                        </ul>
                                    </div>
                                    <div className="tl-single-product-details">
                                        <h2>{item.title}</h2>
                                        <div className="tl-single-product-purches">
                                            <div className="tl-single-product-rating">
                                                {Rating(item.rating)}
                                                <Link to="#"> <span>{item.reviews.length} reviews</span></Link>
                                            </div>
                                            <h4>${new Intl.NumberFormat().format((item.price).toFixed(2))}</h4>
                                            <div className="quantity">
                                                <button className="minus-btn" type="button" name="button" onClick={this.decrement}><i className="fa fa-minus" aria-hidden="true" /></button>
                                                <input type="text" name="name" value={this.state.qty} onChange={this.handleChange.bind(this)} />
                                                <button className="plus-btn" type="button" name="button" onClick={this.increment}><i className="fa fa-plus" aria-hidden="true" /></button>
                                            </div>
                                        </div>
                                        <div className="ss-product-btn mb-4">
                                            {item.stock === true ?
                                                <Link to="#" className="btn dark-btn">Add To Cart</Link>
                                                :
                                                <Link to="#" className="btn dark-btn" onClick={handleOutofStock}>Add To Cart</Link>
                                            }
                                        </div >
                                        <h5>Short Description</h5>
                                        <p>{item.shorttext}</p>
                                        <div className="tl-shop-product-bottom-meta">
                                            <div className="tl-shop-tags-meta">
                                                <span><strong>Tags:</strong>
                                                    {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                        <Link to={"/tag/cat/" + tag.id} key={i}>{tag.title} , </Link>
                                                    ))}
                                                </span>
                                            </div>
                                            <div className="tl-shop-catg-meta">
                                                <span><strong>Category:</strong>
                                                    {getCategories(item.category).slice(0, 3).map((cat, i) => (
                                                        <Link to={"/shop/cat/" + cat.id} key={i}>{cat.title} , </Link>
                                                    ))}
                                                </span>
                                            </div >
                                        </div >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </section >
                <Tab.Container defaultActiveKey="tab1">
                    <section className="section-padding tl-product-details-section pb-0">
                        <div className="container tl-mrt30 sa-bg-color">
                            <div className="row">
                                <div className="col-lg-12 no-padding">
                                    <div className="tl-product-review">
                                        <Nav as="ul" variant="pills" className="nav nav-pills top-nav">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="tab1">Description</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="tab2">Review ({item.reviews.length})</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="tab1">
                                                <h2>Product Details</h2>
                                                <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="tab2">
                                                <div id="comments">
                                                    <div className="all_comments">
                                                        <h4>{item.reviews.length} Reviews</h4>
                                                        <ul className="commentlist bd">
                                                            {/* Data */}
                                                            {item.reviews.map((review, i) => (
                                                                <li className="comment" key={i}>
                                                                    {getAuthor(review.user).map((user, i) => (
                                                                        <div className="comment the-comment" key={i}>
                                                                            <div className="comment-avatar">
                                                                                <img src={process.env.PUBLIC_URL + "/" + user.image} alt={user.name} className="avatar" />
                                                                            </div>
                                                                            <div className="comment-content">
                                                                                <div className="comment-meta">
                                                                                    <span className="comment-author"> <Link to="#" className="url">{user.name}</Link></span> <span className="comment-time">/ {review.commentdate}</span>
                                                                                </div>
                                                                                <div className="tl-review-ratings">
                                                                                    {Rating(review.rating)}
                                                                                    <span />
                                                                                </div>
                                                                                <div className="text">
                                                                                    <div className="comment-text">
                                                                                        <p>{review.comment}</p>
                                                                                        <span className="reply"> <Link to="#" rel="nofollow" className="comment-reply-link"><i className="fa fa-comments" /> Reply</Link> </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </li>
                                                            ))}
                                                            {/* Data */}
                                                        </ul>
                                                    </div>
                                                    {/* /all-comment */}
                                                    {/* comment-form*/}
                                                    <div id="respond" className="comment-respond">
                                                        <h4>Post A Reviews</h4>
                                                        <h6>Give Rating</h6>
                                                        <div className="tl-review-ratings">
                                                            <Link to="#"> <i className="fa fa-star" /> </Link>
                                                            <Link to="#"> <i className="fa fa-star" /> </Link>
                                                            <Link to="#"> <i className="fa fa-star" /> </Link>
                                                            <Link to="#"> <i className="fa fa-star" /> </Link>
                                                            <Link to="#"> <i className="fa fa-star" /> </Link>
                                                            <span />
                                                        </div>
                                                        <form id="commentform" className="comment-form">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="text" className="form-control" name="Name" placeholder="Name" required />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <input type="email" className="form-control" name="email" placeholder="Email" required />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <textarea name="Message" cols={45} rows={3} className="form-control" placeholder="Message" required />
                                                            </div>
                                                            <div className="form-group">
                                                                <input className="btn dark-btn" defaultValue="Submit" type="submit" />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Tab.Container>
            </Fragment >
        );
    }
}

export default Content;