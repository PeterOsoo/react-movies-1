
const MovieCard = ({ movie }) => {
  // A high-quality dark cinema fallback
  const fallback = "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=500&auto=format&fit=crop";

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : fallback} 
          alt={movie.Title} 
          // If the URL exists but the link is actually broken, this fires:
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = fallback;
          }}
        />
      </div>

      <div className="movie-details">
        <div className="meta-row">
          <span>{movie.Type}</span>
          <p className="movie-year">{movie.Year}</p>
        </div>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;