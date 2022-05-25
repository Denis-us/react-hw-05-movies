import axios from 'axios'

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "b4cae661bd383c29838501f5623954e9";

const trendingMovies = () => axios.get(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
const searchMovie = (movie) => axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`)
const movieDetails = (id) => axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
const actors = (id) => axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
const review = (id) => axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)

const fetch = {
    trendingMovies,
    searchMovie,
    movieDetails,
    actors,
    review

} 

export default fetch