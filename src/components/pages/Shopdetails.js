import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/shop-details/Content';
import Relatedproducts from '../sections/shop-details/Relatedproducts';

const pagelocation = "Shop Details";

class Shopdetails extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Templezen - Buddhist Temple & Shop - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content detailId={this.props.match.params.id}/>
                <Relatedproducts detailId={this.props.match.params.id}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Shopdetails;