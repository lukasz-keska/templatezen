import React from 'react';
import Contactform from "../../../helper/Contacthelper";

class Content extends Contactform {
    render() {
        return (
            <section className="section-padding">
                <div className="container">
                    <div className="map_wrap">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7060970.521913474!2d-102.60272453381052!3d37.588245893295074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1495005824042" style={{ border: 0 }} allowFullScreen />
                    </div>
                    <div className="contact_wrap">
                        <div className="row">
                            <div className="col-md-6 primary-bg">
                                <div className="contact_info">
                                    <div className="box_heading">
                                        <h4><span>Request a</span> Free Consultation</h4>
                                    </div>
                                    <p>121 Park Drive, Varick Str, <br /> Newyork, USA</p>
                                    <p>Call us: <span>+1 800 258 500</span></p>
                                    <p>Mail us: <span>example@example.com</span></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form_wrap">
                                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Full Name" name="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email I'd" name="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Phone No." name="phone" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} required />
                                        </div>
                                        <div className="form-group">
                                            <textarea cols={45} rows={3} className="form-control" placeholder="Message" name="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} required />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn dark-btn" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;