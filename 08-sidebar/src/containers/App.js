import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import routes from "./routes/routes";

const App = () => (
    <Router>
        <div style={{display: "flex"}}>
            <Sidebar />
            <div style={{flex: 1, padding: "10px"}}>
                {/*
				** Render more <Route>s with the same paths as
				** above, but different components this time.
				*/}
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>
);

export default App;
