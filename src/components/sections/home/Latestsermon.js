import React, { Component, Fragment } from 'react';
import { getRecentPost } from "../../../helper/sermonHelper";
import { getAuthor } from "../../../helper/helper";
import { Link } from 'react-router-dom';

class Latestsermon extends Component {
    render() {
        return (
            <Fragment>
                {getRecentPost().slice(0, 1).map((item, i) => (
                    <div className="box_wrap next_sermons" key={i}>
                        <p className="subtitle">Latest Sermons</p>
                        <h4><Link to={"/sermon-details/" + item.id}>{item.title}</Link></h4>
                        <ul className="sermons_meta">
                            <li><i className="fa fa-user" /> Message from
                                {getAuthor(item.author).map((author, i) => (
                                    <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                ))}
                            </li>
                            <li><i className="far fa-calendar-alt" /> {item.postdate}</li>
                        </ul>
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
                        <div className="audio-player">
                            <div id="play-btn">
                                <i className="fa fa-play"> </i>
                                <i className="fa fa-pause" />
                            </div>
                            <div className="audio-wrapper" id="player-container">
                                <audio id="player">
                                </audio>
                            </div>
                            <div className="player-controls scrubber">
                                <small className="end-time">5:44</small>
                                <span id="seekObjContainer"> <progress id="seekObj" value={0} max={1} /> </span>
                                <i className="fa fa-volume-up" />
                            </div>
                            <div className="next_prev">
                                <i className="fa fa-angle-left" />
                                <i className="fa fa-angle-right" />
                            </div>
                        </div>
                    </div>

                ))}
            </Fragment>
        );
    }
}

export default Latestsermon;