import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogs from './Blogs';
import Donation from './Donation';
import History from './History';
import Instagram from './Instagram';
import Latestsermon from './Latestsermon';
import Quotes from './Quotes';
import Recentevents from './Recentevents';
import Recentsermon from './Recentsermon';
import Upcomingevent from './Upcomingevent';
import Video from './Video';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <section className="latest_event_sermons home-sermon">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <Latestsermon />
                            </div>
                            <div className="col-md-6">
                                <Video />
                            </div>
                        </div>
                    </div>
                </section>
                <Abouttext />
                <Quotes />
                <section className="section-padding latest_event_sermons m-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-5">
                                <Recentevents />
                            </div>
                            <div className="col-md-6 col-lg-5 offset-lg-2">
                                <Recentsermon />
                            </div>
                        </div>
                    </div>
                </section>
                <Donation />
                <History />
                <Upcomingevent />
                <Blogs />
                <Instagram />
            </Fragment>
        );
    }
}

export default Content;