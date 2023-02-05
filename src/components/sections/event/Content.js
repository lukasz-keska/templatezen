import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import eventpost from '../../../data/event/event.json';
import { getDateInitial } from '../../../helper/eventHelper';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: eventpost,
            activePage: 1,
            itemPerpage: 4
        }
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="events_wrap">
                <div className="event_date" dangerouslySetInnerHTML={{ __html: getDateInitial(item.date) }} />
                <div className="event_img">
                    <Link to={"/event-details/" + item.id}><img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} /></Link>
                </div>
                <div className="event_info">
                    <h4><Link to={"/event-details/" + item.id}>{item.title}</Link></h4>
                    <p>{item.shorttext}</p>
                    <ul>
                        <li><i className="far fa-clock" /> {item.timeday}</li>
                        <li><i className="fas fa-map-marker-alt" /> {item.location}</li>
                    </ul>
                    <Link to={"/event-details/" + item.id} className="btn dark-btn">Join Now <i className="fa fa-caret-right" /> </Link>
                </div>
            </div>
        });
        return (
            <section className="section-padding">
                <div className="container">
                    {/* Data */}
                    {paginationData}
                    {/* /Data */}
                    <div className="divider pb-3 clearfix" />
                    {/* Pagination */}
                    <div className="pagination_wrap">
                        <div className="row">
                            <div className="col-sm-6">
                                <p>Page {this.state.activePage} of {this.state.data.length / this.state.itemPerpage}</p>
                            </div>
                            <div className="col-sm-6">
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination"
                                    activeClass="active"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                            </div>
                        </div>
                    </div>
                    {/* /Pagination */}
                </div>
            </section>
        );
    }
}

export default Content;