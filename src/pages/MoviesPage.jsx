import { Link } from "react-router-dom";
// import Cast from "../components/Cast";
// import Reviews from "../components/Reviews";

const MoviesPage = () => {
  return (
    <div>
      MoviesPage - strona wyszukiwania filmów po słowie kluczu.
      <p style={{color:"lightgreen"}}>
        const [searchParams, setSearchParams] = useSearchParams();???
      </p>
      <input type="text" />
      <p>
        <Link to="id">jakis znaleziony film z id</Link>
      </p>
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

