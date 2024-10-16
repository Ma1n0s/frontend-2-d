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
        <div class="sm:hidden flex items-center">
          <button id="burgerButton" class="focus:outline-none">
            <menu3 alt="Menu" class="w-8 h-8" />
            <img src="" alt="Menu" class="w-8 h-8" />
          </button>
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

        <div v-if="isBlockVisible" class="mt-4 p-4 bg-gray-200">
          <h3 class="text-left mb-2">Фильтрации по тегам</h3>
          <div class="flex justify-center">
            <select
              name="categories"
              id="cataloc"
              class="bg-gray-200 border border-gray-400 p-2"
            >
              <option value="1">Ремонт и строительство</option>
              <option value="2">Ремонт и установка техники</option>
              <option value="3">Ремонт авто</option>
              <option value="4">Репетиторы и обучение</option>
              <option value="5">Красота</option>
              <option value="6">Перевозки и курьеры</option>
              <option value="7">Хозяйство и уборка</option>
              <option value="8">Компьютеры и IT</option>
              <option value="9">Дизайнеры</option>
              <option value="10">Аренда</option>
              <option value="11">Юристы</option>
              <option value="12">Тренеры</option>
              <option value="13">Фото, видео, аудио</option>
              <option value="14">Творчество, рукоделие и хобби</option>
              <option value="15">Организация мероприятий</option>
              <option value="16">Артисты</option>
              <option value="17">Охрана</option>
              <option value="18">Услуги для животных</option>
              <option value="19">Разное</option>
            </select>
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
            <div
              class="bg-gray-200 p-6 h-48 rounded shadow-md flex items-center justify-center"
            >
              <a
                href="http://127.0.0.1:5174/"
                class="text-blue-500 hover:underline"
              >
                Перейти на сайт
              </a>
            </div>
            <div
              class="bg-gray-200 p-6 h-48 rounded shadow-md flex items-center justify-center"
            >
              Контент 2
            </div>
            <div
              class="bg-gray-200 p-6 h-48 rounded shadow-md flex items-center justify-center"
            >
              Контент 3
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
import { RouterLink } from "vue-router";
</script>

<script>
export default {
  data() {
    return {
      isBlockVisible: false,
    };
  },
  methods: {
    toggleBlock() {
      this.isBlockVisible = !this.isBlockVisible;
    },
  },
};
</script>

<!-- <script>
export default {
  name: "name",
};
</script> -->

<!-- <script>
export default {
  data() {
    return {
      isBlockVisible: false,
    };
  },
  methods: {
    toggleBlock() {
      this.isBlockVisible = this.clear;
    },
  },
};
</script> -->

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
