import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";

import HSL from "../components/HSL";
import NavLink from "../components/NavLink";
import styles from "../styles";

const App = () => (
    <Router>
        <Route
            render={({location}) => (
                <div style={styles.fill}>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/10/90/50" />}
                    />

                    <ul style={styles.nav}>
                        <NavLink to="/10/90/50">Red</NavLink>
                        <NavLink to="/120/100/40">Green</NavLink>
                        <NavLink to="/200/100/40">Blue</NavLink>
                        <NavLink to="/310/100/50">Pink</NavLink>
                    </ul>

                    <div style={styles.content}>
                        <ReactCSSTransitionGroup
                            transitionName="fade"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}
                        >
                            {/* no different than other usage of
                ReactCSSTransitionGroup, just make
                sure to pass `location` to `Route`
                so it can match the old location
                as it animates out
            */}
                            <Route
                                location={location}
                                key={location.key}
                                path="/:h/:s/:l"
                                component={HSL}
                            />
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            )}
        />
    </Router>
);

export default App;
