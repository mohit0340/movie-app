import React, { useEffect, useState } from 'react'
import Movie_card from './movie-card'

const Upcoming = () => {
  // d78e686622ea93c61c2bdf860846213a
const [upcomingmovie,setUpcomingmovie]=useState("")
useEffect(()=>{
  fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=d78e686622ea93c61c2bdf860846213a&language=en-US")
  .then((res)=>res.json())
  .then((data)=>setUpcomingmovie(data.results))
},[])


  return (
    <div className='w-100 bg-black'>{
     upcomingmovie!=""? (
      <div className='text-light pb-5'>
              <h2 className='text-start mb-4 pt-5 ms-5'>Upcoming</h2>

        <Movie_card data={upcomingmovie}></Movie_card>
        </div>
    ):null }</div>
  )
}

export default Upcoming
