import React from "react";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";

import Home from './routes/Home';
import WillMatch from './routes/WillMatch';
import NoMatch from './routes/NoMatch';

const App = () => {
    return (
        <Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/old-match">Old Match, to be redirected</Link></li>
					<li><Link to="/will-match">Will Match</Link></li>
					<li><Link to="/will-not-match">Will Not Match</Link></li>
					<li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
				</ul>
				<Switch>
					<Route path="/" exact component={Home} />
					<Redirect from="/old-match" to="/will-match" />
					<Route path="/will-match" component={WillMatch} />
					<Route component={NoMatch} />
				</Switch>
			</div>
		</Router>
    );
};

export default App;
