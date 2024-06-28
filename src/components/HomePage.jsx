import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  const handleInputChange = (e) => {
    setNewMovie(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]);
      setNewMovie("");
    }
  };

  const handleRemoveMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <h1>Movie Watchlist</h1>
      <form onSubmit={handleFormSubmit}>
        {" "}
        <div>
          <label htmlFor='movieInput'>Add a Movie</label>
          <input
            type='text'
            id='movieInput'
            name='movieInput'
            value={newMovie}
            onChange={handleInputChange}
          />
          <button type='submit'>Add Movie</button>
        </div>
      </form>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie}
            <button onClick={() => handleRemoveMovie(index)}>
              Remove
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
