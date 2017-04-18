import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Child from "./routes/Child";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>Account</h2>
                    <ul>
                        <li><Link to="/netflix">Netflix</Link></li>
                        <li><Link to="/zillow-group">Zillow Group</Link></li>
                        <li><Link to="/yahoo">Yahoo</Link></li>
                        <li><Link to="/modus-create">Modus Create</Link></li>
                    </ul>

                    <Route path="/:id" component={Child} />
                </div>
            </Router>
        );
    }
}

export default App;
