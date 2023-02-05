import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventpost from "../../../data/event/event.json";
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

class Upcomingevent extends Component {
    render() {
        return (
            <section className="section-padding call-action-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {eventpost.slice(0, 1).map((item, i) => (
                                <div className="call-content mx-auto text-center event-content" key={i}>
                                    <p className="subtitle text-white">Upcoming Event</p>
                                    <h3 className="text-white fs-36">{item.title}</h3>
                                    <p className="text-white">{item.shorttext.slice(0, 120)}</p>
                                </div>
                            ))}
                            <div className="timer event-timer">
                                <Countdown
                                    date={Date.now() + 31622400000}
                                    renderer={renderer}
                                />
                                <Link to="/register" className="btn btn-lg dark-btn margin-top-30">Register Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Upcomingevent;