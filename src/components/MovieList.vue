<template>
  <div class="flex justify-center gap-2 flex-col md:flex-row">
    <MovieCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </div>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";

defineProps({
  movies: {
    type: Object,
    required: true,
  },
});
</script>
