import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import "./Player.css"
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {
  const {id}=useParams();
  const [data,setdata]=useState({
    key:"",
    type:"",
    name:"",
    published_at:"",
  })
    
 const navigate=useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjg5MzgzZDI3NmJkYTNkNDA1ODI4MjQzYzM2MTk5NCIsIm5iZiI6MTc1MzgxOTExMS4yMjU5OTk4LCJzdWIiOiI2ODg5MjdlNzE5NDkyMDUzMmJjZjA0MzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xHyajdQW0BouF7TBbx0kohBWJF0R2JjQzeLaC2cIKFY'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res =>{
       useState(setdata(res.results[0]))
       }
    )
    .catch(err => console.error(err));
  })
  

  return (
    <div className='player'>
      <img onClick={()=>navigate('/')} src={back_arrow_icon} alt=""/>
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${data.key}`} 
      title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
      <p  className='left'>{data.published_at.slice(0,10)}</p>
      <p className='center'>{data.name}</p>
      <p className='third'>{data.type}</p>
    </div>
    </div>
  );
}

export default Player;
