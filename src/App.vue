<template>
  <nav class="flex justify-center pt-3">
    <RouterLink to="/" class="m-auto text-white text-4xl font-bold">
      LOGO
    </RouterLink>
  </nav>
  <RouterView />
  <Transition name="slide-fade">
    <div
      v-if="isShowModal"
      id="top-right-modal"
      data-modal-placement="top-right"
      tabindex="-1"
      class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div class="relative w-full max-w-2xl max-h-full ml-auto">
        <!-- Modal content -->
        <div
          class="relative bg-[#f2dede] border border-[#ebccd1] rounded-lg shadow"
        >
          <!-- Modal body -->
          <div class="py-3 px-4 flex items-center justify-between">
            <p class="text-base leading-relaxed text-[#a94442]">
              {{ error }}
            </p>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="isShowModal = false"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useMovieStore } from "./stores/movie";
const store = useMovieStore();

const { isShowModal, error } = storeToRefs(store);
</script>
