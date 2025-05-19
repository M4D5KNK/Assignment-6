import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useStoreContext } from "../context/context";
import "./GenreView.css";

function GenreView() {
  const { genre_id } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { cart, setCart } = useStoreContext();



  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${genre_id}&page=${page}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }
    fetchMovies();
  }, [genre_id, page]);


  const cartAdd = (movie) => {
    if (cart.has(movie.id)) {
      alert("This movie is already in your cart.");
    } else {
      setCart(prevCart => prevCart.set(movie.id, movie));     }
  };


  return (
       <div className="hero">
      <div className="genre-movies-grid">
        {movies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movies/details/${movie.id}`}>
              <img
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/500x750?text=No+Poster'
                }
                alt={movie.title}
              />
            </Link>
            <h3>{movie.title}</h3>
            <p>Rating: {movie.vote_average?.toFixed(1)}</p>
            <button onClick={() => cartAdd(movie)}>
              {cart.has(movie.id) ? "Added" : "Buy"}
            </button>
          </div>
        ))}
      </div>

      <div className="genre-view-pagination-container">
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>
        <button
          className="genre-view-pagination-button"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default GenreView;