<template>
  <div id="app">
    <div class="relative bg-purple-600">
      <div class="max-w-screen-xl px-3 py-3 mx-auto | sm:px-6 | lg:px-8">
        <div class="text-center">
          <p class="font-medium text-white">
            <span class="inline">
              View & Star on
            </span>
            <span class="inline-block">
              <a href="https://github.com/miloudimohamed/booticons" class="font-bold text-white underline">
                Github
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="min-h-screen px-4 font-sans bg-gray-900">
      <div class="max-w-5xl py-24 mx-auto">
        <h1 class="text-4xl font-semibold text-center text-white | sm:text-5xl">
          Bootstrap Icons
          <svg class="inline-block w-8 fill-current float | sm:w-10" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C"/><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF"/></svg>
        </h1>
        <h2 class="px-0 mt-6 text-lg font-medium text-center text-white | sm:px-16 sm:text-xl">
          Official open source SVG icon library for
          <a href="https://getbootstrap.com" class="text-purple-500 hover:underline">Bootstrap</a>
          <span class="block mt-1 | sm:mt-0">
            Web app by <a href="https://twitter.com/Miloudi_Moha" class="text-purple-500 hover:underline">Miloudi Mohamed</a>
          </span>
          <span class="block mt-1 | sm:mt-0">
            Inspired from <a href="https://heroicons.dev" class="text-purple-500 hover:underline">Heroicons</a>
          </span>
        </h2>

        <div class="flex justify-center mt-6">
          <a href="https://github.com/twbs/icons" class="px-8 py-4 font-semibold text-white duration-150 transform bg-gray-800 rounded-lg hover:bg-purple-600 focus:outline-none focus:shadow-outline hover:-translate-y-1">
            Open original repo
          </a>
        </div>

        <AppIconsList />

      </div>
    </div>
  </div>
</template>

<script>

import AppIconsList from "@/components/AppIconsList";

export default {
  components: {
    AppIconsList,
  },
}

</script>
<style src="./assets/tailwind.css">