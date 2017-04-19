import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RouteWithSubRoutes from "./routes/RouteWithSubRoutes";
import routes from "./routes/routes";

const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/tacos">Tocos</Link></li>
                    <li><Link to="/sandwiches">Sandwiches</Link></li>
                </ul>

                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </Router>
    );
};

export default App;
