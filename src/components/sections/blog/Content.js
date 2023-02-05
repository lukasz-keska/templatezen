import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import blogpost from '../../../data/blog/blog.json';
import { getFilteredPosts, getDateInitial } from '../../../helper/blogHelper';
import { getTags } from '../../../helper/helper';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 4
        }
    }
    getPosts() {
        var cat = this.props.catId ? this.props.catId : '';
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.authorId ? this.props.authorId : '';
        var searchQuery = this.props.query ? this.props.query : '';
        var filteredItems = getFilteredPosts(blogpost, { cat, tag, author, searchQuery });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-md-6">
                <div className="blog_wrap margin-btm-60 position-relative">
                    <div className="blog-post-date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.postdate) }} />
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
                        <h5><Link to={"/blog-details/" + item.id}>{item.title}</Link></h5>
                        <p>{item.shorttext.slice(0, 170)}</p>
                        <Link to={"/blog-details/" + item.id} className="btn dark-btn">Details <i className="fa fa-caret-right" /> </Link>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="row">
                        {/* Data */}
                        {paginationData}
                        {/* Data */}
                    </div>
                    <div className="divider pb-3 clearfix" />
                    {/* Pagination */}
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
                    {/* /Pagination */}
                </div>
            </section>
        );
    }
}

export default Content;