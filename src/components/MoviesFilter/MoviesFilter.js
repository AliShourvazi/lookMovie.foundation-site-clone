import "./MoviesFilter.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

function MoviesFilter() {
  const years = [];
  for (let i = 1913; i < 2024; i++) {
    years.push(i);
  }

  const rating = [];
  for (let i = 1; i < 10; i++) {
    rating.push(`+${i}`);
  }

  const geners = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Drama",
    "SciFi",
    "Family",
    "Horror",
    "Fantasy",
    "History",
    "Music",
    "Mystery",
    "Romance",
    "War",
    "Western",
  ];

  const [selectedGenre, setSelectedGenre] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <section id="MoviesFilter" style={{ marginBottom: "50px" }}>
        <div className="top">
          <p style={{ marginBottom: "20px" }}>MOVIES FILTER</p>
        </div>

        <div className="bottom">
          <form
            onSubmit={(event) => {
              event.preventDefault();

              selectedGenre === "default"
                ? dispatch({ type: "GENRE_FILTER", genre: "" })
                : dispatch({ type: "GENRE_FILTER", genre: selectedGenre });
            }}
          >
            <div className="selectContainer" id="geners">
              <select
                className="selectBox"
                value={selectedGenre}
                onChange={(event) => {
                  setSelectedGenre(event.target.value);
                }}
              >
                <option value="default"> Select Gener </option>
                {geners.map((gener) => (
                  <option key={gener} value={gener}>
                    {gener}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="selectContainer" id="years">
              <select className="selectBox">
                <option value="default"> Select Year </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="selectContainer" id="rating">
              <select className="selectBox">
                <option value="default"> Select Rating </option>
                {rating.map((rate) => (
                  <option key={rate} value={rate}>
                    {rate}
                  </option>
                ))}
              </select>
            </div>

            <div className="selectContainer" id="type">
              <select className="selectBox">
                <option value="Newst First">
                  {" "}
                  Newst First{" "}
                </option>
                <option value="Oldest First"> Oldest First </option>
                <option value="Top IMDB"> Top IMDB </option>
                <option value="Bottom IMDB"> Bottom IMDB </option>
              </select>
            </div>

            <input type="submit" />
          </form>
        </div>
      </section>
    </>
  );
}

export default MoviesFilter;
