import React, { Component } from 'react';
import history from "../../../data/about.json";
import { Tab, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class History extends Component {
    render() {
        return (
            <section className="our_testimonials section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <img src={process.env.PUBLIC_URL + "/assets/images/home-page/our-history.png"} alt="img" className="img-fluid Mb_20" />
                        </div>
                        <div className="col-md-6 align-self-center">
                            <div className="about_company">
                                <div className="section-header">
                                    <h3>Our History</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                        suffered alteration in some</p>
                                </div>
                                <Tab.Container defaultActiveKey="tab10">
                                    <Nav as="ul" variant="tabs" className="nav nav-tabs testi-nav-tabs">
                                        {/* Data */}
                                        {history.map((item, i) => (
                                            <Nav.Item as="li" key={i}>
                                                <Nav.Link eventKey={"tab" + 1 + i}>{item.title}</Nav.Link>
                                            </Nav.Item>
                                        ))}
                                        {/* Data */}
                                    </Nav>
                                    {/* Tab panes */}
                                    <Tab.Content>
                                        {history.map((item, i) => (
                                            <Tab.Pane eventKey={"tab" + 1 + i} key={i}>
                                                <br />
                                                <h4>{item.title}</h4>
                                                <p>{item.text}</p>
                                                <Link to="/about" className="btn-link tk-btn-link"><u>Learn More <i className="fa fa-angle-right" /></u></Link>
                                            </Tab.Pane>
                                        ))}
                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default History;