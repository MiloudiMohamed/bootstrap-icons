<template>
  <div
    class="relative flex items-center justify-center px-2 text-white transition duration-150 bg-gray-800 rounded-lg hover:bg-purple-500"
    style="padding-bottom: 100%;"
    >
        <button @click="handleSelected" class="absolute inset-0 flex justify-center w-full h-full text-3xl rounded-lg focus:shadow-outline focus:outline-none">
            <span ref="icon" v-html="icon[1]"></span>
        </button>

        <span class="absolute bottom-0 mb-2 text-sm font-semibold text-center pointer-events-none">
            {{ is_copying ? 'Copied!' : name }}
        </span>
    </div>
</template>

<script>
import { copyToClipboard, toKebabCase } from "@/helpers/helpers";

export default {
    props : {
        icon: {
            required: true
        },
        index: {
            required: true
        },
    },

    data () {
        return {
            is_copying: false
        }
    },

    computed: {
        name () {
            return this.displayedName(this.icon[0])
        }
    },

    methods: {
        handleSelected () {
            copyToClipboard(this.$refs.icon.innerHTML)
            this.is_copying = true
            setTimeout(() => {
                this.is_copying = false
            }, 800);
        },

        displayedName () {
            return toKebabCase(this.icon[0])
        },
    }
}
</script>

