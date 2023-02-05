import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import tags from "../../data/tags.json";
import category from "../../data/category.json";
import IonRangeSlider from 'react-ion-slider'

class Shopsidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            priceFilter: [1, 100],
            minPrice: 1,
            maxPrice: 0,
        };
    }
    // Search Filter
    onChange(event) {
        this.setState({ searchText: event.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        //const { history } = this.props;
        if (this.state.searchText === "") {
            return;
        } else {
            this.props.history.push("/shop/search/" + this.state.searchText);
        }
    }
    // Price filter
    onPriceChange(event) {
        this.setState({
            minPrice: event.from,
            maxPrice: event.to
        })
        if (this.state.maxPrice !== 0 && this.state.minPrice !== 0) {
            this.props.history.push(`/shop/${this.state.minPrice}/${this.state.maxPrice}`);
        }
    }
    render() {
        return (
            <div className="sidebar_wrap">
                <div className="sidebar_widgets">
                    <div className="search">
                        <form onSubmit={this.handleSubmit.bind(this)} method="Get">
                            <input type="text" className="form-control" placeholder="Enter Keyword" name="searchText" value={this.state.searchText} onChange={this.onChange.bind(this)} required />
                        </form>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Categories</h6>
                    </div>
                    <div className="sidebar_nav">
                        <ul>
                            {/* Data */}
                            {category.map((item, i) => (
                                <li key={i}>
                                    <Link to={"/shop/cat/" + item.id}>{item.title} ({item.count})</Link>
                                </li>
                            ))}
                            {/* Data */}
                        </ul>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Price Range</h6>
                    </div>
                    <div className="sj-price-filter">
                        <div className="thc-range-inner">
                            <IonRangeSlider type="double" skin="round" hide_min_max={true} min={1} max={100} from={this.state.priceFilter[0]} to={this.state.priceFilter[1]} grid={false} prefix="$" onChange={this.onPriceChange.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Ads</h6>
                    </div>
                    <div className="tl-ads">
                        <img src={process.env.PUBLIC_URL + "/assets/images/ads.jpg"} className="mx-auto img-fluid" alt="img" />
                    </div>
                </div>
                <div className="sidebar_widgets">
                    <div className="widget_title">
                        <h6>Tags</h6>
                    </div>
                    <div className="tag_cloud">
                        {/* Data */}
                        {tags.map((item, i) => (
                            <Link to={"/shop/tag/" + item.id} key={i}>{item.title}</Link>
                        ))}
                        {/* Data */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Shopsidebar);