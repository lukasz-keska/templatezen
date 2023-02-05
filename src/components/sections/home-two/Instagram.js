import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import instagram from "../../../data/instagram.json";

class Instagram extends Component {
    render() {
        return (
            <section className="section-padding p-0">
                <div className="container">
                    <div className="section-header-center text-center">
                        <h2>Instagram</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some</p>
                    </div>
                </div>
                <ul className="hm-list hm-instagram">
                    {/* Data */}
                    {instagram.map((item, i) => (
                        <li key={i}>
                            <Link to="#"><img src={process.env.PUBLIC_URL + "/" + item.image} alt="instagram" /></Link>
                        </li>
                    ))}
                    {/* Data */}
                </ul>
            </section>
        );
    }
}

export default Instagram;