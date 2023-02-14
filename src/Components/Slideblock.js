import React,{useState,useRef} from 'react'
import {motion} from 'framer-motion';
import "../App.css";
import { display } from '@mui/system';

function Slideblock(props) {
  const ref=useRef(0)
  const[move,setMove]=useState(0)
  if(props.rowWidth!=undefined){
    setTimeout(() => {
      if(move>-props.rowWidth){
        setMove(move-ref.current.offsetWidth)
      }
      else{
        setMove(0)
      }
    }, 3000);
  }
  
     
  return (
    <motion.div ref={ref} animate={{x:move}} transition={{delay:2, repeatDelay:2,repeat:Infinity}} className='slideblocks'>
      <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg" alt="" srcset="" style={{height:'70%'}}/>
      {console.log(props.rowWidth)}
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'5vh'}}>
        <p>BLADE RUNNER</p>
        <p className='gerneANDratingheading'>CRIME,DRAMA,THRILLER</p>
      </div>
    </motion.div>
    
  )
}

export default Slideblock