const API_KEY = "be13af7df78e25784b192af0f5483209";
const request = {
  fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&append_to_response=videos`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&append_to_response=videos`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&append_to_response=videos`,
  fetchTvPopular: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&append_to_response=videos`,
  fetchMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&append_to_response=videos`,
};
export default request;
