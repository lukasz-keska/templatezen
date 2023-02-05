import React from 'react';
import { Link } from 'react-router-dom';
import Videohelper from '../../helper/Videohelper';

class Footer extends Videohelper {
    render() {
        return (
            <footer id="footer">
                {/* Footer-Top */}
                <div className="footer_top primary-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 top_widget">
                                <div className="footer_logo">
                                    <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-md-4 top_widget">
                                <div className="newsletter">
                                    <form>
                                        <div className="email_input">
                                            <input type="email" placeholder="Email address" required />
                                        </div>
                                        <button type="submit">Submit <i className="fa fa-caret-right" /></button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4 top_widget">
                                <div className="follow_us">
                                    <ul className="text-custom-align-right">
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer-Top */}
                {/* Footer-Widgets */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer_widget">
                            <div className="widget_inner">
                                <h5>Contact Us</h5>
                                <p>4873 New York,47</p>
                                <p>E: <a rel={"external"} href={"example@example.com"}>example@example.com</a></p>
                                <p>P: +011 4532 5698 303</p>
                            </div>
                        </div>
                        <div className="col-md-4 footer_widget">
                            <div className="widget_inner">
                                <div className="video_post">
                                    <div className="exp-vido-icon">
                                        <div className="video_post_icon">
                                            <a rel={"external"} className="popup-youtube" href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"}><i className="fa fa-play" /></a>
                                        </div>
                                    </div>
                                    <img src={process.env.PUBLIC_URL + "/assets/images/home-page/sermon-video-02.png"} alt="img" className="mx-auto image-fluid d-block" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 footer_widget">
                            <div className="widget_inner">
                                <h5>Useful Links</h5>
                                <div className="footer_nav">
                                    <ul>
                                        <li><Link to="/about">FAQ</Link></li>
                                        <li><Link to="/login">Account</Link></li>
                                        <li><Link to="/about">Privacy Policy</Link></li>
                                        <li><Link to="/cart">Cart</Link></li>
                                        <li><Link to="/about">Terms &amp; Conditions</Link></li>
                                        <li><Link to="/checkout">Checkout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer-Widgets */}
                {/* Footer-Bottom */}
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 align-self-center">
                                <p className="mb-0">© 2021 Website All Rights Reserved</p>
                            </div>
                            <div className="col-lg-4 align-self-center">
                                <div id="back-top" className="back-top">
                                    <Link to="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fa fa-angle-up" aria-hidden="true" /> </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 align-self-center">
                                <div className="footer_links">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About Us</Link>
                                    <Link to="/sermon">Sermon</Link>
                                    <Link to="/event">Event</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Footer-Bottom */}
            </footer>
        );
    }
}

export default Footer;