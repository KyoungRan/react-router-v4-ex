import React from "react";
import {Link} from "react-router-dom";
import styles from "../styles";

const NavLink = props => (
    <li style={styles.navItem}>
        <Link {...props} style={{color: "inherit"}} />
    </li>
);

export default NavLink;
