<template>
  <section class="pt-8 pb-16" v-if="movie">
    <div class="text-[#100f0f]">
      <div class="shadow-md pb-5">
        <div class="container">
          <div class="flex gap-4 flex-col md:flex-row">
            <div>
              <img :src="posterSrc" alt="" class="md:h-[400px] rounded-lg" />
            </div>
            <div class="mt-7">
              <h1 class="text-4xl font-medium">{{ movieTitle }}</h1>
              <div class="flex flex-col">
                <span>{{ adultRating }}</span>
                <span>{{ formattedRuntime }}</span>
                <span>{{ formattedGenreTitles }}</span>
                <span>{{ formattedReleaseDate }}</span>
                <span>{{ originCountry }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container" v-if="backDrops.length > 0 || movieOverview">
        <div class="mt-9" v-if="movieOverview">
          <h2 class="text-3xl font-bold">Storyline</h2>
          <p>{{ movieOverview }}</p>
        </div>
        <div class="mt-9" v-if="backDrops.length > 0">
          <h3 class="text-3xl font-bold">Photos & Videos</h3>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            <div v-for="(backDrop, index) in backDrops" :key="index">
              <img
                class="h-auto max-w-full rounded-lg"
                :src="`https://image.tmdb.org/t/p/w500/${backDrop.file_path}`"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMovieStore } from "../stores/movie";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { formatDate } from "@/utils/utils";

const route = useRoute();
const movieId = route.params.id;
const store = useMovieStore();
const { movieDetail } = store;
movieDetail(movieId);

const { movie } = storeToRefs(store);

const posterSrc = computed(
  () => `https://image.tmdb.org/t/p/w500/${movie.value?.poster_path}`
);
const adultRating = computed(() => (movie.value?.adult ? "PG-18" : "PG-13"));
const formattedRuntime = computed(() => {
  if (movie.value?.runtime) {
    const minutes = movie.value.runtime;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedHours = hours > 0 ? `${hours}h ` : "";
    const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

    return formattedHours + formattedMinutes;
  }
  return "";
});
const formattedGenreTitles = computed(
  () => movie.value?.genres?.map((genre) => genre.name).join(", ") ?? ""
);
const formattedReleaseDate = computed(
  () => formatDate(movie.value?.release_date) ?? ""
);
const originCountry = computed(() => movie.value?.origin_country?.[0] ?? "");
const backDrops = computed(
  () => movie.value?.images?.backdrops?.slice(0, 20) ?? []
);

const movieTitle = computed(() => movie.value?.title ?? "");
const movieOverview = computed(() => movie.value?.overview ?? "");
</script>
