<template>
  <header>
    <div class="text-center pb-4">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search movies..."
        class="pl-3 py-2 rounded-full focus-visible:outline-0"
        name="search"
        aria-label="Search movies"
      />
    </div>
  </header>
</template>

<script setup>
import { useMovieStore } from "../stores/movie";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

const searchQuery = ref("");
const store = useMovieStore();
const { searchMovies } = store;
const { isSearching } = storeToRefs(store);

let timeoutId = null;
const debouncedSearch = () => {
  clearTimeout(timeoutId);
  if (searchQuery.value.length >= 2) {
    timeoutId = setTimeout(() => {
      isSearching.value = true;
      searchMovies(searchQuery.value);
    }, 300);
  }
};

watch(searchQuery, debouncedSearch);
</script>
