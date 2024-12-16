import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10 || isNavbarOpen) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  }, [isNavbarOpen]);

  return (
    <Navbar
      expand="lg"
      className={changeColor ? "color-active" : ""}
      onToggle={() => setIsNavbarOpen((prev) => !prev)}
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          Coding.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <NavLink
                  to={link.path}
                  key={link.id}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                >
                  {link.text}
                </NavLink>
              );
            })}
          </Nav>

          <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">
              Join With Us
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
