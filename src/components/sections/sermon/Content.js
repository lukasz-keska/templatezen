import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import sermonpost from '../../../data/sermon/sermon.json';
import { getFilteredPosts } from '../../../helper/sermonHelper';
import { getAuthor } from '../../../helper/helper';
import { Tab, Nav } from 'react-bootstrap';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.getPosts(),
            activePage: 1,
            itemPerpage: 4
        }
    }
    getPosts() {
        var tag = this.props.tagId ? this.props.tagId : '';
        var author = this.props.authorId ? this.props.authorId : '';
        var filteredItems = getFilteredPosts(sermonpost, { tag, author });
        return filteredItems;
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    render() {
        const paginationDataList = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="sermons_wrap">
                <div className="sermons_img">
                    <Link to={"/sermon-details/" + item.id}>
                        <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} />
                    </Link>
                </div>
                <div className="sermons_info_wrap">
                    <div className="sermons_info">
                        <h5><Link to={"/sermon-details/" + item.id}>{item.title}</Link></h5>
                        <ul className="sermons_meta">
                            <li><i className="fa fa-user" /> Message from
                                {getAuthor(item.author).map((author, i) => (
                                    <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                ))}
                            </li>
                            <li><i className="far fa-calendar-alt" /> {item.postdate}</li>
                        </ul>
                    </div>
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
                </div>
            </div>
        });
        const paginationDataGrid = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div key={i} className="col-md-6">
                <div className="sermon_wrap margin-btm-60">
                    <div className="sermon_img">
                        <Link to={"/sermon-details/" + item.id}>
                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.title} className="w-100" />
                        </Link>
                    </div>
                    <div className="sermon-box">
                        <div className="sermons_meta">
                            <div><i className="fa fa-user" /> Message from
                                {getAuthor(item.author).map((author, i) => (
                                    <Link to={"/sermon/author/" + author.id} key={i}>{author.name}</Link>
                                ))}
                            </div>
                            <div><i className="far fa-calendar-alt" /> {item.postdate}</div>
                        </div>
                        <h4><Link to={"/sermon-details/" + item.id}>{item.title}</Link></h4>
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
                        <Link to={"/sermon-details/" + item.id} className="btn">Details <i className="fa fa-caret-right" /> </Link>
                    </div>
                </div>
            </div>
        });
        return (
            <section className="section-padding">
                <div className="container">
                    {/* Filter */}
                    <Tab.Container defaultActiveKey="tab1">
                        <div className="filter_wrap">
                            <div className="row">
                                <div className="col-md-6 col-6">
                                    <div className="select_arrow ">
                                        <select className="form-control gray_bg mb-0">
                                            <option>Filter Category</option>
                                            <option>mahabharat</option>
                                            <option>bhagwat gita</option>
                                            <option>Ramayan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-6">
                                    <div className="layout-switcher">
                                        <Nav as="ul" variant="pills" className="nav nav-pills">
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="tab1"><i className="fa fa-bars" /></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as="li">
                                                <Nav.Link eventKey="tab2"><i className="fa fa-th-large" /></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Filter */}
                        <Tab.Content>
                            <Tab.Pane eventKey="tab1">
                                <div className="list-view">
                                    {/* sermon-list-1 */}
                                    {paginationDataList}
                                    {/* /sermon-list-1 */}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="tab2">
                                <div className="grid-view">
                                    <div className="row">
                                        {/* Data */}
                                        {paginationDataGrid}
                                        {/* Data */}
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
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
            </section >
        );
    }
}

export default Content;