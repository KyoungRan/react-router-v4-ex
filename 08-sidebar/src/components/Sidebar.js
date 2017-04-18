import React from "react";
import {Route, Link} from "react-router-dom";

import routes from "../containers/routes/routes";

const Sidebar = () => {
    return (
        <div
            style={{
                padding: "10px",
                width: "40%",
                background: "#f0f0f0"
            }}
        >
            <ul style={{listStyleType: "none", padding: 0}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/bubblegum">Bubblegum</Link></li>
                <li><Link to="/shoelaces">Shoelaces</Link></li>
            </ul>
            {/* 
                 ** You can render a <Route> in as many places as you want in your app.
                 ** It will render along with any other <Router>s that also match the URL.
                 ** So, a sidebar or breadcrumbs or anything else that requires you to render 
                 ** multiple things in multiple places at the same URL is noting more than 
                 ** multiple <Route>s.
                */}
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.sidebar}
                />
            ))}
        </div>
    );
};

export default Sidebar;
