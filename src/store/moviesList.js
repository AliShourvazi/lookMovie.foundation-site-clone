import axios from "axios";

const moviesList = async (page = 1) => {
  try {
    const response = await axios.get(
      `https://moviesapi.ir/api/v1/movies?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default moviesList;
