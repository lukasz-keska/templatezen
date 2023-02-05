import React, { Suspense, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// Homepages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
// Sermon
const Sermon = React.lazy(() => import("./components/pages/Sermon"));
const Sermondetails = React.lazy(() =>
  import("./components/pages/Sermondetails")
);
// Event
const Event = React.lazy(() => import("./components/pages/Event"));
const Eventdetails = React.lazy(() =>
  import("./components/pages/Eventdetails")
);
// Pages(About)
const About = React.lazy(() => import("./components/pages/About"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Donation = React.lazy(() => import("./components/pages/Donation"));
const Teamdetails = React.lazy(() => import("./components/pages/Teamdetails"));
// Shop
const Shop = React.lazy(() => import("./components/pages/Shop"));
const Shopleft = React.lazy(() => import("./components/pages/Shopleft"));
const Shopright = React.lazy(() => import("./components/pages/Shopright"));
const Shopdetails = React.lazy(() => import("./components/pages/Shopdetails"));
const Cart = React.lazy(() => import("./components/pages/Cart"));
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
// Blog
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <Router basename={"/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home-v2" component={Hometwo} />
            {/* Sermon */}
            <Route
              exact
              path="/sermon/tag/:tagId"
              component={(props) => (
                <Sermon {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/sermon/author/:authorId"
              component={(props) => (
                <Sermon {...props} key={window.location.pathname} />
              )}
            />
            <Route exact path="/sermon" component={Sermon} />
            <Route
              exact
              path="/sermon-details/:id"
              component={(props) => (
                <Sermondetails {...props} key={window.location.pathname} />
              )}
            />
            {/* Event */}
            <Route exact path="/event" component={Event} />
            <Route
              exact
              path="/event-details/:id"
              component={(props) => (
                <Eventdetails {...props} key={window.location.pathname} />
              )}
            />
            {/* Pages(About) */}
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/donation" component={Donation} />
            <Route
              exact
              path="/team-details/:id"
              component={(props) => (
                <Teamdetails {...props} key={window.location.pathname} />
              )}
            />
            {/* Shop */}
            <Route
              exact
              path="/shop/cat/:catId"
              component={(props) => (
                <Shop {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/shop/tag/:tagId"
              component={(props) => (
                <Shop {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/shop/search/:query"
              component={(props) => (
                <Shop {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/shop/:minPrice/:maxPrice"
              component={(props) => (
                <Shop {...props} key={window.location.pathname} />
              )}
            />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/shop-left" component={Shopleft} />
            <Route exact path="/shop-right" component={Shopright} />
            <Route
              exact
              path="/shop-details/:id"
              component={(props) => (
                <Shopdetails {...props} key={window.location.pathname} />
              )}
            />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            {/* Blog */}
            <Route
              exact
              path="/blog/cat/:catId"
              component={(props) => (
                <Blog {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/blog/tag/:tagId"
              component={(props) => (
                <Blog {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/blog/author/:authorId"
              component={(props) => (
                <Blog {...props} key={window.location.pathname} />
              )}
            />
            <Route
              exact
              path="/blog/search/:query"
              component={(props) => (
                <Blog {...props} key={window.location.pathname} />
              )}
            />
            <Route exact path="/blog" component={Blog} />
            <Route
              exact
              path="/blog-details/:id"
              component={(props) => (
                <Blogdetails {...props} key={window.location.pathname} />
              )}
            />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
