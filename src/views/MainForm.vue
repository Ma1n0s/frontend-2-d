<template>
  <div class="min-h-screen flex flex-col">
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

    <main class="py-4 bg-white text-black flex-1">
      <div>
        <section class="py-2 text-center container element show">
          <div>
            <h3 class="text-center text-3xl mb-4">Список Организаций</h3>
            <p class="text-center text-2xl mb-4">Фильтр организаций</p>
            <div class="flex flex-col sm:flex-row justify-center mb-4">
              <input
                class="relative bg-gray-200 w-full sm:w-1/3 h-10 p-4 border border-gray-400 mx-2"
                type="text"
                placeholder="Поиск по названию"
              />
              <input
                class="relative bg-gray-200 w-full sm:w-1/3 h-10 p-4 border border-gray-400 mx-2"
                type="text"
                placeholder="Поиск по городу"
              />
              <button
                @click="toggleBlock"
                class="bg-gray-100 text-gray-400 border-2 border-gray-400 font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded mx-2"
              >
                Выбрать теги
              </button>
              <button
                class="bg-gray-100 text-gray-400 border-2 border-gray-400 font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded mx-2"
              >
                Сбросить
              </button>
            </div>
          </div>
        </section>

        <div id="app">
          <Comments />
        </div>

        <div v-if="isBlockVisible" class="mt-4 p-4 bg-gray-200">
          <h3 class="text-left mb-2">Фильтрация по тегам</h3>
          <div class="flex justify-center">
            <select
              name="categories"
              id="cataloc"
              class="bg-gray-200 border border-gray-400 p-2"
              v-model="selectedCategory"
              @change="fetchFilters"
            >
              <option value="">Выберите категорию</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>

          <div v-if="filters.length > 0" class="mt-4">
            <h4 class="text-left mb-2">Выберите фильтры:</h4>
            <div class="flex flex-wrap justify-center">
              <div v-for="filter in filters" :key="filter" class="mr-4">
                <input
                  type="checkbox"
                  :id="`filter-${filter}`"
                  :value="filter"
                  v-model="selectedFilters"
                />
                <label :for="`filter-${filter}`">{{ filter }}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="inline-grid text-left mt-4">
          <h3 class="">Сортировка</h3>
          <div class="flex justify-center">
            <select
              name="sorts"
              id="sort"
              class="bg-gray-200 border border-gray-400 p-2"
            >
              <option value="1">Рейтинг: Хороший</option>
              <option value="2">Рейтинг: Плохой</option>
              <option value="3">Время: Новые</option>
              <option value="4">Время: Старые</option>
              <option value="5">По популярности</option>
            </select>
          </div>
        </div>
        <div
          class="bg-gray-300 p-6 w-full h-96 mx-auto rounded shadow-md flex items-center justify-center"
        >
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <comp @companyConfirmed="addCompany" :companies="companies" />
              <ul>
                <li
                  v-for="company in companies"
                  :key="company.id"
                  @click="goToCompany(company.id)"
                >
                  {{ company.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer class="py-4 bg-gray-800 text-white">
      <div class="container mx-auto text-center">
        <p class="text-sm">
          &copy; Авторитетные отзывы от специалистов интернет-рынка.
        </p>
        <div
          class="flex flex-col md:flex-row justify-center md:space-x-4 mt-2 space-y-2 md:space-y-0"
        >
          <RouterLink to="/Policy" class="hover:text-gray-400"
            >Политика конфиденциальности</RouterLink
          >
          <RouterLink to="/RegisterComp" class="hover:text-gray-400"
            >+ Добавить компанию</RouterLink
          >
          <RouterLink to="/SiteRule" class="hover:text-gray-400"
            >Правила сайта</RouterLink
          >
          <RouterLink to="/RuleRev" class="hover:text-gray-400"
            >Правила к написанию отзывов</RouterLink
          >
          <RouterLink to="/Contacts" class="hover:text-gray-400"
            >Способы оплаты</RouterLink
          >
        </div>
      </div>
    </footer>
  </div>
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
      show: false,
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
