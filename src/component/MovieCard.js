import React from 'react'

const MovieCard = ({movie, selectmovies}) => {
    const image_path = "https://image.tmdb.org/t/p/w500/"
  return (
    <div onClick={()=>selectmovies(movie)}>
        <div>
                 {movie.backdrop_path? <img src={image_path+movie.backdrop_path}/> :null}
                  <h3 className='title'>{movie.title}</h3>
        </div>
    </div>
  )
}

export default MovieCard

