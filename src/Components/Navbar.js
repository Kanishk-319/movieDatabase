import React, { useContext, useState } from "react";
import "../App.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LogoutIcon from '@mui/icons-material/Logout';
import { StateContext } from '../Helpers/StateContext';

import { Items } from "../Helpers/NavItems";
function Navbar(props) {
  const { setState, setGenreId, genreid, setSearchQuery, displayName, checkLogin } = useContext(StateContext)
  const [showSearch, setShowSearch] = useState(false)
  const handleOnclick = (item) => {
    if (item == 'Latest Released') {
      setState('Latest')
    }
    else if (item == 'Anime') {
      setState('Anime')
    }
    else if (item == 'IMDB Top Rated') {
      setState('topRated')
    }
    else if (item == 'Popular') {
      setState('popular')
    }
    else if (item == 'Bollywood') {
      setState('bollywood')
    }
    else if (item == 'Hollywood') {
      setState('hollywood')
    }
    else if (item == 'Mystery') {
      setGenreId(9648)
      setState('Genre')
    }
    else if (item == 'Romance') {
      setGenreId(10749)
      setState('Genre')
    }
    else if (item == 'Sci-fi') {
      setGenreId(878)
      setState('Genre')
    }
    else if (item == 'Horror') {
      setGenreId(27)
      setState('Genre')
    }
    else if (item == 'Thriller') {
      setGenreId(53)
      setState('Genre')
    }
    else if (item == 'Crime') {
      setGenreId(80)
      setState('Genre')
    }
    else if (item == 'Drama') {
      setGenreId(18)
      setState('Genre')
    }

  }
  const handleNavItems = (element) => {
    if (element.title == 'Home') {
      setState('')
    }
    else if (element.title == 'Blog') {
      window.open('https://kanishk-319.github.io/MyPortfolio/');

    }
  }

  const handleSearchSubmit = () => {
    if (document.getElementById('search-input').value == '') return;
    setSearchQuery(document.getElementById('search-input').value)
    setState('search')
  }


  return (
    <div style={{ zIndex: '10' }}>
      <nav
        className={`navbar navbar-dark navbar-expand-lg bg-${props.bg} ${props.bg == 'transparent' && 'container'}`}
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
                    onClick={() => handleNavItems(element)}

                    className={
                      element.dropdown !== undefined
                        ? "nav-item dropdown navTitles"
                        : "nav-item navTitles"
                    }

                  >
                    <a
                      className="nav-link"
                      href='/#'
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
                            <li onClick={() => handleOnclick(item)}>
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
                  <ShoppingCartOutlinedIcon onClick={() => { setState('watchlist') }} />
                </a>
              </li>
              <li className="nav-item navTitles">
                {showSearch == false &&
                  <a
                    className="nav-link"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    <SearchIcon onClick={() => setShowSearch(!showSearch)} /></a>}
                {showSearch == true && <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input id='search-input' type="search" className="form-control rounded " style={{ marginRight: '0.5vw' }} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                  <SearchIcon onClick={handleSearchSubmit} style={{ cursor: 'pointer' }} />
                </div>}
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
                  {checkLogin == false && <PersonOutlineIcon onClick={() => setState('login')} />}
                  {checkLogin == true &&
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <LogoutIcon onClick={() => setState('login')} style={{ marginRight: '0.5vw' }} />
                      <div>{displayName}</div>
                    </div>
                  }

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
