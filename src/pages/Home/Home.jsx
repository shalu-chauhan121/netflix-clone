import React from 'react';
import './Home.css'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play_btn from "../../assets/play_icon.png"
import info_btn from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards"
const Home = () => {
  return (
    <div className='home'> 
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} className='banner-img'></img>
        <div className="hero-caption">
          <img src={hero_title} className='caption-img'></img>
        <p>Discovering his ties to a secret ancient order, a young man
          living in modern Istanbul embarks on a quest to save the city
          from an immortal enemy.
        </p>
        <div className="hero-btns">
          <button className='btn'><img src={play_btn} className='btn-img'></img> Play</button>
          <button className='btn dark-btn'><img src={info_btn} className='btn-img'></img>More Info</button>
        </div>
        <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} catagory={"upcoming"}/>
      <TitleCards title={"Only on Netflix"} catagory={"top_rated"}/>
      <TitleCards title={"Upcoming"} catagory={"popular"}/>
      <TitleCards title={"Top picks for you"} catagory={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
  