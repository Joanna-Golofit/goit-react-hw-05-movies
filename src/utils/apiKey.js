const KEY = "4c868f688ccaa6211ab12d77fba2ebd8";
//  "https://api.themoviedb.org/3/movie/550?api_key=4c868f688ccaa6211ab12d77fba2ebd8"
const JEDEN_FILM = `https://api.themoviedb.org/3/movie/550?api_key=${KEY}`;
const COS = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${KEY}`;
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`;

export { KEY, COS, JEDEN_FILM, TRENDING };