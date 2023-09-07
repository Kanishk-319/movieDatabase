import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import TopMovieDetails from "./Components/TopMovieDetails";
import Footer from "./Components/Footer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Moviedetails } from "./Helpers/TopBgMoviesDetails";
import Slidebar from "./Components/Slidebar";
import styled from "styled-components";
import MovieState from "./Helpers/MovieState";
import MoviePage from "./Components/MoviePage";
import { StateContext } from "./Helpers/StateContext"
import OtherMovie from "./Components/OtherMovie";
import { Login } from "./Components/login";
import Alert from "./Components/Alert";
import WatchList from "./Components/WatchList";

function App() {
  const [state, setState] = useState('')
  const [genreid, setGenreId] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [movieDetails, setMovieDetails] = useState('')
  const [bg, setBg] = useState(Moviedetails[0]);
  const [bgPointer, setBgPointer] = useState(0);
  const [searchQuery, setSearchQuery] = useState('')
  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [checkLogin, setCheckLogin] = useState(false)
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  setTimeout(() => {
    if (bgPointer < Moviedetails.length) {
      setBg(Moviedetails[bgPointer]);
      setBgPointer(bgPointer + 1);
    } else {
      setBg(Moviedetails[0]);
      setBgPointer(0);
    }
  }, 8000);
  const BackgroundContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg.imageLink});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    z-index:0;
  `;

  return (
    <>
      <StateContext.Provider value={{ state, setState, movieDetails, setMovieDetails, setGenreId, genreid, setSearchQuery, setUsername, username, checkLogin, setCheckLogin, alert, setAlert, showAlert, displayName, setDisplayName }}>
        {alert != null && <Alert alert={alert} />}
        <MovieState>
          {state == '' && <div className="App">
            <BackgroundContainer>
              <Navbar bg='transparent' />
              <TopMovieDetails
                movie={bg.name}
                synopsis={bg.synopsis}
                rating={bg.rating}
                yearReleased={bg.yearReleased}
                genre={bg.genre}
              />

            </BackgroundContainer>

            <Slidebar title={'Trending Movies & TV Shows'} />
            <Slidebar title={'Top Rated'} />
            <Slidebar title={'Popular Movies'} />

            {visibility == true && <OtherMovie title='Movies' />}
            <div className="text-center">
              <button onClick={() => { setVisibility(!visibility) }} type="button" className="btn btn-light m-5 px-3" style={{ border: '1px solid black' }}>{visibility == true ? 'Less' : 'More'} <KeyboardArrowDownIcon style={{ fontSize: 'small' }} /></button>
            </div>

            <Footer />
          </div>}
          {state == 'login' && <><Navbar bg='dark' /><Login /> </>}
          {state == 'search' && <><Navbar bg='dark' /><OtherMovie title='search' searchQuery={searchQuery} /><Footer /> </>}
          {state == 'Movie' && <><Navbar bg='dark' /><MoviePage /> <Footer /></>}

          {state == 'Latest' && <><Navbar bg='dark' />
            <OtherMovie title='latest' />
            <Footer />  </>}
          {state == 'Anime' && <><Navbar bg='dark' />
            <OtherMovie title='anime' />
            <Footer />  </>}
          {state == 'topRated' && <><Navbar bg='dark' />
            <OtherMovie title='topRated' />
            <Footer />  </>}
          {state == 'popular' && <><Navbar bg='dark' />
            <OtherMovie title='popular' />
            <Footer />  </>}
          {state == 'bollywood' && <><Navbar bg='dark' />
            <OtherMovie title='bollywood' />
            <Footer />  </>}
          {state == 'hollywood' && <><Navbar bg='dark' />
            <OtherMovie title='hollywood' />
            <Footer />  </>}
          {state == 'Genre' && <> <Navbar bg='dark' />
            <OtherMovie title='Genre' genreid={genreid} />
            <Footer /></>}
          {state == 'watchlist' && <> <Navbar bg='dark' />
            <WatchList />
            <Footer /></>}
        </MovieState>
      </StateContext.Provider>
    </>
  );
}

export default App;
