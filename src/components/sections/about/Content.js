import React, { Component, Fragment } from 'react';
import Abouttext from "./Abouttext";
import Video from './Video';
import Team from './Team';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Abouttext />
                <Video />
                <Team />
            </Fragment>
        );
    }
}

export default Content;