import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getApiData } from "../utils/apiCalls";
import { KEY } from "../utils/apiKey";

const MoviesPage = () => {
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
        setFetchedMovies(data.results);
        // console.log("fetchedMovies z Api-query:", fetchedMovies);
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
        // console.log("pobrano z Api:", data.results);
        setFetchedMovies(() => data.results);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
    // eslint-disable-next-line
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
            <Link
              to={`${movie.id}`}
              state={{
                from: `/movies?title=${searchTerm}`
              }}
            >
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
