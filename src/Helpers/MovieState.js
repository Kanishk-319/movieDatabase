import React, { useState } from 'react'
import MovieContext from './MovieContext'

function MovieState(props) {
  const [trendingMovieDetails, setTrendingMovieDetails] = useState('')
  const [topRatedMoviesDetails, setTopRatedMoviesDetails] = useState('')
  const [popularMoviesDetails, setPopularMoviesDetails] = useState('')
  const [airingTodayTVDetails, setAiringTodayTVDetails] = useState('')
  const [genreMoviesDetails, setGenreMoviesDetails] = useState('')
  const [latestMoviesDetails, setLatestMoviesDetails] = useState('')
  const [animeMoviesDetails, setAnimeMoviesDetails] = useState('')
  const [youtubeLink, setYoutubeLink] = useState('')
  const [searchMovieCollection, setSearchMovieCollection] = useState('')
  const [MoviesDetails, setMoviesDetails] = useState('')
  const apiKey = '57f6dc8dd3096ab5fbb379280349c183';
  const getTrendingMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&page=1`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await response.json()
    setTrendingMovieDetails(json)
  }

  const getTopRatedMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setTopRatedMoviesDetails(json)
  }
  const getPopularMovies = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1page=1`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setPopularMoviesDetails(json)
  }

  const getAiringTodayTV = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1page=1`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setAiringTodayTVDetails(json)
  }
  const getGenreMovies = async (genreid) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=${genreid}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setGenreMoviesDetails(json)
  }

  const getYoutubeLink = async (genreid) => {
    const res = await fetch(`http://api.themoviedb.org/3/movie/${genreid}/videos?api_key=${apiKey}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setYoutubeLink(json)
  }

  const getSearchedMovie = async (query) => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setSearchMovieCollection(json)

  }

  const getLatestMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setLatestMoviesDetails(json)
  }

  const getAnimeMovie = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&with_genres=16&with_keywords=210024|287501&with_text_query=death`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setAnimeMoviesDetails(json)
  }

  const getMovie = async (lan) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_original_language=${lan}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const json = await res.json()
    setMoviesDetails(json)
  }
  return (
    <MovieContext.Provider value={{ getMovie, MoviesDetails, getAnimeMovie, animeMoviesDetails, latestMoviesDetails, getLatestMovie, getTrendingMovies, getSearchedMovie, searchMovieCollection, trendingMovieDetails, getTopRatedMovies, youtubeLink, getYoutubeLink, topRatedMoviesDetails, getPopularMovies, popularMoviesDetails, airingTodayTVDetails, getAiringTodayTV, getGenreMovies, genreMoviesDetails }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieState