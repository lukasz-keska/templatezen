import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import HeaderComponent from "../../helper/navhelper";
import navigation from '../../data/navigation.json';

class Mobilemenu extends HeaderComponent {
    render() {
        return (
            <ul className="wd-menu pop-scroll">
                {navigation.length > 0 ? navigation.map((item, i) => (
                    <li key={i} className={`${item.child ? 'has-child' : ''} `} onClick={this.triggerChild}>
                        {item.child ? <Fragment><Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> <div className="child-trigger"><i/></div></Fragment> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="sub-menu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'has-child' : ''} `}>
                                        {sub_item.child ? <Fragment><Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link><div className="child-trigger"><i/></div></Fragment> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
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
        );
    }
}

export default Mobilemenu;