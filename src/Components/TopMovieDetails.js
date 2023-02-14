import React from "react";
import "../App.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
function TopMovieDetails(props) {
  return (
    <div className="topContent container">
      <h4 style={{ color: "white", marginLeft: "5vh" }}>
        {props.yearReleased}
      </h4>
      <div className="genreRatingContainer">
        <div className="genrecontainer">
          <h3 className="gerneANDratingheading">GENRE</h3>
          <p className="genres">{props.genre.toString()}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="rating">
            {props.rating} <span className="gerneANDratingheading">RATING</span>{" "}
          </p>
        </div>
      </div>
      <h1 className="moviename">{props.movie}</h1>
      <div className="moviesummary">{props.synopsis}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "5vh",
          color: "white",
          alignItems: "center",
        }}
      >
        <PlayCircleFilledWhiteOutlinedIcon
          style={{ fontSize: "3rem", cursor: "pointer" }}
        />
        <span className="watchthetrailer">WATCH THE TRAILER</span>
      </div>
    </div>
  );
}

export default TopMovieDetails;
