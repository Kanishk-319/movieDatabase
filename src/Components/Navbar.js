import React from "react";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

import { Items } from "../Helpers/NavItems";
function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-dark navbar-expand-lg bg-transparent container"
        style={{ height: "17vh" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand websitename"
            href="/#"
            style={{ fontSize: "2.5rem" }}
          >
            FxRcs
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto titlecontainer">
              {Items.map((element, index) => {
                return (
                  <li
                    className={
                      element.dropdown !== undefined
                        ? "nav-item dropdown navTitles"
                        : "nav-item navTitles"
                    }
                  >
                    <a
                      className="nav-link"
                      href="/#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ color: "white" }}
                    >
                      {element.title !== undefined && element.title}{" "}
                      {element.dropdown !== undefined && (
                        <KeyboardArrowDownIcon style={{ fontSize: "small" }} />
                      )}
                    </a>
                    {element.dropdown !== undefined && (
                      <ul className=" myDropdown dropdown-menu navbar-dark">
                        {element.dropdown.map((item, index) => {
                          return (
                            <li>
                              <a
                                className=" dropdownItems dropdown-item"
                                href="/#"
                              >
                                {item}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <ul className="navbar-nav me-auto" style={{ color: "white" }}>
              <li className="nav-item navTitles">
                <a
                  className="nav-link"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <ShoppingCartOutlinedIcon />
                </a>
              </li>
              <li className="nav-item navTitles">
                <a
                  className="nav-link"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <SearchIcon />
                </a>
              </li>
              <li className="nav-item navTitles">
                <a
                  className="nav-link"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  <PersonOutlineIcon />
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav socialmediacontainer"
              style={{ color: "white" }}
            >
              <li id="socialmediaicons">
                <InstagramIcon
                  style={{ fontSize: "17px", cursor: "pointer" }}
                />
              </li>
              <li id="socialmediaicons">
                <TwitterIcon style={{ fontSize: "17px", cursor: "pointer" }} />
              </li>
              <li id="socialmediaicons">
                <LinkedInIcon style={{ fontSize: "17px", cursor: "pointer" }} />
              </li>
              <li id="socialmediaicons">
                <PinterestIcon
                  style={{ fontSize: "17px", cursor: "pointer" }}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
