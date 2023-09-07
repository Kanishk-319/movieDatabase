import React, { useContext, useEffect, useState } from 'react'
import MovieContext from '../Helpers/MovieContext'
import '../App.css'
import OtherMovieBlocks from './OtherMovieBlocks'



function OtherMovie(props) {
    const getSlidebarMovies = (arr, num) => {
        return arr.slice(0, num);
    };


    const context = useContext(MovieContext)
    const airingTodayTVDetails = context.airingTodayTVDetails
    const latestMoviesDetails = context.latestMoviesDetails
    const getLatestMovie = context.getLatestMovie
    const getAiringTodayTV = context.getAiringTodayTV
    const getGenreMovies = context.getGenreMovies
    const getAnimeMovie = context.getAnimeMovie
    const getTopRatedMovies = context.getTopRatedMovies
    const topRatedMoviesDetails = context.topRatedMoviesDetails
    const animeMoviesDetails = context.animeMoviesDetails
    const genreMoviesDetails = context.genreMoviesDetails
    const getSearchedMovie = context.getSearchedMovie
    const getPopularMovies = context.getPopularMovies
    const getMovie = context.getMovie
    const MoviesDetails = context.MoviesDetails
    const popularMoviesDetails = context.popularMoviesDetails
    const searchMovieCollection = context.searchMovieCollection
    const [blockSearchMovies, setBlockSearchMovies] = useState('')
    const [blockGenreMovies, setBlockGenreMovies] = useState('')
    const [blockAiringMovies, setBlockAiringMovies] = useState('')
    const [blockLatestMovies, setBlockLatestMovies] = useState('')
    const [blockAnimeMovies, setBlockAnimeMovies] = useState('')
    const [blockTopRatedMovies, setBlockTopRatedMovies] = useState('')
    const [blockPopularMovies, setBlockPopularMovies] = useState('')
    const [blockBollywoodMovies, setBlockMovies] = useState('')
    getAiringTodayTV()
    { props.genreid !== undefined && getGenreMovies(props.genreid) }
    { props.title == 'search' && getSearchedMovie(props.searchQuery) }
    { props.title == 'latest' && getLatestMovie() }
    { props.title == 'anime' && getAnimeMovie() }
    { props.title == 'topRated' && getTopRatedMovies() }
    { props.title == 'popular' && getPopularMovies() }
    { props.title == 'bollywood' && getMovie('hi') }
    { props.title == 'hollywood' && getMovie('en') }

    useEffect(() => {
        {
            airingTodayTVDetails !== "" &&
                setBlockAiringMovies(
                    getSlidebarMovies(airingTodayTVDetails.results, 10)
                )
        }
    }, [airingTodayTVDetails])
    useEffect(() => {
        {
            genreMoviesDetails !== "" &&
                setBlockGenreMovies(
                    getSlidebarMovies(genreMoviesDetails.results, 20)
                )
        }
    }, [genreMoviesDetails])
    useEffect(() => {
        {
            searchMovieCollection !== "" &&
                setBlockSearchMovies(
                    getSlidebarMovies(searchMovieCollection.results, 20)
                )
        }
    }, [searchMovieCollection])

    useEffect(() => {
        // latestMoviesDetails !== '' &&
        //     setBlockLatestMovies(
        //         getSlidebarMovies(latestMoviesDetails?.results, 10)
        //     )
    }, [latestMoviesDetails])
    useEffect(() => {
        {
            animeMoviesDetails !== "" &&
                setBlockAnimeMovies(
                    getSlidebarMovies(animeMoviesDetails.results, 20)
                )
        }
    }, [animeMoviesDetails])

    useEffect(() => {
        {
            topRatedMoviesDetails !== "" &&
                setBlockTopRatedMovies(
                    getSlidebarMovies(topRatedMoviesDetails.results, 20)
                )
        }
    }, [topRatedMoviesDetails])

    useEffect(() => {
        {
            popularMoviesDetails !== "" &&
                setBlockPopularMovies(
                    getSlidebarMovies(popularMoviesDetails.results, 20)
                )
        }
    }, [popularMoviesDetails])

    useEffect(() => {
        {
            MoviesDetails !== "" &&
                setBlockMovies(
                    getSlidebarMovies(MoviesDetails.results, 20)
                )
        }
    }, [MoviesDetails])

    return (<>
        {props.title == 'Movies' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>ONLINE STREAMING</h3>
            <h1 className='moviename' style={{ color: 'white', fontSize: '3rem', padding: '0', margin: '2vh' }}>{props.title}</h1>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockAiringMovies !== '' &&
                    blockAiringMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {props.title == 'search' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockSearchMovies !== '' &&
                    blockSearchMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {props.title == 'Genre' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockGenreMovies !== '' &&
                    blockGenreMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {/* {props.title == 'latest' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockLatestMovies !== '' &&
                    blockLatestMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)} */}
        {props.title == 'anime' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockAnimeMovies !== '' &&
                    blockAnimeMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {props.title == 'topRated' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockTopRatedMovies !== '' &&
                    blockTopRatedMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {props.title == 'popular' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockPopularMovies !== '' &&
                    blockPopularMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}

        {props.title == 'bollywood' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockBollywoodMovies !== '' &&
                    blockBollywoodMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}
        {props.title == 'hollywood' && (<div style={{ backgroundColor: "rgb(17,17,17)", height: 'max-content', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2vh' }}>
            <h3 className='genres' style={{ color: 'white', fontSize: '16px' }}>Results for : {props.searchQuery} </h3>
            <div style={{ height: 'max-content', width: '85%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyItems: 'center', alignItems: 'center', marginTop: '5vh', paddingBottom: '1rem' }}>
                {blockBollywoodMovies !== '' &&
                    blockBollywoodMovies.map((item, index) => [
                        <OtherMovieBlocks Movie={item} title={item.title} poster_path={item.poster_path} key={index} />
                    ])
                }
            </div>
        </div>)}


    </>
    )
}

export default OtherMovie