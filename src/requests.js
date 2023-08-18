const API_KEY = "9b850bfea7e8261bcfc7acc29fd6637c";

const requests = {
    fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=9b850bfea7e8261bcfc7acc29fd6637c&append_to_response=videos`,
    fetchNetflixOriginals: `/discover/tv?api-key=${API_KEY}&with-networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;