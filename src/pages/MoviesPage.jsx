import { useState } from "react";
import { Link } from "react-router-dom";
import { getApiData } from "../utils/apiCalls";
import { KEY } from "../utils/apiKey";
// import Cast from "../components/Cast";
// import Reviews from "../components/Reviews";

const MoviesPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [fetchedMovies, setFetchedMovies] = useState([]);
  const [error, setError] = useState(null);
 
  const getData = () => {
    getApiData(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${wordEntered}`
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
  }

  
  const handleFilter = (e) => {
    console.log(e.target.value);
    setWordEntered(e.target.value);
    //  const filtered = data.filter((book) =>
    //    book.title.toLowerCase().includes(searchWord.toLowerCase())
    //  );
    //  console.log("filtered", filtered);
    //czyszczenie  pola z wynikami jesli znowu jest pusty input
    //  searchWord === "" ? setFilteredData([]) : setFilteredData(filtered);
  };

  return (
    <div>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <input
        type="text"
        placeholder="Search for movie..."
        value={wordEntered}
        onChange={handleFilter}
      />
      <button onClick={getData}>Search
        {/* <Link to={`&query=${wordEntered}`}>Search</Link> */}
      </button>
      {/* {wordEntered} */}
      <p></p>
      <ul>
        {fetchedMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.original_title}</Link>
          </li>
        ))}
      </ul>
      {/* <p>Additional information</p>
      <ul>
        <li>
          <Link to="movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="movieId/reviews">Reviews</Link>
        </li>
      </ul> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default MoviesPage;
