import React from "react";
import {Link} from "react-router-dom";

import routes from "./routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const Tocas = ({routes}) => {
    return (
        <div>
            <h2>Toacos</h2>
            <ul>
                <li><Link to="/tacos/bus">Bus</Link></li>
                <li><Link to="/tacos/cart">Cart</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
};

export default Tocas;
