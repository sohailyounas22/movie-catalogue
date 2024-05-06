<template>
  <section class="py-[5rem]">
    <Header />

    <main class="container">
      <div class="loader justify-center" v-if="isSearching">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <MovieList v-else :movies="movies" />
    </main>
  </section>
</template>
<script setup>
import MovieList from "../components/MovieList.vue";
import Header from "../components/Header.vue";
import { storeToRefs } from "pinia";

import { useMovieStore } from "../stores/movie";
const store = useMovieStore();

const { isSearching, movies } = storeToRefs(store);
</script>
