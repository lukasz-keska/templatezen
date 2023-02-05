import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import author from "../../../data/author.json";
import OwlCarousel from 'react-owl-carousel2';

const settings = {
    autoplay: true,
    lazyLoad: true,
    loop: true,
    margin: 20,
    dots: false,
    autoHeight: true,
    autoplayTimeout: 2000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        1024: {
            items: 3
        },

        1366: {
            items: 4
        }
    }
}
class Team extends Component {
    render() {
        return (
            <section className="section-padding" id="about-team">
                <div className="container">
                    <div className="our_team">
                        <div className="section-header-center text-center">
                            <h3>Our Teachers</h3>
                            <p>Will uncover many web sites still in their infancy. Various versions have Evolved over the years</p>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <OwlCarousel options={settings} className="team-carousel owl-carousel">
                                    {/* Data */}
                                    {author.map((item, i) => (
                                        <div className="item" key={i}>
                                            <div className="box_wrap">
                                                <div className="team_img">
                                                    <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                                                    <div className="team_url"><Link to={"/team-details/" + item.id}><i className="fa fa-plus" /></Link>
                                                    </div>
                                                </div>
                                                <div className="icon"><img src={process.env.PUBLIC_URL + "/assets/images/Tilak-team-icon.png"} alt="img" />
                                                </div>
                                                <h6>{item.name}</h6>
                                                <p>{item.post}</p>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Data */}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Team;