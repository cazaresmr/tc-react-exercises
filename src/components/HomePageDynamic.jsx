import { useState } from "react";

function HomePage() {
  const [movies, setMovies] = useState([
    "The Shawshank Redemption",
    "Inception",
    "Interstellar",
  ]);
  const [newMovie, setNewMovie] = useState("");

  const handleInputChange = (event) => {
    setNewMovie(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMovie.trim() !== "") {
      setMovies([...movies, newMovie]);
      setNewMovie("");
    }
  };

  return (
    <div>
      <h1>Movies to Watch</h1>
      <form onSubmit={handleSubmit}>
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
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
