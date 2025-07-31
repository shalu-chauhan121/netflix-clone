import React,{useEffect,useState, useRef} from 'react';
import "./TitleCards.css"
import card_data from "../../assets/Cards_data.js"
import { Link } from 'react-router-dom';
const TitleCards = ({title,catagory}) => {
 const [apiData,setapiData]=useState([]);
  const cardsRef=useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Mjg5MzgzZDI3NmJkYTNkNDA1ODI4MjQzYzM2MTk5NCIsIm5iZiI6MTc1MzgxOTExMS4yMjU5OTk4LCJzdWIiOiI2ODg5MjdlNzE5NDkyMDUzMmJjZjA0MzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.xHyajdQW0BouF7TBbx0kohBWJF0R2JjQzeLaC2cIKFY'
    }
  };
 


  const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

 
    fetch(`https://api.themoviedb.org/3/movie/${catagory?catagory:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
      {
        apiData.map((ele,index)=>{
          return (
            <Link to={`player/${ele.id}`} className="card" key={index} >
          <img src={`https://image.tmdb.org/t/p/w500`+ele.backdrop_path}></img>
          <p>{ele.original_title}</p>
            </Link>
          )
        })
      }
        </div>
    </div>
  );
}

export default TitleCards;
