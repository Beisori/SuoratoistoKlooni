/*
source: https://github.com/Aaleen110/netflix-clone/blob/main/src/services/requests.js
*/

const API_KEY = "eaa4d9ee470345a99f952f889c06479c";
const requests = {
    //Add fetchAllMoviesByGenre here
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,    
}

export default requests;