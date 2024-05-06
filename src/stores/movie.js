// stores/counter.js
import { defineStore } from "pinia";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const useMovieStore = defineStore("movie", {
  state: () => {
    return {
      movies: [],
      movie: [],
      isSearching: false,
      error: null,
      isShowModal: false,
    };
  },
  actions: {
    async searchMovies(query) {
      this.isSearching = true;
      this.error = null;

      try {
        const response = await axios.get(
          `${apiUrl}search/movie?api_key=${apiKey}&query=${query}`
        );
        const getMovies = response.data.results.slice(0, 3);
        if (getMovies.length > 0) {
          this.movies = getMovies;
          this.error = "";
          this.isShowModal = false;
        } else {
          this.error = "Sorry, no movie found against your query!";
          this.isShowModal = true;
        }
      } catch (error) {
        this.error = error.message;
        this.isShowModal = true;
      } finally {
        this.isSearching = false;
      }
    },
    async movieDetail(movieId) {
      try {
        this.error = null;
        const response = await axios.get(
          `${apiUrl}movie/${movieId}?api_key=${apiKey}&append_to_response=images`
        );
        this.movie = response.data;
        this.isShowModal = false;
      } catch (error) {
        this.error = "An error occurred while fetching movie details.";
        this.isShowModal = true;
      }
    },
  },
});
