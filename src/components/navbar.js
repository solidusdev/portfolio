import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";

class NavBar extends Component {

    render() {
        return(
            <Fragment>
                <nav id="navbar">
                    <ul className="animated fadeIn delay-3">
                        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
                        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                        <li><a href="https://github.com/solidusdev" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </ul>
                </nav>
            </Fragment>
        )
    }
}

export default NavBar;