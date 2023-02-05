import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <header className="tl-header tl-templezen-nav">
                    <div className="container">
                        <div className="tl-wrpr-inner">
                            <div className="tl-center tl-logo py-4 mx-auto">
                                <Link to="/">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row no-gutter">
                        <div className="col-md-12">
                            <div className="login py-5">
                                <div className="row">
                                    <div className="col-md-6 offset-col-6 mx-auto d-block login-page">
                                        <div className="login-page">
                                            <h4 className="title">Signup</h4>
                                            <p className="sub_title">Already have an account? <Link to="/login" className="color-litegreen">Login here!</Link></p>
                                        </div>
                                        <form className="login-form-t">
                                            <div className="form-label-group">
                                                <label htmlFor="inputName">Full Name</label>
                                                <input type="email" id="inputName" className="form-control" placeholder="Your Full Name" required />
                                            </div>
                                            <div className="form-label-group">
                                                <label htmlFor="inputEmail">Email address</label>
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Your Email address" required />
                                            </div>
                                            <div className="form-label-group">
                                                <label htmlFor="inputPassword">Password</label>
                                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            </div>
                                            <div className="form-label-group">
                                                <label htmlFor="inputPasswordRepeat">Re-type Password</label>
                                                <input type="password" id="inputPasswordRepeat" className="form-control" placeholder="Password" required />
                                            </div>
                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">I Agree With <Link to="#">Terms &amp; Conditions</Link></label>
                                            </div>
                                            <button className="btn btn-lg btn-block tl-btn-round-2 text-uppercase font-weight-bold mb-2" type="submit">Register</button>
                                            <div className="text-center">
                                                <Link to="#" className="small">Forgot password?</Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Content;