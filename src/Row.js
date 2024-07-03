import React, { useEffect, useState } from 'react';
import "./Row.css";
import axios from './axios';

<<<<<<< HEAD
function Row({ title, fetchUrl, isLargeRow = false }) { // change as per every row title
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.log(movies);
            return request;
        }
=======
function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
>>>>>>> ebb759ba2a2e7a728100fc2ce541859f0b862fdc

        fetchData();
    }, [fetchUrl]);

<<<<<<< HEAD
    return ( 
        <div className='row'>
            <h2> {title}</h2>
            <div className="row_posters">
                {movies.map(
                    (movie) =>
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                        />
                    )
                )}
            </div>
        </div>
    );
}

=======
  console.log(movies);

  return (
    <div className='row'>
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(movie => (
          ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`} // Added a class for styling
              key={movie.id} // Added a unique key for each image
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title || movie.original_name} // Adjusted to handle different name properties
            />
          )
        ))}
      </div>
    </div>
  );
}

>>>>>>> ebb759ba2a2e7a728100fc2ce541859f0b862fdc
export default Row;
