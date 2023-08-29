import React, { useEffect, useState } from 'react'
import Movie_card from './movie-card'

const Top_rated = () => {
    const [toprated,setToprated]=useState("")
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d78e686622ea93c61c2bdf860846213a&language=en-US")
        .then((res)=>res.json())
        .then((data)=>setToprated(data.results))
    },[])
  return (
    <div className='w-100 bg-black'>{
        toprated!=""? (
         <div className='text-light pb-5'>
                 <h2 className='text-start mb-4 pt-5 ms-5'>Top Rated</h2>
   
           <Movie_card data={toprated}></Movie_card>
           </div>
       ):null }</div>
  )
}

export default Top_rated
