import React,{useContext} from 'react'
import bg1 from '../Images/bg1.jpg'
import '../App.css'
import { StateContext } from '../Helpers/StateContext';

function OtherMovieBlocks(props) {
  const {state,setState,movieDetails,setMovieDetails}= useContext(StateContext)
  return (
    <div style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center',height:'20rem',margin:'1rem',width:'13vw',marginRight:'5vh',marginTop:'5vh'}}>
        <img onClick={()=>{setState('Movie')
  setMovieDetails(props.Movie)}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.poster_path}`} alt="" srcSet="" style={{height:'100%', cursor:'pointer',objectFit:'cover',width:'100%'}}/>  
      <div style={{display:'flex',flexDirection:'row',marginTop:'1vh',color:'white'}}>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
           <p className='genres'>{props.title}</p>
           <p className='genres'> 2022</p>
            </div>
      </div>
    </div>
  )
}

export default OtherMovieBlocks