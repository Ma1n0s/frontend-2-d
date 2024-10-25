<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="py-4 bg-white text-black flex-1 px-4 sm:px-24">
      <div>
        <h3 class="text-center text-3xl mb-4">Список Организаций</h3>
        <p class="text-center text-2xl mb-4">Фильтр организаций</p>

        <section class="py-2 text-center">
          <div>
            <div class="flex flex-col sm:flex-row justify-center mb-4">
              <input
                v-model="searchQuery"
                class="relative bg-slate-50 w-full sm:w-1/3 h-10 p-4 border mx-2 sm:mr-4 shadow-md rounded-lg"
                type="text"
                placeholder="Поиск по названию..."
                @keyup.enter="searchCompanies"
              />
              <button
                @click="searchCompanies"
                class="flex items-center border-none bg-transparent cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M16.5 10.5A6.5 6.5 0 109 16.5a6.5 6.5 0 007.5-6z"
                  />
                </svg>
              </button>
              <button
                @click="toggleBlock"
                class="bg-gray-100 border-gray-300 text-gray-400 w-full sm:w-44 border-2 h-12 font-bold py-2 px-4 rounded mx-2 mb-2 sm:mb-0 transition duration-200 shadow-md"
              >
                Выбрать теги
              </button>

              <button
                @click="resetFilters"
                class="bg-gray-100 border-gray-300 text-gray-400 w-full sm:w-44 border-2 h-12 font-bold py-2 px-4 rounded mx-2 transition duration-200 shadow-md"
              >
                Сбросить
              </button>
            </div>
          </div>

          <transition name="fade">
            <div
              v-if="isBlockOpen"
              class="bg-slate-50 p-4 w-full rounded-lg shadow-md flex flex-col border-2 border-gray-300"
            >
              <div class="text-left text-lg">Фильтрация по тегам</div>
              <div class="text-right">
                Категория:
                <select
                  v-model="selectedCategory"
                  @change="fetchServices"
                  class="bg-gray-200 border border-gray-400 p-2 w-full sm:w-52"
                >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div v-if="services.length > 0">
                <h3 class="text-lg font-semibold mb-4"></h3>
                <div class="grid grid-cols-2 gap-1">
                  <div
                    v-for="service in services"
                    :key="service.id"
                    class="flex items-center"
                  >
                    <input type="checkbox" :id="service.id" class="mr-2" />
                    <label :for="service.id">{{ service.name }}</label>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </section>

        <div class="inline-grid text-left mt-4 mb-6">
          <h3 class="">Сортировка</h3>
          <div class="flex justify-center">
            <select
              name="sorts"
              id="sort"
              class="bg-gray-200 border border-gray-400 p-2 w-full sm:w-auto"
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
          class="bg-slate-50 p-6 w-full rounded-lg shadow-md flex flex-col border-2 border-gray-300"
        >
          <div class="flex-grow overflow-auto">
            <Comp />
          </div>
          <ul class="mt-4">
            <li
              v-for="company in filteredCompanies"
              :key="company.id"
              @click="goToCompany(company.id)"
              class="cursor-pointer hover:bg-gray-200 p-2 rounded"
            >
              {{ company.name }}
            </li>
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import yoodle from "@/assets/yoodle.svg";
import menu3 from "@/assets/menu3.svg";
import { RouterLink } from "vue-router";
</script>

<script>
import Comp from "./Comp.vue";
import Footer from "./MainForm/Footer.vue";
import Header from "./MainForm/Header.vue";

export default {
  components: {
    Comp,
    Footer,
    Header,
  },
  data() {
    return {
      searchQuery: "",
      companies: [],
      searchName: "",
      searchCity: "",
      isBlockOpen: false,
      selectedCategory: null,
      filters: [],
      selectedFilters: [],
      categories: [],
      services: [],
    };
  },
  mounted() {
    this.fetchCompanies();
    this.fetchCategories();
  },
  computed: {
    filteredCompanies() {
      return this.companies.filter((company) => {
        const nameMatch = company.name
          .toLowerCase()
          .includes(this.searchName.toLowerCase());
        const cityMatch = company.city
          .toLowerCase()
          .includes(this.searchCity.toLowerCase());
        return nameMatch && cityMatch;
      });
    },
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await fetch("http://localhost:5174/api/companies");
        this.companies = await response.json();
      } catch (error) {
        // console.error("Ошибка при получении компаний:", error);
      }
    },
    goToCompany(companyId) {
      window.location.href = `/organization/${companyId}`;
    },
    resetFilters() {
      this.searchName = "";
      this.searchCity = "";
    },
    toggleBlock() {
      this.isBlockOpen = !this.isBlockOpen;
    },
    async fetchCategories() {
      try {
        const response = await fetch("http://127.0.0.1:80/api/categories");
        this.categories = await response.json();
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    },
    async fetchServices() {
      if (this.selectedCategory) {
        try {
          const response = await fetch(
            `http://127.0.0.1:80/api/services/category/${this.selectedCategory}`
          );
          this.services = await response.json();
        } catch (error) {
          console.error("Ошибка при получении услуг:", error);
        }
      } else {
        this.services = [];
      }
    },
    async searchCompanies() {
      if (!this.searchQuery) return;

      try {
        const response = await axios.get(
          "http://127.0.0.1:80/api/companies/search",
          {
            params: { query: this.searchQuery },
          }
        );
        this.companies = response.data;
      } catch (error) {
        console.error("Ошибка при поиске компаний:", error);
      }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, max-height 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
