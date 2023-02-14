import "./App.css";
import React, { useState} from "react";
import Navbar from "./Components/Navbar";
import TopMovieDetails from "./Components/TopMovieDetails";
import Footer from "./Components/Footer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Moviedetails } from "./Helpers/TopBgMoviesDetails";
import Slidebar from "./Components/Slidebar";
import styled from "styled-components";

function App() {
  const [bg, setBg] = useState(Moviedetails[0]);
  const [bgPointer, setBgPointer] = useState(0);
  setTimeout(() => {
    if (bgPointer < Moviedetails.length) {
      setBg(Moviedetails[bgPointer]);
      setBgPointer(bgPointer + 1);
    } else {
      setBg(Moviedetails[0]);
      setBgPointer(0);
    }
  }, 5000);
  const BackgroundContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${bg.imageLink});
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
  `;

  return (
    <div className="App">
      <BackgroundContainer>
        <Navbar />
        <TopMovieDetails
          movie={bg.name}
          synopsis={bg.synopsis}
          rating={bg.rating}
          yearReleased={bg.yearReleased}
          genre={bg.genre}
        />
      </BackgroundContainer>
      <Slidebar title={'Trending Movies & TV Shows'}/>
      <Slidebar title={'Top Rated'}/>
      <Slidebar title={'FxRcs Exclusive Shows'}/>
      <div className="text-center"> 
      <button type="button" class="btn btn-light m-5 px-3" style={{border:'1px solid black'}}>More <KeyboardArrowDownIcon style={{fontSize:'small'}}/></button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
