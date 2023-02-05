import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <section id="inner_intro" className="section-padding">
                <div className="container">
                    <div className="inner_wp z_index white_text">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">{this.props.breadcrumb.pagename}</h1>
                                <nav className="breadcrumb">
                                    <ul>
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active">{this.props.breadcrumb.pagename}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Breadcrumbs;