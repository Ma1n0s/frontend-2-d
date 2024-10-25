<template>
  <header class="py-1 flex bg-slate-200 top-0">
    <nav class="flex flex-col sm:flex-row justify-between w-full">
      <ul class="flex flex-col sm:flex-row">
        <yoodle
          class="object-cover w-20 h-20 sm:w-20 sm:h-20 md:w-20 md:h-20 mx-auto sm:mx-0 md:float-right"
        />
        <div class="mt-7 text-center">
          <router-link
            to="/"
            class="font-bold hover:underline transition duration-300"
          >
            ЮРИСТ ДЛЯ ЛЮДЕЙ
          </router-link>
        </div>
      </ul>
      <div class="flex flex-col sm:flex-row">
        <div class="hidden sm:flex">
          <RouterLink
            v-if="!isAuthenticated"
            to="/login"
            class="font-serif px-4 py-6 text-black hover:bg-gray-200"
            >Войти</RouterLink
          >
          <RouterLink
            v-if="!isAuthenticated"
            to="/register"
            class="font-serif px-4 py-6 text-black hover:bg-gray-200"
            >Регистрация</RouterLink
          >
          <RouterLink
            v-if="isAuthenticated"
            to="/profile"
            class="font-serif px-4 py-6 text-black hover:bg-gray-200"
            >Профиль</RouterLink
          >
        </div>
        <nav class="relative sm:hidden ml-auto">
          <menu3 class="w-10 h-10 cursor-pointer" @click="toggleMenu"></menu3>
          <transition name="fade" mode="out-in">
            <ul
              v-if="show"
              key="menu"
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md transition-opacity duration-300 ease-in-out"
            >
              <li class="hover:bg-gray-100">
                <RouterLink
                  v-if="!isAuthenticated"
                  to="/login"
                  class="block px-4 py-2"
                  >Вход</RouterLink
                >
              </li>
              <li class="hover:bg-gray-100">
                <RouterLink
                  v-if="!isAuthenticated"
                  to="/register"
                  class="block px-4 py-2"
                  >Регистрация</RouterLink
                >
              </li>
              <li class="hover:bg-gray-100" v-if="isAuthenticated">
                <RouterLink to="/profile" class="block px-4 py-2"
                  >Профиль</RouterLink
                >
              </li>
            </ul>
          </transition>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {
    isAuthenticated() {
      // Проверка, есть ли токен в localStorage
      return !!localStorage.getItem("token");
    },
  },
  methods: {
    toggleMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<script setup>
import yoodle from "@/assets/yoodle.svg";
import menu3 from "@/assets/menu3.svg";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300 ease-in-out;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
