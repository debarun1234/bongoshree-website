import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import Membership from "./pages/Membership";
import EventCalendar from "./pages/EventCalendar";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/membership" component={Membership} />
          <Route path="/event-calendar" component={EventCalendar} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
