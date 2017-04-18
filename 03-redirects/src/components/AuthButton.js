import React from "react";
import {withRouter} from "react-router-dom";

import FakeAuth from "./FakeAuth";

const AuthButton = withRouter(
    ({history}) =>
        (FakeAuth.isAuthenticated
            ? <p>
                  Welcom! <button
                      onClick={() => {
                          FakeAuth.signout(() => history.push("/"));
                      }}
                  >
                      Sign out
                  </button>
              </p>
            : <p>You are not logged in.</p>)
);

export default AuthButton;
