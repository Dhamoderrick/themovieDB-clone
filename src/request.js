const API = "  "; //Your API KEY

const request = {
  fetchPopular: `/movie/popular?api_key=${API}`,
  fetchTrendingMovies: `/trending/movie/day?api_key=${API}`,
  fetchTrendingTv: `/trending/tv/day?api_key=${API}`,
  fetchTopratedMovies: `/movie/top_rated?api_key=${API}`,
  fetchSearch: `/search/movie?api_key=${API}&query=`,
  fetchToprated: `/movie/upcoming?api_key=${API}`,
  fetchPopularTv: `/tv/popular?api_key=${API}&page=50`,
  fetchPeople: `/person/popular?api_key=${API}&page=1`,
  fetchMovieDetails: `/movie/`,
  fetchTvDetails: `/tv/`,
  fetchMovieTrailer: `/videos?api_key=${API}`,
  api: `?api_key=${API}`,
  credits: `/credits?api_key=${API}`,
  keywords: `/keywords?api_key=${API}`,
};
export default request;
