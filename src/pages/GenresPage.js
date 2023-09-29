import React, { useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import MovieCover from "../components/body/MovieCover";
import axios from "axios";
import { useSelector } from "react-redux";
import "./GenresPage.css";
import { Link } from "react-router-dom";

function GenresPage() {
  const movies = useSelector((state) => state.movies);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState({});

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get("https://moviesapi.ir/api/v1/genres");
        const genresData = response.data;

        // Set the genres in the state
        setGenres(genresData);
        
        // Group movies by genre
        const moviesGroupedByGenre = {};

        genresData.forEach((genre) => {
          const genreMovies = movies.filter((movie) =>
            movie.genres.includes(genre.name)
          );
          moviesGroupedByGenre[genre.id] = genreMovies;
        });

        // Set the movies grouped by genre in the state
        setMoviesByGenre(moviesGroupedByGenre);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchGenres();
  }, [movies]);
  return (
    <div className="car-container">
      {genres.map((genre) => (
        <div key={genre.id}>
          <h2 className="genre-name">{genre.name}</h2>
          <Carousel cols={5} rows={1} gap={5}>
            {moviesByGenre[genre.id]?.map((movie) => (
              <Carousel.Item key={movie.id}>
                <Link to={`${movie.id}`}><MovieCover movie={movie} /></Link>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
}

export default GenresPage;
