import MovieCard from './components/MovieCard'
import Watchlist from './components/Watchlist'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'



 function App(){ 
  const [movies, setMovies] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedGenre, setSelectedGenre] = useState("All")
  
  useEffect(()=>{
    axios.get('/movies.json').then(response=>{
      setMovies(response.data)
    })
    .finally(() => {
      setLoading(false)
    })
    },[])
    
    const addToWatchlist =(movie)=>{
      const alreadyAdded = watchlist.some(item => item.id === movie.id)
      if (alreadyAdded) {
        return
      }
      setWatchlist([...watchlist,movie])
    }
    
    const removeFromWatchlist = (id) => {
      setWatchlist(watchlist.filter(movie => movie.id !== id))
    }
    
    const filteredMovies = selectedGenre === "All" ? movies 
    : movies.filter(movie => movie.genre === selectedGenre)
    
    return(
    <div>
      <h1>Movie Watchlist</h1>
      <div className="genre-buttons">
        <button onClick={() => setSelectedGenre("All")}>All</button>
        <button onClick={() => setSelectedGenre("Action")}>Action</button>
        <button onClick={() => setSelectedGenre("Comedy")}>Comedy</button>
        <button onClick={() => setSelectedGenre("Drama")}>Drama</button>
      </div>
      
      {loading ? ( <div className="spinner"></div>) : filteredMovies.length === 0 ? (<p>No movies found</p>) : (
        <div className="movie-container">
          {filteredMovies.map(movie => (
            <MovieCard
            key={movie.id}
            movie={movie}
            title={movie.title}
            genre={movie.genre}
            year={movie.year}
            rating={movie.rating}
            onAdd={addToWatchlist}
            isAdded={watchlist.some(
              item => item.id === movie.id
            )}
            />
            ))}
        </div>
      )}
      
      <Watchlist 
      watchlist={watchlist} 
      onRemove={removeFromWatchlist} />

    </div>
    )
  }
  
export default App