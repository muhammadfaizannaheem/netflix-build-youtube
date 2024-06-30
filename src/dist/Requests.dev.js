"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Typically we would store in {process.env.API_KEY}
var API_KEY = "e2ccbe66a9d7f4cdbd9752c37f27df6b"; // const requests = {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   };

var requests = {
  fetchNetflixOriginals: "/discover/tv?api_key=".concat(API_KEY, "&with_networks=213"),
  fetchTrending: "/trending/all/week?api_key=".concat(API_KEY),
  fetchTopRated: "/movie/top_rated?api_key=".concat(API_KEY),
  fetchActionMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=28"),
  fetchComedyMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=35"),
  fetchHorrorMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=27"),
  fetchRomanceMovies: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=10749"),
  fetchDocumentaries: "/discover/movie?api_key=".concat(API_KEY, "&with_genres=99")
};
var _default = requests;
exports["default"] = _default;