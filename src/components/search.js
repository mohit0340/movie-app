import React, { useEffect } from 'react'

const Search = () => {


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=phir hera pheri`)
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(err=>console.error(err))


    },[])

  return (
    <div>
    <h2>Search</h2>
    </div>
  )
}

export default Search

