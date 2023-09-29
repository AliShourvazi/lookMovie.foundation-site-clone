import { useDispatch, useSelector } from "react-redux";
import "./SingleMoviePage.css";
import axios from "axios";
import { useEffect } from "react";

import Carousel from "react-grid-carousel";
import MovieCover from "../components/body/MovieCover";
import { useParams } from "react-router-dom";

function SingleMoviePage() {
  const movieData = useSelector((state) => state.movieData);
  const movies = useSelector((state) => state.movies);
  let similarMovies = [];
  const dispatch = useDispatch();

  const movieID = Number(
    useParams().id
  ); /*window.location.href.split("/").slice(-1)[0];*/
  useEffect(() => {
    async function getMovieData() {
      const data = await axios.get(
        `https://moviesapi.ir/api/v1/movies/${movieID}`
      );
      if (movieData.id !== data.data.id) {
        dispatch({ type: "SET_MOVIE_DATA", movieData: data.data });
      }
    }

    getMovieData();
  }, [dispatch, movieData, movieID]);

  if (movieData.id) {
    similarMovies = movies.filter((movie) =>
      movie.genres.includes(movieData.genres[0])
    );
  }

  return (
    <>
      {movieData.id && (
        <div id="MoviePage">
          <section className="main">
            <div className="top">
              <div className="top">
                <div className="left">
                  {movieData.title}
                  <span>{movieData.year}</span>
                </div>
                <div className="right">IMDB {movieData.imdb_rating}</div>
              </div>

              <div className="middle">
                <i class="fa fa-play"></i>
              </div>
            </div>

            <div className="middle">
              <aside className="left">
                <img src={movieData.poster} alt={`${movieData.title}`} />
                <section> </section>
              </aside>

              <aside className="right">
                <div className="top">
                  {/* <!-- name - genere - time - description - 2 buttons --> */}

                  <div className="text">
                    <p>
                      {movieData.year} - {movieData.genres[0]} -{" "}
                      {movieData.genres[1]}
                    </p>
                    <p>{movieData.runtime}</p>
                  </div>

                  <div className="description"></div>

                  <div className="buttons">
                    <button id="download">Download Now</button>
                    <button id="play">Play Now</button>
                  </div>
                </div>

                <div className="bottom">
                  <p> Stars :</p>
                  {/* <!-- image of actors --> */}
                  <div className="container">
                    {movieData.actors.split(",").map((star) => (
                      <div key={star} className="superStar">
                        {"avatar"}
                        <span className="star-name"> {star} </span>
                      </div>
                    ))}
                  </div>
                  <p id="director">Director :{movieData.director}</p>
                </div>
              </aside>
            </div>

            <div className="bottom">
              {/* <!-- 3 buttons for whatch trailer - watch later -favourits  --> */}

              <button className="buttons" id="watch-trailer">
                watch trailer
              </button>
              <button className="buttons" id="watch-later">
                watch later
              </button>
              <button className="buttons" id="favourites">
                add to favourites
              </button>
            </div>
          </section>

          <section className="suggestion">
            <p>You May also like :</p>
            <Carousel cols={5} rows={1} gap={5}>
              {similarMovies.map((movie) => (
                <Carousel.Item key={movie.id}>
                  <MovieCover movie={movie} />
                </Carousel.Item>
              ))}
            </Carousel>
          </section>
        </div>
      )}
    </>
  );
}

export default SingleMoviePage;
