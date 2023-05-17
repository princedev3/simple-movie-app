import {useEffect, useState} from "react"
import './App.css';
import MovieCard from "./component/MovieCard";



function App() {


  const[movies,setMovies]=useState([])
  const[search,setSearch]=useState("")
  const[selectmovie,setSelectmovie]=useState({})

  const fetchMovie = async (search)=>{
    const param = search? "search":"discover"
    const data = await fetch(`https://api.themoviedb.org/3/${param}/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&query=${search}`)
    const result = await data.json()
    setMovies(result.results)
    setSelectmovie(result.results[0])
  }

  useEffect(()=>{
    fetchMovie()
  },[])

 

  const handleSubmit=(e)=>{
    e.preventDefault()
    fetchMovie(search)
  }

 
  const image_path = "https://image.tmdb.org/t/p/w500/"

  



  const renderMovie= ()=>(
   
    movies.map(movies=>(
      <MovieCard key={movies.id} movie={movies} selectmovies={setSelectmovie}/>
      ))
  )
  
  return (
    <div>

          <header>
            <h2>Movie Trailer App</h2>
            <form onSubmit={handleSubmit}>
              <input type="test" onChange={e=>setSearch(e.target.value)}/>
              <button type="submit" className="prybtn">Search</button>
              
            </form>
          </header>
          <div className="hero" style={{backgroundImage:  `url(${image_path}${selectmovie.backdrop_path})`}}>
        
            <div className="hero-content">
            <h1>{selectmovie.title}</h1>
            <button className="trailerbtn" type="submit">play trailer</button>
            <p>{selectmovie.overview? selectmovie.overview:null}</p>
            </div>

          </div>
         

        <div className="container">
          {renderMovie()}
        </div>
    </div>
  );
}

export default App;

 