import React, { useContext } from "react";
import { Container, Navbar as NavbarComp, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/userContext";

import ImgDumbMerch from "../assets/DumbMerch.png";

export default function Navbar(props) {
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  function changeTheme() {
    let emoticon = "";
    let elemet = document.body.classList.toggle("light-theme");

    if (elemet) {
      emoticon = "🌑";
    } else {
      emoticon = "🔆";
    }
    document.getElementById("darkBtn").innerHTML = emoticon;
  }

  const user = state.user.name;

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  };

  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/">
          <img src={ImgDumbMerch} className="img-fluid" style={{ width: "60px", height: "60px" }} />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="text-danger fw-bold">Hi,{user}</Nav.Link>
            <Nav.Link
              as={Link}
              to="/complain"
              className={props?.title == "Complain" ? `text-navbar-active` : `text-navbar`}
            >
              Complain
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/profile"
              className={props?.title == "Profile" ? `text-navbar-active` : `text-navbar`}
            >
              Profile
            </Nav.Link>
            <Nav.Link onClick={logout} className="text-navbar">
              Logout
            </Nav.Link>
            <Nav>
              <div
                class=" fs-5 mt-1 change-theme "
                id="darkBtn"
                onClick={changeTheme}
                style={{ cursor: "pointer" }}
              >
                {" "}
                🔆
              </div>
            </Nav>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
}
