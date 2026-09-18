function MovieCard(props){
    return(
    <div className="movie-card">
        <h2>{props.title}</h2>
        <p>Genre:{props.genre}</p>
        <p>Rating :⭐{props.rating}</p>
        <p>Year:{props.year}</p>
        
        <button onClick={() => props.onAdd(props.movie)} disabled={props.isAdded}>
            {props.isAdded ? "Added" : "Add to Watchlist"}
        </button>
        
    </div>
    )
}
export default MovieCard