import { useEffect } from "react";
import moviesList from "../store/moviesList";
import SinglePagePagination from "../components/body/SinglePagePagination";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import SinglePage from "../components/body/SinglePage";
import MoviesFilter from "../components/MoviesFilter/MoviesFilter";
import { useDispatch, useSelector } from "react-redux";
import CarouselComp from "../components/carousel/Carousel";

function MainPages() {
  const movies = useSelector((state) => state.movies);
  const allDataFetched = useSelector((state) => state.allDataFetched);
  const genreFilter = useSelector((state) => state.genreFilter);
  const filteredMovies = useSelector((state) => state.filteredMovies);

  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const allMovies = [];
      for (let page = 1; page <= 25; page++) {
        try {
          const data = await moviesList(page);
          allMovies.push(...data.data);
        } catch (error) {
          console.error(error);
        }
      }

      if (!movies.length) {
        dispatch({ type: "CRERATE_MOVIE_LIST", movies: allMovies });
        dispatch({ type: "ALL_DATA_FETCHED" });
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (genreFilter) {
      const tempMovies = movies.filter((movie) =>
        movie.genres.includes(genreFilter)
      );

      dispatch({ type: "UPDATE_FILTERED_MOVIES", filteredMovies: tempMovies });
    } else if (filteredMovies.length !== movies.length) {
      dispatch({ type: "UPDATE_FILTERED_MOVIES", filteredMovies: movies });
    }
  }, [genreFilter, movies]);

  const moviePerPage = 50;
  const totalMovies = filteredMovies.length;
  let pageCounter = [];
  for (let i = 1; i <= Math.ceil(totalMovies / moviePerPage); i++) {
    pageCounter.push(i);
  }

  return (
    <>
      {allDataFetched ? (
        <>
          <CarouselComp />
          <MoviesFilter />

          {filteredMovies.length > 0 ? (
            <>
              <SinglePage
                movies={filteredMovies.slice(
                  (currentPage - 1) * moviePerPage,
                  currentPage * moviePerPage
                )}
              />
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {allDataFetched ? (
                    <li className="page-item">
                      <a
                        onClick={() =>
                          currentPage === 1
                            ? null
                            : dispatch({
                                type: "CHANGE_CURRENT_PAGE",
                                value: currentPage - 1,
                              })
                        }
                        className="page-link pagination-link-custom"
                        href="!#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                  ) : null}

                  {pageCounter.map((i) => (
                    <SinglePagePagination pageNumber={i} key={i} />
                  ))}
                  {allDataFetched ? (
                    <li className="page-item">
                      <a
                        onClick={() =>
                          currentPage === Math.ceil(totalMovies / moviePerPage)
                            ? null
                            : dispatch({
                                type: "CHANGE_CURRENT_PAGE",
                                value: currentPage + 1,
                              })
                        }
                        className="page-link"
                        href="!#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              </nav>
            </>
          ) : (
            <p>No movies found.</p>
          )}
        </>
      ) : (
        <div className="spinner-grow" role="status"></div>
      )}
    </>
  );
}

export default MainPages;
