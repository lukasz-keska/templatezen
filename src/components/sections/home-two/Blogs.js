import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getRecentPost, getDateInitial } from "../../../helper/blogHelper";
import { getTags } from "../../../helper/helper";
import OwlCarousel from 'react-owl-carousel2';

const settings = {
    autoplay: false,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoHeight: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 3
        }
    }
}

class Blogs extends Component {
    render() {
        return (
            <section className="latest_blog section-padding" id="blog">
                <div className="container">
                    <div className="blog">
                        <div className="section-header-center text-center">
                            <h3>Latest News</h3>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <OwlCarousel options={settings} className="blog-slider owl-carousel">
                                    {/* Data */}
                                    {getRecentPost().map((item, i) => (
                                        <div className="item" key={i}>
                                            <article className="blog-section">
                                                <div className="blog_wrap position-relative">
                                                    <div className="blog-post-date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.postdate) }}/>
                                                    <div className="blog_img">
                                                        <Link to={"/blog-details/" + item.id}><img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} /></Link>
                                                    </div>
                                                    <div className="blog_info">
                                                        <div className="post_meta">
                                                            {/* Data */}
                                                            {getTags(item.tags).slice(0, 2).map((tag, i) => (
                                                                <span key={i}><Link to={"/blog/tag/" + tag.id}>{tag.title}</Link></span>
                                                            ))}
                                                            {/* Data */}
                                                        </div>
                                                        <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link>
                                                        </h5>
                                                        <p>{item.shorttext.slice(0, 170)}</p>
                                                        <Link to={"/blog-details/" + item.id} className="btn">Read More <i className="fa fa-caret-right" /> </Link>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    ))}
                                    {/* Data */}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blogs;