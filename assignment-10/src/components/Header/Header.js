import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";

const Header = () => {

  // Using React Router DOM
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let from = navigate?.state?.from?.pathname || "/login";

  // Using React Firebase Hooks
  const [authUser] = useAuth();

  //Using Function to Sign Out Using Firebase Hooks
  const handleSignOut = () => {
    signOut(auth);
    navigate(from);
  };
  return (
    <div
      className={
        pathname === "/home"
          ? "d-block"
          : pathname === "/services"
          ? "d-block"
          : pathname === "/about-me"
          ? "d-block"
          : pathname === "/blogs"
          ? "d-block"
          : pathname === "/about"
          ? "d-block"
          : pathname === "/login"
          ? "d-block"
          : pathname === "/sign-up"
          ? "d-block"
          : pathname === "/schedule"
          ? "d-block"
          : pathname === "/thankyou"
          ? "d-block"
          : pathname === "/"
          ? "d-block"
          : "d-none"
      }
    >
      <div className="nav-container my-3">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container>
            <Link to="/" className=" text-black header-title">
              <h2 className="mb-0">
                Derma <span className="text-primary">Care</span>
              </h2>{" "}
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className=" ms-3 me-auto nav-link-container">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                  }
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                  }
                  to="/blogs"
                >
                  Blogs
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                  }
                  to="/about-me"
                >
                  About Me
                </NavLink>
              </Nav>
              <Nav className="nav-link-container">
                {authUser ? (
                  <button onClick={handleSignOut} className="btn btn-primary">
                    Sign Out
                  </button>
                ) : (
                  <Nav>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                      }
                      to="/login"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                      }
                      to="/sign-up"
                    >
                      Register
                    </NavLink>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
