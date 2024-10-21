<template>
  <header class="py-1 flex bg-gray-300 top-0">
    <nav class="flex flex-col sm:flex-row justify-between w-full">
      <ul class="flex flex-col sm:flex-row">
        <yoodle
          class="object-cover w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 mb-8 mx-auto sm:mx-0 md:float-right"
        />
      </ul>
      <ul class="flex flex-col sm:flex-row">
        <RouterLink to="/login" class="px-4 py-2 text-black hover:bg-gray-200"
          >Войти</RouterLink
        >
        <RouterLink
          to="/register"
          class="px-4 py-2 text-black hover:bg-gray-200"
          >Регистрация</RouterLink
        >
      </ul>
      <!-- Бургер-меню -->
      <div id="app">
        <nav class="relative">
          <menu3 class="w-10 h-10 cursor-pointer" @click="toggleMenu"></menu3>
          <transition name="fade" mode="out-in">
            <ul
              v-if="show"
              key="menu"
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md md:hidden"
            >
              <li class="hover:bg-gray-100">
                <RouterLink to="/login" class="block px-4 py-2"
                  >Вход</RouterLink
                >
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
    </nav>
  </header>
</template>

<script setup>
import yoodle from "@/assets/yoodle.svg";
import menu3 from "@/assets/menu3.svg";
import { RouterLink } from "vue-router";
</script>

<script>
import Comp from "./Comp.vue";

export default {
  components: {
    Comp,
  },
  data() {
    return {
      companies: [],
    };
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await fetch("http://localhost:5174/api/companies");
        this.companies = await response.json();
      } catch (error) {
        console.error("Ошибка при получении компаний:", error);
      }
    },
    goToCompany(companyId) {
      window.location.href = `/MainForm/organization/${companyId}`;
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
