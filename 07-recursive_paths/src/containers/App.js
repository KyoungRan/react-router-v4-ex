import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Person from "./routes/Person";

const App = () => {
    return (
        <Router>
            <Person match={{params: {id: 0}, url: ""}} />
        </Router>
    );
};

export default App;
