import React, { Component, Fragment } from 'react';
import { getRecentPost } from "../../../helper/sermonHelper";
import { getAuthor } from "../../../helper/helper";
import { Link } from 'react-router-dom';
import { Accordion, Card, Button } from 'react-bootstrap';

class Recentsermons extends Component {
    render() {
        return (
            <Fragment>
                <div className="heading">
                    <h3>Latest sermons</h3>
                    <Link to="/sermons" className="btn btn-sm float-right">View All</Link>
                </div>
                <Accordion defaultActiveKey={1} className="d-block custom-accordion">
                    {getRecentPost().map((item, i) => (
                        <Card key={i}>
                            <Accordion.Collapse eventKey={1 + i} className="collapseparent">
                                <Card.Body>
                                    <ul className="sermons_meta">
                                        <li><i className="fa fa-user" /> Message from
                                            {getAuthor(item.author).map((author, i) => (
                                                <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                            ))}
                                        </li>
                                        <li><i className="far fa-calendar-alt" /> {item.postdate}</li>
                                    </ul>
                                    <div className="sermons_inside">
                                        <ul>
                                            {/* Data */}
                                            {item.includes.map((include, i) => (
                                                <li key={i}><a rel={"external"} href={include.url}><i className={include.icon} /></a>
                                                </li>
                                            ))}
                                            {/* Data */}
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Accordion.Collapse>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey={1 + i}>
                                    {item.title}
                                </Accordion.Toggle>
                            </Card.Header>
                        </Card>
                    ))}
                </Accordion>
            </Fragment>
        );
    }
}

export default Recentsermons;