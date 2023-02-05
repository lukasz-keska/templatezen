import React, { Component } from 'react';
import quotes from "../../../data/quotes.json";
import OwlCarousel from 'react-owl-carousel2';

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
class Quotes extends Component {
    render() {
        return (
            <section id="causes" className="section-padding gray_bg">
                <div className="container">
                    <OwlCarousel options={settings}>
                        {/* Data */}
                        {quotes.map((item, i) => (
                            <div className="item" key={i}>
                                <div className="causes_info">
                                    <p className="subtitle text-white">{item.source}</p>
                                    <h3 className="white_text">{item.title}</h3>
                                    <p className="white_text mb-0">{item.text}</p>
                                </div>
                            </div>
                        ))}
                        {/* Data */}
                    </OwlCarousel>
                </div>
            </section>
        );
    }
}

export default Quotes;