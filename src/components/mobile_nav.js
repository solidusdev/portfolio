import React, { Component, Fragment } from "react";
import { Link } from "react-scroll";

class MobileNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mobile_button_active: "",
            sidebar_width: "0%",
            sidebar_elements: "sidebar-fade-out",
            sidebar_active: false
        }
    }

    open_sidebar = () => {
        this.setState({
            mobile_button_active: "active",
            sidebar_width: "57%",
            sidebar_elements: "sidebar-fade-in",
            sidebar_active: true
        })
    }

    close_sidebar = () => {
        this.setState({
            mobile_button_active: "",
            sidebar_width: "0%",
            sidebar_elements: "sidebar-fade-out",
            sidebar_active: false
        })
    }

    render() {
        return(
            <Fragment>
                <div id="mobile-button-container" onClick={ () => {this.state.sidebar_width === "0%" ? this.open_sidebar() : this.close_sidebar()} }>
                    <div className="mobile-button animated fadeIn delay-3">
                        <div className="vertical-center">
                            <div id="button-icon" className={`${this.state.mobile_button_active}`}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`darken-overlay ${this.state.sidebar_active ? "display-on" : "display-off"}`}></div>
                <div id="sidebar" style={{ width: this.state.sidebar_width }}>
                    <div className="sidebar-horizontal-center">
                        <div className="sidebar-vertical-center">
                            <ul className={this.state.sidebar_elements}>
                                <li><Link to="home" smooth={true} duration={500} onClick={this.close_sidebar}>Top</Link></li>
                                <li><Link to="experience" smooth={true} duration={500} onClick={this.close_sidebar}>Experience</Link></li>
                                <li><Link to="projects" smooth={true} duration={500} onClick={this.close_sidebar}>Projects</Link></li>
                                <li><a href="https://github.com/solidusdev" target="_blank" rel="noopener noreferrer" onClick={this.close_sidebar}>GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <ul className={this.state.sidebar_elements}>
                            <li><a href="https://www.linkedin.com/in/solidusdev/" target="_blank" rel="noopener noreferrer"><img src={require("../images/logos/linkedin-light.png")} alt="logo" /></a></li>
                            <li><a href="https://github.com/solidusdev" target="_blank" rel="noopener noreferrer"><img src={require("../images/logos/github-light.png")} alt="logo" /></a></li>
                        </ul>
                        <p className={this.state.sidebar_elements}>Made with ReactJS</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default MobileNav;