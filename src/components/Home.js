import React, { useState, useEffect } from "react";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/no_image.jpg";
import API from "../API"

const Home = () => {
	const [state, setState] = useState();
	const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState(prevState => ({
        ...movies,
        results:
          page > 1 ? [...prevState.results, ...movies.results] : [...movies.results]
      }));

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies(1);
  }, [])
  console.log(state);
  return <div>Home page</div>;
};

export default Home;
