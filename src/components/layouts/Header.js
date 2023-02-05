import React from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from "../../helper/navhelper";
import navigation from '../../data/navigation.json';
import Mobilemenu from './Mobilemenu';

class Header extends HeaderComponent {
    render() {
        return (
            <header id="header" className="nav-stacked">
                {/* Header-top */}
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-4 col-8">
                                <div className="follow_us">
                                    <ul>
                                        <li><Link to="#"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-youtube" /></Link></li>
                                        <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-8 col-4">
                                <ul className="top-btn list-inline">
                                    <li className="list-inline-item"><i className="fa fa-phone" /><Link to="#">+01 825-5552-852</Link></li>
                                    <li className="list-inline-item"><i className="fa fa-envelope" /><Link to="#">example@example.com</Link>
                                    </li>
                                    <li className="list-inline-item"><Link to="/donation" className="btn btn-sm dark-btn templezen-top-btn">Donate</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Header-top */}
                {/* Navigation */}
                <nav id="navigation_bar" className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <div className="logo">
                                <Link to="/"><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="logo" /></Link>
                            </div> {/* /Logo */}
                            <div id="menu_slide" className={this.state.navmethod === true ? 'mobile-open' : ''}>
                                <div id="nav-toggle-label">
                                    <div id="hamburger" onClick={this.toggleNav}>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div id="cross" onClick={this.toggleNav}>
                                        <span />
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navigation">
                            <ul className="nav navbar-nav">
                                {navigation.length > 0 ? navigation.map((item, i) => (
                                    <li key={i} className={`${item.child ? 'dropdown' : ''} `} onClick={this.triggerChild}>
                                        {item.child ? <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> : <Link to={item.link}> {item.linkText} </Link>}
                                        {item.child ?
                                            <ul className="sub-menu" role="menu">
                                                {item.submenu.map((sub_item, i) => (
                                                    <li key={i} className={`${sub_item.child ? 'dropdown' : ''} `}>
                                                        {sub_item.child ? <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                                        {sub_item.submenu ?
                                                            <ul className="sub-menu">
                                                                {sub_item.submenu.map((third_item, i) => (
                                                                    <li key={i}><Link
                                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                                    </li>
                                                                ))}
                                                            </ul> : null}
                                                    </li>
                                                ))}
                                            </ul>
                                            : null
                                        }
                                    </li>
                                )) : null}
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navigation end */}
                {/* Mobile Navigation */}
                <div className={this.state.navmethod === true ? 'mobile-menu mobile-open' : 'mobile-menu'}>
                    <Mobilemenu />
                </div>
                {/* END/Mobile Navigation */}
            </header>
        );
    }
}

export default Header;