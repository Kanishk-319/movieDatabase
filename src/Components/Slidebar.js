import React,{useEffect,useRef} from 'react'
import Slideblock from './Slideblock'
import "../App.css";
function Slidebar(props) {
  const checkWidth=()=>{
    if(document.querySelector('.movieRow')!==null){
    }
  }
  const ref=useRef(0)
  useEffect(()=>{
    checkWidth()
  },[])
  return (
    <div  style={{display:'flex',flexDirection:'column',justifyContent:'center'}} className='container'>
      <div className='headings'>{props.title}</div>
    <div className='rowContainer container my-5'>
      <div ref={ref} className='movieRow'>
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      <Slideblock rowWidth={ref.current.offsetWidth} />
      </div>
      </div>
    </div>
  )
}

export default Slidebar