import React, { Component, Fragment } from 'react';
import Abouttext from './Abouttext';
import Banner from './Banner';
import Blogs from './Blogs';
import History from './History';
import Instagram from './Instagram';
import Packages from './Packages';
import Quotes from './Quotes';
import Recentsermon from './Recentsermon';
import Recentevents from './Recentevents';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Abouttext />
                <Quotes />
                <Packages />
                <section className="section-padding latest_event_sermons right-sermon m-0">
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
                <History />
                <Blogs />
                <Instagram />
            </Fragment>
        );
    }
}

export default Content;