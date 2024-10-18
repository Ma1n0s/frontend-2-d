<template>
  <div id="app">
    <nav class="relative">
      <menu3 class="w-10 h-10 cursor-pointer" @click="toggleMenu"></menu3>
      <transition name="fade" mode="out-in">
        <ul
          v-if="show"
          key="menu"
          class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md"
        >
          <li class="hover:bg-gray-100">
            <RouterLink to="/login" class="block px-4 py-2">Вход</RouterLink>
          </li>
          <li class="hover:bg-gray-100">
            <RouterLink to="/register" class="block px-4 py-2"
              >Регистрация</RouterLink
            >
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<script setup>
import menu3 from "@/assets/menu3.svg";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
