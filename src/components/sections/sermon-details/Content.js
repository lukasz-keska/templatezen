import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getSermon } from '../../../helper/sermonHelper';
import { getAuthor, socialShare, getTags } from '../../../helper/helper';
import Sidebar from '../../layouts/Sermonsidebar';

class Content extends Component {
    constructor(props) {
        super(props);
        this.openSocialPopup = this.openSocialPopup.bind(this);
    }
    // Open window
    openSocialPopup(social) {
        window.open(social.link, "MsgWindow", "width=600,height=600")
        // alert(social.title)
    }
    render() {
        const detailId = this.props.detailId;
        const item = getSermon(detailId);
        return (
            <section className="post_detail section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4>{item.title}</h4>
                            <ul className="sermons_meta">
                                <li><i className="fa fa-user" /> Message from
                                    {getAuthor(item.author).map((author, i) => (
                                        <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                    ))}
                                </li>
                                <li><i className="far fa-calendar-alt" /> {item.postdate}</li>
                            </ul>
                            <div className="post_img">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="w-100" />
                                <div className="sermons_inside">
                                    <ul>
                                        {/* Data */}
                                        {item.includes.map((include, i) => (
                                            <li key={i}><a rel={"external"} href={include.url}><i className={include.icon} /></a>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                            {/* Tags-Share */}
                            <div className="tags_share">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="psot_share">
                                            <span><strong>Share:</strong></span>
                                            {socialShare(item.title).map((social, i) => (
                                                <Link to="#" key={i} onClick={(e) => this.openSocialPopup(social, i)}>
                                                    <i className={social.iconClass} />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="psot_tags">
                                            <span><strong>Tags:</strong></span>
                                            {getTags(item.tags).slice(0, 3).map((tag, i) => (
                                                <Link to={"/sermon/tag/" + tag.id} key={i}> {tag.title}, </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Comments */}
                            <div id="comments">
                                <div className="all_comments">
                                    <h4>{item.reviews.length} Comments</h4>
                                    <ul className="commentlist">
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
                                                            <div className="text">
                                                                <div className="comment-text">
                                                                    <p>{review.comment}</p>
                                                                    <span className="reply"> <Link to="#" rel="nofollow" className="comment-reply-link"><i className="fa fa-comments" /> Reply</Link> </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <ol>
                                                    {/* Data */}
                                                    {review.replies.map((review, i) => (
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
                                                </ol>
                                            </li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                                {/* /all-comment */}
                                {/* comment-form*/}
                                <div id="respond" className="comment-respond">
                                    <h4>Post A Comments</h4>
                                    <form id="commentform" className="comment-form">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Your Name</label>
                                                    <input type="text" className="form-control" name="Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Your Email</label>
                                                    <input type="email" className="form-control" name="email" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Comment</label>
                                            <textarea name="message" cols={45} rows={3} className="form-control" required />
                                        </div>
                                        <div className="form-group">
                                            <input className="btn dark-btn" defaultValue="Submit" type="submit" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <aside className="col-md-4">
                            <Sidebar />
                        </aside>
                        {/* /Sidebar */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;