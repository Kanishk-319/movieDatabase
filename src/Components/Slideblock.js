import React,{useState,useRef,useContext,useEffect} from 'react'
import {motion} from 'framer-motion';
import "../App.css";
import { StateContext } from '../Helpers/StateContext';
import { Link } from 'react-router-dom';

function Slideblock(props) {
  const ref=useRef(0)
  const[move,setMove]=useState(0)
  if(props.rowWidth!== undefined){
    setTimeout(() => {
      if(move>-props.rowWidth){
        setMove(move-ref.current.offsetWidth)
      }
      else{
        setMove(0)
      }
    }, 3000);
  }
  const {state,setState,movieDetails,setMovieDetails}= useContext(StateContext)
  


  return (
    <motion.div  ref={ref} animate={{x:move}} transition={{delay:2, repeatDelay:2,repeat:Infinity}} className='slideblocks'>
    <img onClick={()=>{setState('Movie')
  setMovieDetails(props.Movie)}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.poster_path}`} alt="" srcSet="" style={{height:'70%',cursor:'pointer'}}/>  
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'5vh'}}>
        <p>{props.title}</p>
        <p className='gerneANDratingheading'>CRIME,DRAMA,THRILLER</p>
      </div>
    </motion.div>
    
  )
}

export default Slideblock