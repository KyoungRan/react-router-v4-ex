import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";

import OldSchoolMenuLink from "../components/OldSchoolMenuLink";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <OldSchoolMenuLink
                        activeOnlyWhenExact={true}
                        to="/"
                        label="Home"
                    />
                    <OldSchoolMenuLink to="/about" label="About" />
                    <hr />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
