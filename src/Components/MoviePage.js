import '../App.css'
import React, { useContext, useEffect, useState } from 'react'
import imdb from '../Images/imdb.png'
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieContext from "../Helpers/MovieContext";
import { StateContext } from '../Helpers/StateContext';
import { auth, db, storage } from '../Helpers/firebase';
import { getDocs, collection, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { uploadBytes, ref } from 'firebase/storage'


function MoviePage() {
  const movieCollectionRef = collection(db, "movies")
  const { movieDetails } = useContext(StateContext)
  const context = useContext(MovieContext)
  const youtubeLink = context.youtubeLink
  const getYoutubeLink = context.getYoutubeLink
  const [youtubeKey, setYoutubekey] = useState('')
  const [likeIconColor, setLikeIconColor] = useState('grey')

  useEffect(() => {
    getYoutubeLink(movieDetails.id)
  }, [])

  useEffect(() => {
    setYoutubekey(youtubeLink.results?.[0]?.key)
  }, [youtubeLink])

  const handelLike = async () => {
    likeIconColor !== 'grey' ? setLikeIconColor('grey') : setLikeIconColor('red')
    try {
      await addDoc(movieCollectionRef, {
        id: auth.currentUser.uid,
        title: movieDetails.title,
        poster_path: movieDetails.poster_path
      })
    }
    catch (err) {
      console.error(err)
    }

  }

  return (
    <div className='MPContainer container'>
      <div style={{ display: 'flex', flexDirection: 'column', width: '70%', padding: '1vh', height: 'max-content' }}>
        <h1 className='MPHeading moviename' style={{ color: 'black' }}>{movieDetails.title}</h1>

        <div className='container' style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}> <img style={{ height: '5vh', width: '3vw', marginLeft: '4.5vh' }} src={imdb} alt="" /> <span style={{ marginLeft: '1vh' }}>Score</span></div>
          <div style={{ display: 'flex', marginLeft: '2.5vw', fontWeight: 'bold' }}>{movieDetails.release_date.slice(0, 4)}</div>
          <div style={{ display: 'flex', marginLeft: '2.5vw', color: 'red' }}>CRIME, DRAMA, THRILLER</div>
          <FavoriteIcon onClick={handelLike} style={{ display: 'flex', marginLeft: '2.5vw', color: likeIconColor, cursor: 'pointer' }} />
        </div>
        <div className='container' style={{ color: 'black', display: 'flex', alignItems: 'center', marginTop: '2vh', padding: '2.5vw' }}>
          <p>{movieDetails.overview}</p>
        </div>
        <div className='container' style={{ display: 'flex', alignItems: 'center', paddingLeft: '2.5vw' }}>
          <a style={{ color: 'black' }} href={`https://www.youtube.com/watch?v=${youtubeKey}`} target='_blank'>
            <PlayCircleFilledWhiteOutlinedIcon
              style={{ fontSize: "3rem", cursor: "pointer" }}
            />
          </a>

          <span style={{ color: 'black' }} className="watchthetrailer">
            WATCH THE TRAILER
          </span>
        </div>
      </div>
      <div>
        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movieDetails.poster_path}`} alt="" style={{ height: '70%' }} />
      </div>
    </div>
  )
}

export default MoviePage