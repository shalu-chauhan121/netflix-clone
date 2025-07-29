import React,{useEffect, useRef} from 'react';
import "./TitleCards.css"
import card_data from "../../assets/Cards_data.js"
const TitleCards = ({title,catagory}) => {

  const cardsRef=useRef();

  const handleWheel=(event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list">
      {
        card_data.map((ele,index)=>{
          return (
            <div className="card" key={index} ref={cardsRef}>
          <img src={ele.image}></img>
          <p>{ele.name}</p>
            </div>
          )
        })
      }
        </div>
    </div>
  );
}

export default TitleCards;
