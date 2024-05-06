<template>
  <div class="flex flex-grow items-center justify-center mt-32">
    <div class="rounded-lg p-8 text-center shadow-2xl">
      <h1 class="mb-4 text-4xl font-bold">404</h1>
      <p class="text-[#100f0f]">
        Oops! The page you are looking for could not be found.
      </p>
      <RouterLink
        to="/"
        class="mt-4 inline-block rounded bg-[#313131] px-4 py-2 font-semibold text-white hover:bg-blue-600"
      >
        Go back to Home
      </RouterLink>
    </div>
  </div>
</template>
