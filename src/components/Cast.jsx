import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiData } from "./../utils/apiCalls";
import { KEY } from "./../utils/apiKey";

const Cast = () => {
  const [fetchedDetails, setFetchedDetails] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getApiData(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
    )
      .then((data) => {
        console.log("pobrano z Api - cast:", data.cast);
        setFetchedDetails(data.cast);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  }, [movieId]);

console.log("cos pobrano?" , fetchedDetails);
  return (
    <div>
      Cast component
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      <ul>
        {fetchedDetails.map(({ name, cast_id, character, profile_path }) => (
          <li key={cast_id}>
            <img src={profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
