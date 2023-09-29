const INITIAL_STATE = {
  currentPage: 1,
  genreFilter: "",
  movies: [],
  filteredMovies:[],
  movieData:{},
  allDataFetched: false,
};

function Reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN_STATUS_CHANGE":
      return { ...state, logInStatus: !state.logInStatus };
    case "CHANGE_CURRENT_PAGE":
      return { ...state, currentPage: action.value };
    case "CRERATE_MOVIE_LIST":
      return { ...state, movies: action.movies };
    case "GENRE_FILTER":
      return { ...state, genreFilter: action.genre };
    case "UPDATE_FILTERED_MOVIES":
      return {...state, filteredMovies: action.filteredMovies}
    case "SET_MOVIE_DATA":
      return {...state, movieData: action.movieData}
case "ALL_DATA_FETCHED":
  return {...state, allDataFetched: !state.allDataFetched}
    default:
      return state;
  }
}

export default Reducer;
