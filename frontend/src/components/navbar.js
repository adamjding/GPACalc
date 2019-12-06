import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends React.Component {
    render() {
        return (
        <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">GPA CALCULATOR</span>
        </nav>
        );
    }
}

export default NavBar;