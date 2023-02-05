import React, { Component, Fragment } from 'react';
import { getRecentPost, getDateInitial } from "../../../helper/eventHelper";
import { Link } from 'react-router-dom';

class Recentevents extends Component {
    render() {
        return (
            <Fragment>
                <div className="heading">
                    <h3>Latest Events</h3>
                    <Link to="/event" className="btn btn-sm float-right">See All</Link>
                </div>
                <div className="event_list event-list-alignemt">
                    <ul>
                        {/* Data */}
                        {getRecentPost().slice(0, 3).map((item, i) => (
                            <li key={i}>
                                <div className="event_info">
                                    <h6><Link to={"/event-details/" + item.id}>{item.title.slice(0, 25)}..</Link></h6>
                                    <ul>
                                        <li><i className="far fa-clock" /> {item.timeday}</li>
                                        <li><i className="fas fa-map-marker-alt" />{item.location}</li>
                                    </ul>
                                    <div className="event_date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.date) }} />
                                </div>
                            </li>
                        ))}
                        {/* Data */}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Recentevents;