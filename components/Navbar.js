import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from 'next/link'
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    useEffect(function mount() {
        function onScroll() {
            if (window !== undefined) {
                if (window.scrollY >= 20) {
                    updateNavbar(true);
                } else {
                    updateNavbar(false);
                }
            }

        }

        window.addEventListener("scroll", onScroll);

        return function unMount() {
            window.removeEventListener("scroll", onScroll);
        };
    });

    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <span className="logo">JO</span>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Link href="/" passHref>
                                <Nav.Link onClick={() => updateExpanded(false)}>
                                    <AiOutlineHome style={{ marginBottom: "2px" }} />
                                    Home
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link href="/about" passHref>
                                <Nav.Link
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineUser style={{ marginBottom: "2px" }} />
                                    About
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link href="/project" passHref>
                                <Nav.Link
                                    onClick={() => updateExpanded(false)}
                                >
                                    <AiOutlineFundProjectionScreen
                                        style={{ marginBottom: "2px" }}
                                    />
                                    Projects
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Link href="/resume" passHref>
                                <Nav.Link
                                    onClick={() => updateExpanded(false)}
                                >
                                    <CgFileDocument style={{ marginBottom: "2px" }} />
                                    Resume
                                </Nav.Link>
                            </Link>
                        </Nav.Item>

                        {/*
                        <Nav.Item>
                            <Link passHref href="/blogs">
                                <Nav.Link
                                    rel="noreferrer"
                                >
                                    <ImBlog style={{ marginBottom: "2px" }} />
                                    Blogs
                                </Nav.Link>
                            </Link>
                        </Nav.Item> */}

                        <Nav.Item className="fork-btn">
                            <Button
                                href="https://github.com/yoryi"
                                target="_blank"
                                className="fork-btn-inner"
                            >
                                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                                <AiFillStar style={{ fontSize: "1.1em" }} />
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar >
    );
}

export default NavBar;
