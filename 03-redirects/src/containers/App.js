import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Public from "./routes/Public";
import Login from "./routes/Login";
import Protected from "./routes/Protected";
import AuthButton from "../components/AuthButton";
import PrivateRoute from "./routes/PrivateRoute";

//////////////////////////////////////////////////////////
// 1. Click the public Page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time
//////////////////////////////////////////////////////////

const App = () => {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li><Link to="/public">Public Page</Link></li>
                    <li><Link to="/protected">Protected Page</Link></li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
};

export default App;
