import React, { useContext, useRef, useEffect, useState } from "react";
import Slideblock from "./Slideblock";
import MovieContext from "../Helpers/MovieContext";
import "../App.css";
function Slidebar(props) {
  const context = useContext(MovieContext);
  const getTrendingMovies = context.getTrendingMovies;
  const getTopRatedMovies = context.getTopRatedMovies;
  const getPopularMovies = context.getPopularMovies;
  const topRatedMoviesDetails = context.topRatedMoviesDetails;
  const popularMoviesDetails = context.popularMoviesDetails;
  const [slidebarTrendingMovies, setSlidebarTrendingMovies] = useState([]);
  const [slidebarTopRatedMovies, setSlidebarTopRatedMovies] = useState([]);
  const [slidebarPopularMovies, setSlidebarPopularMovies] = useState([]);
  const trendingMovieDetails = context.trendingMovieDetails;
  const getSlidebarMovies = (arr) => {
    return arr.slice(0, 10);
  };

  const ref = useRef(0);
  useEffect(() => {
    getTrendingMovies();
    getPopularMovies()
    getTopRatedMovies();
   
  }, []);

  useEffect(() => {
    {
      trendingMovieDetails !== "" &&
        setSlidebarTrendingMovies(
          getSlidebarMovies(trendingMovieDetails.results)
        );
    }
  }, [trendingMovieDetails]);
  useEffect(()=>{
    {
      topRatedMoviesDetails !=="" &&
      setSlidebarTopRatedMovies(
        getSlidebarMovies(topRatedMoviesDetails.results)
      )
    }
  },[topRatedMoviesDetails])
  useEffect(()=>{
    {
      popularMoviesDetails !=="" &&
      setSlidebarPopularMovies(
        getSlidebarMovies(popularMoviesDetails.results)
      )
    }
  },[popularMoviesDetails])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="container"
    >
      <div className="headings">{props.title}</div>
      {props.title == "Trending Movies & TV Shows" && (
        <div className="rowContainer container my-5">
          <div ref={ref} className="movieRow">
            {slidebarTrendingMovies !== undefined &&
              slidebarTrendingMovies.map((Movie, index) => {
                return (
                  <Slideblock
                    key={index}
                    rowWidth={ref.current.offsetWidth}
                    poster_path={Movie.poster_path}
                    title={Movie.title}
                    Movie={Movie}
                  />
                );
              })}
          </div>
        </div>
      )}
      {props.title == "Top Rated" && (
        <div className="rowContainer container my-5">
          <div ref={ref} className="movieRow">
            {slidebarTopRatedMovies !== undefined &&
              slidebarTopRatedMovies.map((Movie, index) => {
                return (
                  <Slideblock
                    key={index}
                    rowWidth={ref.current.offsetWidth}
                    poster_path={Movie.poster_path}
                    title={Movie.title}
                    Movie={Movie}
                  />
                );
              })}
          </div>
        </div>
      )}
      {props.title == "Popular Movies" && (
        <div className="rowContainer container my-5">
          <div ref={ref} className="movieRow">
            {slidebarPopularMovies !== undefined &&
              slidebarPopularMovies.map((Movie, index) => {
                return (
                  <Slideblock
                    key={index}
                    rowWidth={ref.current.offsetWidth}
                    poster_path={Movie.poster_path}
                    title={Movie.title}
                    Movie={Movie}
                  />
                );
              })}
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Slidebar;
