// import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import '../pages/style/Dashboard.css'

export default function Header() {
    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                activeKey="home"
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link
                        as={Link}
                        to="/"
                        eventKey="home"
                    >
                        Home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="aboutMe"
                        as={Link}
                        to="/aboutme"
                    >
                        About Me
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="projects"
                        as={Link}
                        to="/projects"
                    >
                        Projects
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="contact"
                        as={Link}
                        to="/contact"
                    >
                        Contact Me
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="resume"
                        as={Link}
                        to="/resume"
                    >
                        Resume
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        </>
    )
}
