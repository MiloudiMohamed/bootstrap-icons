<template>
  <div>
    <div class="sticky top-0 z-50 py-8 mt-6">
      <div class="relative flex items-center">
        <svg
          class="absolute w-6 ml-5 text-gray-600 fill-current bi bi-search"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
            clip-rule="evenodd"
          />
        </svg>
        <input
        v-model="query"
        ref="search"
        type="text"
        placeholder='Search +530 icons (Press "/" to focus)'
        class="w-full py-4 pl-16 pr-8 text-lg font-semibold tracking-wide text-white bg-gray-800 rounded-lg shadow-md focus:bg-gray-700 focus:outline-none"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-6 | sm:grid-cols-3 | md:grid-cols-4 | lg:grid-cols-5">
      <AppIcon
        v-for="(icon, index) in loadedIcons"
        :key="index"
        :icon="icon"
        :index="index"
      />

      <div
        class="py-5"
        v-if="loadedIcons.length"
        v-observe-visibility="{
          callback: visibilityChanged
        }"
      ></div>
    </div>
  </div>


</template>

<script>
import * as icons from "@/icons";
import AppIcon from "@/components/AppIcon";

export default {
  components: {
    AppIcon,
  },

  data () {
    return {
      icons: icons,
      loadedIcons: [],
      query: '',
      min: 0,
      max: 25,
    }
  },

  watch: {
    query () {
      this.min = 0
      this.max = 25
      this.loadedIcons = this.load()
    }
  },

  methods: {
    load () {
      let icons = Object.entries(this.icons)
        .filter(i => {
          return i[0].toLowerCase().search(this.query.trim()) >= 0
        })
        .slice(this.min, this.max)

      this.min = this.max
      this.max = this.max + 25
      return icons
    },

    visibilityChanged (isVisible) {
      if (!isVisible) {
        return
      }
      this.loadedIcons.push(...this.load())
    },

    keyboardFocus() {
      if (e.key === '/') {
        this.$refs.search.focus()
      }
    }
  },

  mounted () {
    window.addEventListener('keyup', (e) => {
      if (e.key === '/' || e.which === 191 || e.keyCode === 191) {
        this.$refs.search.focus()
      }
    })
    this.loadedIcons = this.load()
  },

}

</script>