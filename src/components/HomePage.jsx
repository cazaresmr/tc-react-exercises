import { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [movies, setMovies] = useState([]); // Initialize to an empty array
  const [newMovie, setNewMovie] = useState(""); // State for input field

  const handleInputChange = (e) => {
    setNewMovie(e.target.value); // Update state with input field's value
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (newMovie.trim()) {
      setMovies([...movies, newMovie.trim()]); // Update movies state with new movie
      setNewMovie(""); // Clear input field after adding movie
    }
  };

  const handleRemoveMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index)); // Remove movie at the specified index
  };

  return (
    <div className='container'>
      <h1>Movie Watchlist</h1>
      <form onSubmit={handleFormSubmit}>
        {" "}
        {/* Handle form submission */}
        <div>
          <label htmlFor='movieInput'>Add a Movie</label>
          <input
            type='text'
            id='movieInput'
            name='movieInput'
            value={newMovie} // Sync input value with state
            onChange={handleInputChange} // Handle input change
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
            {/* Button to remove movie */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
