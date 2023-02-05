import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Footer from '../layouts/Footer';
import Content from '../sections/sermon/Content';

const pagelocation = "Sermon Grid";

class Sermon extends Component {
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
                <Content
                    tagId={this.props.match.params.tagId}
                    authorId={this.props.match.params.authorId}
                />
                <Footer/>
            </Fragment>
        );
    }
}

export default Sermon;