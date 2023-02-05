import React, { Component } from 'react';
import banner from "../../../data/banner.json";
import { Link } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <section id="intro" className="tl-video-header">
                <div className="overlay" />
                <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                    <source src={process.env.PUBLIC_URL + "/assets/images/video-bg.mp4"} type="video/mp4" />
                </video>
                {/* Data */}
                {banner.slice(0, 1).map((item, i) => (
                    <div key={i}>
                        <div className="container">
                            <div className="intro_text white_text video_intro_text">
                                <h1>{item.title}</h1>
                                <p>{item.text}</p>
                                <Link to="/event" className="btn dark-btn templezen-top-btn">Explore Events</Link>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Data */}
            </section>

        );
    }
}

export default Banner;