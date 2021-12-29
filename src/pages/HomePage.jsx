import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage - strona domowa z listą popularnych filmów.
      <h1>Trending today</h1>
      <ul>
        <li>filmy...</li>
        <li>linki...</li>
        <li>duzo...</li>
        <li><Link to="movies/id">jakis film z id</Link></li>
      </ul>
    </div>
  );
}

export default HomePage
