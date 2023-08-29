import React, { useEffect, useMemo, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import "./movie.css"
import { Link } from 'react-router-dom';
import Movie_card from './movie-card';

const Movies = () => {
const [populardata,setPopulardata]=useState("")
// const memo=useMemo(()=>{Movies()},[Movies])



  useEffect(()=>{
    
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=d78e686622ea93c61c2bdf860846213a&language=en-US")
    .then((res)=>res.json())
    .then((data)=>setPopulardata(data.results))

  },[])
  console.log(populardata)
  return (
   
    <div className='bg-black'>
      { populardata!=""?( <>
      <Carousel showThumbs={false} autoPlay={true} transitionTime={2} infiniteLoop={true} showStatus={false} dynamicHeight={true}>
        {
          populardata.map((data,index)=>(
           
            <Link to={`movie-preview/${data.id}`}> 
           
            <div  key={index} className='banner-div'>
                
              <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}></img>
              <div className=' position-absolute bottom-0 start-0 ps-3 pb-3 lh-1 text-light text-start'>
              <p className='fs-1 fw-bolder'>{data.title}</p>
              <p className='fs-3 text-justify '>Vote : {data.vote_average}/10 ⭐</p>
              <p className='fs-4'>Release Date : {data.release_date}</p>
              <p className=" w-75">Overview : {data.overview}</p>
              </div>
             
            </div>
            </Link>
          
           
          ))
        }
      </Carousel>
      <div className='text-light'> 
      <h2 className='text-start mb-4 mt-5 ms-5'>Popular</h2>
       
       <Movie_card data={populardata}/>
       </div>
       </>
       ):null}
    </div>
  )
}

export default  Movies
