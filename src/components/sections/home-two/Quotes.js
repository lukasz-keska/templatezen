import React, { Component } from 'react';
import quotes from "../../../data/quotes.json";

class Quotes extends Component {
    render() {
        return (
            <section id="causes" className="section-padding gray_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {/* Data */}
                            {quotes.slice(0, 1).map((item, i) => (
                                <div className="causes_info custom-text ml-0" key={i}>
                                    <p className="subtitle text-white">{item.source}</p>
                                    <h3 className="white_text fs-36">{item.title}</h3>
                                    <p className="white_text mb-0">{item.text}</p>
                                </div>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Quotes;