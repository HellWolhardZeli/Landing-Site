import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MessengerCustomerChat from "react-messenger-customer-chat";

import Header from "./components/header.component";
import Footer from "./components/footer.component";
import Home from "./layouts/home.layout";
import Premium from "./layouts/premium.layout";
import Events from "./layouts/events.layout";
import About from "./layouts/about.layout";
import Collaborate from "./layouts/collaborate.layout";
import Blog from "./layouts/blog.layout";
// import Privacy from "./layouts/privacy.layout";
// import Terms from "./layouts/terms.layout";
import BlogDetails from "./layouts/blog-details.layout";
import Issue from "./layouts/issue.layout";
import NotFound from "./layouts/not-found.layout";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/premium" component={Premium} />
        <Route path="/about" component={About} />
        <Route path="/collaborate" component={Collaborate} />
        <Route path="/blog/:slug" component={BlogDetails} />
        <Route path="/blog" component={Blog} />
        <Route path="/magazines/:issue" component={Issue} />
        <Route path="/not-found" component={NotFound} />
        {/* 
        <Route path="/legal/privacy" component={Privacy} />
        <Route path="/legal/terms" component={Terms} />*/}
      </Switch>
      <MessengerCustomerChat
        pageId="2180653485508485"
        appId="474688876705786"
      />
      <Footer />
    </Router>
  );
}

export default App;
