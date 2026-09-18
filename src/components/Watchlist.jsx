function Watchlist(props) {
    return(
    <div className="watchlist">
        <h2>My Watchlist</h2>
        
        {props.watchlist.map(movie => (
            <div key={movie.id}>
                <h3>{movie.title}</h3>
                    <p>Genre: {movie.genre}</p>
                    <p>Year: {movie.year}</p>
                    <p>Rating: ⭐ {movie.rating}</p>
                    <button onClick={() => props.onRemove(movie.id)}>Remove</button>
            </div>
        ))}
    </div>
    )
}

export default Watchlist