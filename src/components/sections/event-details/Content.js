import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getEvent, getDateInitial } from '../../../helper/eventHelper';
import { getAuthor, socialShare } from '../../../helper/helper';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <div id="countdown"><span className="countdown-period">{days} <span>Day</span></span> <span className="countdown-period">{hours} <span>Hours</span></span> <span className="countdown-period">{minutes} <span>Minutes</span></span> <span className="countdown-period">{seconds} <span>Seconds</span></span>
        </div>;
    }
};

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
        const item = getEvent(detailId);
        return (
            <section className="post_detail section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2>{item.title}</h2>
                            <div className="post_meta">
                                <ul>
                                    <li><i className="far fa-clock" /> {item.timeday}</li>
                                    <li><i className="fas fa-map-marker-alt" /> {item.location}</li>
                                </ul>
                            </div>
                            <div className="post_img">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="w-100" />
                                <div className="event_timer">
                                    <div className="date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.date) }} />
                                    <div className="timer">
                                        <Countdown
                                            date={Date.now() + 31622400000}
                                            renderer={renderer}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                            <br />
                            <Link to="#" className="btn mr-2"><i className="fa fa-plus" /> Google Cal</Link>
                            <Link to="#" className="btn"><i className="fa fa-plus" /> ICAL EXPORT</Link>
                            <br /><br />
                            {/* Share */}
                            <div className="tags_share">
                                <div className="psot_share border-0">
                                    <span><strong>Share:</strong></span>
                                    {socialShare(item.title).map((social, i) => (
                                        <Link to="#" key={i} onClick={(e) => this.openSocialPopup(social, i)}>
                                            <i className={social.iconClass} />
                                        </Link>
                                    ))}
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
                        </div>
                        {/* Sidebar */}
                        <aside className="col-md-4">
                            <div className="sidebar_wrap">
                                <div className="sidebar_widgets p-0">
                                    <div className="event_venue">
                                        <div className="sidebar_title">
                                            <h6>Informations</h6>
                                        </div>
                                        <ul>
                                            <li><span>Date:</span> {item.date}</li>
                                            <li><span>Time:</span> {item.timeday}</li>
                                            <li><span>event:</span> {item.place}</li>
                                            <li><span>Organizer:</span> {item.organiser}</li>
                                            <li><span>Phone:</span> {item.phone}</li>
                                            <li><span>Email:</span> {item.email}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        {/* /Sidebar */}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;