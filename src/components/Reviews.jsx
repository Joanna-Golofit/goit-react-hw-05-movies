import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiData } from "./../utils/apiCalls";
import { KEY } from "./../utils/apiKey";

const Reviews = () => {
  const [fetchedDetails, setFetchedDetails] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getApiData(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
    )
      .then((data) => {
        console.log("pobrano z Api - reviews:", data.results);
        setFetchedDetails(data.results);
      })
      .catch((err) => {
        console.log("moj log z error.name", err.name);
        setError(err);
      });
  }, [movieId]);

  console.log("cos pobrano reviews?", fetchedDetails);

  const { author } = fetchedDetails;
  return (
    <div>
      Reviews component
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {!fetchedDetails && "No review yet.."}
      <ul>
        {fetchedDetails &&
          fetchedDetails.map(({ id, content, author }) => (
            <li key={id}>
            <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
