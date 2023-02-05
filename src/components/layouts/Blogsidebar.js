import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/category.json";
import { getRecentPost } from "../../helper/blogHelper";

class Blogsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/blog/search/" + this.state.searchText);
        }
    }
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar_widgets">
                    <div className="search">
                        <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                            <input type="text" className="form-control" placeholder="Enter Keyword" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                        </form>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Categories</h6>
                    </div>
                    <div className="sidebar_nav">
                        <ul>
                            {/* Data */}
                            {category.map((item, i) => (
                                <li key={i}>
                                    <Link to={"/blog/cat/" + item.id}>{item.title} ({item.count})</Link>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Recent Post</h6>
                    </div>
                    <div className="recent_post">
                        <ul>
                            {/* Data */}
                            {getRecentPost().map((item, i) => (
                                <li key={i}>
                                    <div className="post_thumb">
                                        <Link to={"/blog-details/" + item.id}><img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} /></Link>
                                    </div>
                                    <h6><Link to={"/blog-details/" + item.id}>{item.title}</Link></h6>
                                    <p>{item.postdate}</p>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Tags</h6>
                    </div>
                    <div className="tag_cloud">
                        {/* Data */}
                        {tags.map((item, i) => (
                            <Link to={"/blog/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Blogsidebar);