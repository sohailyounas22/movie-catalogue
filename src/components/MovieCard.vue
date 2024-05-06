<template>
  <RouterLink
    :to="`/movie-detail/${movie.id}`"
    class="flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
  >
    <div class="md:max-w-sm rounded-lg">
      <div class="md:h-[300px]">
        <img
          class="rounded-t-lg w-full"
          :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path"
          alt=""
        />
      </div>

      <div class="p-5">
        <div class="mb-2 flex justify-between items-center">
          <h5
            class="text-2xl font-bold tracking-tight text-gray-900 max-w-[70%] md:max-w-full"
          >
            {{ movie.title }}
          </h5>
          <span>
            <time :datetime="movie.release_date" class="text-[11px]">{{
              releaseDate
            }}</time>
          </span>
        </div>
        <p
          class="mb-3 font-normal text-gray-700 clamp-2"
          :title="movie.overview"
        >
          {{ movie.overview }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { formatDate } from "@/utils/utils";

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
});
const releaseDate = formatDate(props.movie?.release_date);
</script>

<style>
.clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
