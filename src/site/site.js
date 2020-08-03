import React, { Component, Fragment } from "react";
import NavBar from "../components/navbar";
import Fade from "react-reveal/Fade";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { experience } from "../objects/array-experience";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { projects } from "../objects/array-projects";

class Site extends Component {
    
    render() {
        return(
            <Fragment>
                <main>
                    <section id="home">
                        <NavBar />
                        <div className="horizontal-center">
                            <div className="vertical-center">
                                <h1 className="animated slideInDown delay-1">Hi!</h1>
                                <h1 className="animated slideInDown delay-2">I'm Ivan</h1>
                                <p className="animated fadeIn delay-3">A New York City based Front End Developer</p>
                            </div>
                        </div>
                    </section>
                    <section id="experience">
                        <Fade top>
                            <h1>Experience</h1>
                            <h2>My Journey as a Front End Developer</h2>
                        </Fade>

                        <VerticalTimeline>
                            {
                                experience.map((item,i) => (
                                    <VerticalTimelineElement position={item.timeline_position} date={item.timeline_date} icon={item.timeline_icon} iconStyle={{ backgroundColor: "#000", color: "#fff" }}>
                                        <div className="work-item-container">
                                            <img src={item.img_logo_src} alt={item.img_logo_alt} style={{ maxWidth: item.img_max_width }} />
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                    </section>
                    <section id="projects">
                        <Fade top>
                            <h1>Projects</h1>
                        </Fade>
                        
                        <Fade right> 
                            <Carousel slidesPerPage={2} centered dots draggable={false} breakpoints={{ 615: { slidesPerPage: 1 } }}>
                                {
                                    projects.map((item,i) => (
                                        <div className="carousel-item">
                                            <p className="title">{item.title}</p>
                                            <div className="image-container">
                                                <img src={item.img_source} alt={item.alt} />
                                                <div className="image-overlay">
                                                    <p className="description">{item.description}</p>
                                                </div>
                                            </div>
                                            <p className="link"><a href={item.link} target="_blank" rel="noopener noreferrer">visit</a></p>
                                        </div>
                                    ))
                                }
                            </Carousel>
                        </Fade>
                    </section>
                    <section id="footer">
                        <ul>
                            <li> <a href="https://www.linkedin.com/in/solidusdev/" target="_blank" rel="noopener noreferrer"><img src={require("../images/logos/linkedin.png")} alt="logo" /></a></li>
                            <li> <a href="https://github.com/solidusdev" target="_blank" rel="noopener noreferrer"><img src={require("../images/logos/github.png")} alt="logo" /></a></li>
                        </ul>
                        <h2>Made with ReactJS</h2>
                    </section>
                </main>
            </Fragment>
        )
    }
}

export default Site;