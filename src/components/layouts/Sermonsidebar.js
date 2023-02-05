import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getRecentPost } from "../../helper/sermonHelper";
import { getAuthor } from "../../helper/helper";

class Sermonsidebar extends Component {
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar_widgets p-0">
                    <div className="popular_sermon">
                        <div className="sidebar_title">
                            <h6>Popular Sermons</h6>
                        </div>
                        {/* Data */}
                        {getRecentPost().map((item, i) => (
                            <div className="sermons_list" key={i}>
                                <h6><Link to={"/sermon-details/" + item.id}>{item.title}</Link></h6>
                                <ul className="sermons_meta">
                                    <li><i className="fa fa-user" /> Message from
                                        {getAuthor(item.author).map((author, i) => (
                                            <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                        ))}
                                    </li>
                                    <li><i className="far fa-calendar-alt" /> {item.postdate}</li>
                                </ul>
                            </div>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>

        );
    }
}

export default withRouter(Sermonsidebar);