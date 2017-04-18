import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Topics from "./routes/Topics";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/topics">Topics</Link></li>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/topics" component={Topics} />
                </div>
            </Router>
        );
    }
}

export default App;
