import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getApiData } from "../utils/apiCalls";
import { KEY } from "../utils/apiKey";
// import Cast from "../components/Cast";
// import Reviews from "../components/Reviews";

const MoviesPage = () => {
  // const [wordEntered, setWordEntered] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams("");
  const searchTerm = searchParams.get("title") || "";

  //odpali sie po kliknieciu Search
  const getData = () => {
    if (searchTerm === "") {
      return;
    }
    getApiData(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}`
    )
      .then((data) => {
        console.log("data.results z Api-query:", data.results);
        console.log("fetchedMovies z Api-query:", fetchedMovies);
        setFetchedMovies(data.results);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  };

  //odpali sie "po powrwocie" - jesli beda jakies dane w searchTerm
  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    getApiData(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${searchTerm}`
    )
      .then((data) => {
        console.log("pobrano z Api:", data.results);
        setFetchedMovies(data.results);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  }, []);

  const handleFilter = (e) => {
    const title = e.target.value;
    if (title) {
      setSearchParams({ title });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <input
        type="text"
        placeholder="Search for movie..."
        value={searchTerm}
        onChange={handleFilter}
        // onSubmit={getData}
      />
      <button onClick={getData}>Search</button>
      <p></p>
      <ul>
        {fetchedMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
