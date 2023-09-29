import { Link } from "react-router-dom";
import "./MovieCover.css";

function MovieCover(props) {

  return (
    <div className="movie-item-style-2 movie-item-style-1">
      <div className="hvr-inner">
        <Link to={`/${props.movie.id}`}>
          {" "}
          WATCH NOW <i className="ion-play"></i>
        </Link>
      </div>
      <div className="image__placeholder">
        <Link to={`/${props.movie.id}`}>
          <img
            className="lozad"
            src={props.movie.poster}
            data-src={props.movie.poster}
            alt={props.movie.title}
            data-loaded="true"
          />
          <p className="rate">
            <i className="ion-android-star"></i>
            <span>8</span> /10
          </p>
        </Link>
        <div className="fhd-quality quality-tag">FHD</div>{" "}
      </div>
      <div className="mv-item-infor">
        <h6>
          <a href="/movies/view/18180926-the-new-boy-2023">
            {props.movie.title}{" "}
          </a>
        </h6>
      </div>
    </div>
  );
}
export default MovieCover;
