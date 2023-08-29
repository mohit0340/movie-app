import React, { useEffect, useState } from 'react'
import "./movie-card.css"
import { Link, useNavigate } from 'react-router-dom'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'


const Movie_card = (props) => {
 const navigate=useNavigate()
 const [shadowdata,setShowdata]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
setShowdata(false)
  },3000)
},[])



  const cardclick=(id)=>{
    navigate(`/movie-preview/${id}`)

  }
    
  return (
    
       <div className=' container text-light'>
       
       
        
           <div className='row'>
        {
     
        props.data.map((item,index)=>(
          // <Link to={`movie-preview/${item.id}`}>
shadowdata==true?(
          <SkeletonTheme className='card-image-div h-50 w-auto row-col-3 mb-4 ' highlightColor='#444' baseColor='#202020'>
          <Skeleton height={300} duration={1}></Skeleton>
        </SkeletonTheme>):(
          <div className='card-image-div h-50 w-auto row-col-3 mb-4 ' key={item.id} onClick={()=>cardclick(item.id)}>
          <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`}></img>
          
          </div>)
          // </Link>
          
        ))
        
        }
        </div>
        </div>
       

            
            
            
     
      

  )
}

export default Movie_card
