import React, { Component } from 'react';
import banner from "../../../data/banner.json";
import OwlCarousel from 'react-owl-carousel2';
import { Link } from 'react-router-dom';

const settings = {
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 }
    }
}
class Banner extends Component {
    render() {
        return (
            <section id="intro">
                <div className="overlay overlay-bg" />
                <OwlCarousel options={settings}>
                    {/* Data */}
                    {banner.map((item, i) => (
                        <div key={i} className="item section-padding" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/" + item.bgimage + ")" }}>
                            <div className="container">
                                <div className="intro_text white_text">
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                    <Link to="/event" className="btn dark-btn templezen-top-btn">Explore Events</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Data */}
                </OwlCarousel>
            </section>
        );
    }
}

export default Banner;