import React, { useEffect, useState } from 'react'
import './Home.scss'
// import banner from '../../images/bn.jpg'
import axios from 'axios';
import {BiPlay} from 'react-icons/bi'
import {AiOutlinePlus} from 'react-icons/ai'





const url ="https://api.themoviedb.org/3";
//const url ="http://localhost:9000/";
const apiKey ="a69351892c87c6d13a8a4af09721d00b";
const image ="http://localhost:9000/api/image";
const Card =({img})=>(
    <img className='card' src={img} alt="fit" />
)
 
const Row =({Titale,arr =[
  
]}) =>(

    <div className='row'>
        <h2 >{Titale}</h2>
        <div>
        {
          arr.map((item,index)=>(
            // <Card key={index} img={`${image}/${item.poster_path}`}/>
            <Card key={index} img={`${image}/${item.poster_path}`}/>
          ))
        }
        </div>

    </div>
   
)

function Home() {
  const[popularMovies, setpopularMovies]=useState([])
  const[top_ratedMovies, settop_ratedMovies]=useState([])
  const[upcomingMovies, setupcoming]=useState([])
  const[now_playingMovies, setnow_playing]=useState([])

  useEffect(()=>{
   const fetchPopular =async()=>{
    // const {data:{results}}= await axios.get(`${url}/movie/popular?api_key=${apiKey}`);
    const {data}= await axios.get("http://localhost:9000/movies");
    console.log(data)
    
    setpopularMovies(data);
    
    
   };
   const fetchtop_rated =async()=>{
    const {data:{results}}= await axios.get(`${url}/movie/top_rated?api_key=${apiKey}`);
    settop_ratedMovies(results);
   };
   const fetchupcoming =async()=>{
    const {data:{results}}= await axios.get(`${url}/movie/upcoming?api_key=${apiKey}`);
    setupcoming(results);
   };
   const fetchnow_playing =async()=>{
    const {data:{results}}= await axios.get(`${url}/movie/now_playing?api_key=${apiKey}`);
    setnow_playing(results);
   };
   fetchPopular();
   fetchtop_rated();
   fetchupcoming();
   fetchnow_playing();

  },[])
  return (
    <section className="Home">
        <div className="banner" style={{
          backgroundImage: popularMovies[0]? `url(${`${image}/${popularMovies[0].backgroud_path}`})`: "rgb(16,16,16)"
        }}>
          {
            popularMovies[0] &&
            (<h1 >{popularMovies[0].original_title}</h1>)
          }
          {
            popularMovies[0] &&(
              <p>{popularMovies[0].overview}</p>
            )
          }
          <div>
            <button><BiPlay/> Play</button>
            <button>My List <AiOutlinePlus/></button>
          </div>
        
        </div>
        <Row Titale={"Popular On Netflix"} arr={popularMovies}/>
        <Row Titale={"Top Rated "} arr={top_ratedMovies}/>
        <Row Titale={"Upcoming"}arr ={upcomingMovies}/>
        <Row Titale={"Now laying"} arr ={now_playingMovies}/>
        <Row Titale={"My List"}/>
        <div>
        
        </div>
    </section>
  ) 
}

export default Home