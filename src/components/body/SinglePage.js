import MovieCover from "./MovieCover";
import "./SinglePage.css";

function SinglePage(props) {
  return (
    <div className="movie-cover-container">
      {props.movies.map((movie) => (
        <MovieCover key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default SinglePage;
