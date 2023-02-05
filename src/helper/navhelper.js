import React, { Component, Fragment } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Nav toggle
            navmethod: false,
            // Search
            searchMethod: false,
            // Cart
            cartMethod: false,
            // Sticky
            windowSize: "",
            stickyheader: 0,
        };
        // Nav toggle
        this.toggleNav = this.toggleNav.bind(this);
        // Search
        this.toggleSearch = this.toggleSearch.bind(this);
        // Cart
        this.toggleCart = this.toggleCart.bind(this);
    }
    // Nav toggle
    toggleNav() {
        this.setState({
            navmethod: !this.state.navmethod
        });
    }
    // Search toggle
    toggleSearch() {
        this.setState({
            searchMethod: !this.state.searchMethod
        });
    }
    // Cart toggle
    toggleCart() {
        this.setState({
            cartMethod: !this.state.cartMethod
        });
    }
    // Sticky header
    StickyHeader = e => {
        const windowSize = window.scrollY;
        const stickyheader = (windowSize > 100);
        this.setState(prevState => {
            return {
                stickyheader
            };
        });
    };
    componentDidMount() {
        window.addEventListener("scroll", this.StickyHeader);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.StickyHeader);
    }
    // Mobile menu
    getNextSibling = function (elem, selector) {
        // Get the next sibling element
        var sibling = elem.nextElementSibling;
        // If there's no selector, return the first sibling
        if (!selector) return sibling;
        // If the sibling matches our selector, use it
        // If not, jump to the next sibling and continue the loop
        while (sibling) {
            if (sibling.matches(selector)) return sibling;
            sibling = sibling.nextElementSibling
        }
    }

    triggerChild = (e) => {
        let subMenu = '';

        subMenu = (this.getNextSibling(e.target, '.sub-menu') !== undefined) ? this.getNextSibling(e.target, '.sub-menu') : null;

        if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
            subMenu.classList = subMenu.classList.contains('d-block') ? 'sub-menu' : 'sub-menu d-block';
        }
    }
    render() {
        return (
           <Fragment/>
        );
    }
}

export default HeaderComponent;