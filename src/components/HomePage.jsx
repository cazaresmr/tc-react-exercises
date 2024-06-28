// src/components/HomePage.jsx

// import React from "react";
import "./HomePage.css";

function HomePage() {
  const movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Spirited Away",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia",
  ];
  return (
    <div className='container'>
      <h1>Movie Watchlist</h1>
      <form>
        <div>
          <label htmlFor='movieInput'>Add a Movie</label>
          <input type='text' id='movieInput' name='movieInput' />
          <button type='submit'>Add Movie</button>
        </div>
      </form>
      <ul>
        {/* <li>The Shawshank Redemption</li>
        <li>The Godfather</li>
        <li>The Dark Knight</li>
        <li>Spirted Away</li>
        <li>One Flew Over the Cuckoo&apos;s Nest</li>
        <li>Lawrence of Arabia</li> */}
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
