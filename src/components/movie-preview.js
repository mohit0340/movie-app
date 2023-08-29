import React, { useEffect, useState } from 'react'
import { redirect, useParams } from 'react-router-dom'
import "./movie.css"
import sendimg from "../assets/send.png"


const Movie_preview = () => {
const params=useParams("")
const[paramsdata,setParamsdata]=useState([])

// d78e686622ea93c61c2bdf860846213a
useEffect(()=>{
if(paramsdata==""){
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d78e686622ea93c61c2bdf860846213a&language=en-US`)
    .then((res)=>res.json())
    .then((data)=>setParamsdata([data]))}

},[])
console.log(params)
console.log(paramsdata)

  return (

    <div className="movie-preview-main bg-black text-light m-0 p-0">
       
       {
        Object(paramsdata).map((data,index)=>(
            <div key={index} className='container'>
                <div className='img-div row'>
              <img className='imagebg-main col-12 w-100 h-50' src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}></img>

              </div>
              <img className='imagebg-second shadow' src={`https://image.tmdb.org/t/p/original${data.poster_path}`}></img>
              <div className='bg-data col-5 position-absolute '>
                <h2 className='fs-2 fw-medium'>{data.original_title}</h2>
                <p>Time : {data.runtime} Minutes</p>
                <p>Release Date : {data.release_date} </p>
                <div className='d-flex gap-3 align-content-center'>
                
                    {
                    data.genres.map((item)=>(
                        <p key={item.id} className=' border rounded-5 p-2'>{item.name}</p>
                    ))
                    }</div>
                <button className='border rounded bg-warning p-1 mb-2' onClick={()=>{return window.location.href=`${data.homepage}`}}>Homepage <img src={sendimg} height={20}></img></button>

              </div>
              <div className=' col-12'>
                <h2 className=' '>Overview</h2>
              <p className='fs-5'>{data.overview}</p>
              </div>

              <div>
                <h2 className='mb-4 mt-5'>Production Companies</h2>
                {
                  data.production_companies.map((item)=>(
                    <div key={item.id} className='d-flex gap-3 pb-5 '>
                        <img className='compney bg-light  w-25 border rounded' src={`https://image.tmdb.org/t/p/original${item.logo_path}`}></img>
                      <div> <p>Companey Name : {item.name}</p> <p>Country : {item.origin_country}</p>
                        </div>

                    </div>
                  ))
                }
              </div>

                
             
              

            </div>
        ))
       }
      
    </div>
    
  )
}

export default Movie_preview
