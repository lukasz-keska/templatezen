import React, { Component } from 'react';
import features from "../../../data/features.json";

class Abouttext extends Component {
    render() {
        return (
            <section className="about_intro section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-md-7">
                            <div className="about-us-content">
                                <div className="section-header">
                                    <h2>some important life lessons from lord <u className="text-custom-primary">buddha</u></h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-5 align-self-center">
                            <div className="about-us-image">
                                <img src={process.env.PUBLIC_URL + "/assets/images/lotus.png"} alt="img" className="img-fluid mx-auto d-block" />
                            </div>
                        </div>
                    </div>
                    {/* Features */}
                    <div className="features">
                        <div className="row">
                            {/* Data */}
                            {features.map((item, i) => (
                                <div className="col-lg-4 col-md-6" key={i}>
                                    <div className="features_wrap features-after-none">
                                        <div className="f-f-icon"><img src={process.env.PUBLIC_URL + "/" + item.icon} alt={item.title} /></div>
                                        <h4 className="text-custom-secondary">{item.title}</h4>
                                        <p className="mb-0">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Data */}
                        </div>
                    </div>
                    {/* /Features */}
                </div>
            </section>
        );
    }
}

export default Abouttext;