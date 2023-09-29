import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <header>
      <aside className="left">
        <aside className="left">{/* Logo Placed Here */}</aside>

        <div className="container">
          <section className="top">
            <i className="cursor">
              <Link to={"/"}>Movies</Link>
            </i>
            <span className="cursor">TV SHOWS</span>
          </section>

          <section className="bottom">
            {/*  */}

            <span
              style={{ marginLeft: "20px" }}
              className="cursor item"
              id="filter"
            >
              Filter
            </span>
            <span className="cursor item" id="latest">
              LATEST
            </span>
            <div className="cursor item" id="categories">
              CATEGORIES &#709;
              <ul id="drop-down">
                <li>Action</li>
                <li>Adventure</li>
                <li>Animation</li>
                <li>Comedy</li>
                <li>Crime</li>
                <li>Drama</li>
                <li>Documentary</li>
                <li>Sci-Fi</li>
                <li>Family</li>
                <li>History</li>
                <li>Fantasy</li>
                <li>Horor</li>
                <li>Music</li>
                <li>Mystery</li>
                <li>Romance</li>
                <li>War</li>
                <li>Western</li>
              </ul>
            </div>

            <Link to="genres">
              <span className="cursor item" id="genes">
                Genres
              </span>
            </Link>
          </section>
        </div>
      </aside>

      <aside className="right">
        <div id="search" className="item">
          <input
            className="item"
            type="text"
            placeholder="Search a movie or TV Show"
          ></input>
          <button className="cursor item"> Search </button>
        </div>

        <button className="cursor item">
          {" "}
          <Link to="/logIn">LOGIN</Link>
        </button>
        <button className="cursor item">SIGNUP</button>
      </aside>
    </header>
  );
}

export default NavBar;
