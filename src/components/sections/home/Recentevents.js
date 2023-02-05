import React, { Component, Fragment } from 'react';
import { getRecentPost, getDateInitial } from "../../../helper/eventHelper";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2500,
    dots: false,
    arrows: false,
    vertical: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
}
class Recentevents extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        return (
            <Fragment>
                <div className="heading">
                    <h3>Latest Events</h3>
                    <div className="tl-slider-arrow float-right">
                        <div className="tl-left-arrow slick-arrow mr-2" onClick={this.previous}>
                            <span><i className="fa fa-chevron-up" /></span>
                        </div>
                        <div className="tl-right-arrow slick-arrow" onClick={this.next}>
                            <span><i className="fa fa-chevron-down" /></span>
                        </div>
                    </div>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings} className="event_list event-slider slick-vertical">
                    {/* Data */}
                    {getRecentPost().map((item, i) => (
                        <div key={i} className="event-slider-item pb-4">
                            <div className="row">
                                <div className="col-12">
                                    <div className="event-list">
                                        <ul>
                                            {/* Data */}
                                            <li>
                                                <div className="event_info">
                                                    <div className="event_date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.date) }} />
                                                    <h6><Link to={"/event-details/" + item.id}>{item.title.slice(0, 25)}..</Link></h6>
                                                    <ul>
                                                        <li><i className="far fa-clock" /> {item.timeday}</li>
                                                        <li><i className="fas fa-map-marker-alt" />{item.location}</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            {/* Data */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </Slider>
            </Fragment>
        );
    }
}

export default Recentevents;