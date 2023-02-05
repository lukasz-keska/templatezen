import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/home-two/Content';

const pagelocation = "Strona główna";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Biuro Thot | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags> 
                <Header/>
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;