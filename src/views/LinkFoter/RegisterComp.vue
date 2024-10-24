<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <form
        @submit.prevent="RegisterComp"
        class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 class="text-2xl font-bold text-center mb-6">
          Регистрация организации
        </h2>

        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Фамилия Имя (Отчество при наличии)
          </label>
          <input
            v-model="data.name"
            type="text"
            id="name"
            placeholder="Введите ваше имя..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-4">
          <label for="org-name" class="block text-sm font-medium text-gray-700">
            Название организации
          </label>
          <input
            v-model="data.name_comp"
            type="text"
            id="org-name"
            placeholder="Название организации..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-4">
          <label for="inn" class="block text-sm font-medium text-gray-700">
            ИНН организации
          </label>
          <input
            v-model="data.inn_comp"
            type="text"
            id="inn"
            placeholder="Введите ИНН..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Электронная почта
          </label>
          <input
            v-model="data.email"
            type="email"
            id="email"
            placeholder="Введите email..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-4 flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            v-model="subscribeNewsletter"
            class="mr-2"
          />
          <label for="newsletter" class="text-sm text-gray-700">
            Подключить рассылку информации по электронной почте.
          </label>
        </div>

        <div class="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            v-model="agreeTerms"
            class="mr-2"
            required
          />
          <label for="terms" class="text-sm text-gray-700">
            Я прочитал(а)
            <router-link to="/SiteRule" class="text-blue-500 underline">
              правила сайта
            </router-link>
            и согласен(сна) с ними.
          </label>
        </div>

        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-200"
          >
            Зарегистрироваться
          </button>
        </div>

        <div v-if="errorMessage" class="text-red-500 text-sm mt-4">
          {{ errorMessage }}
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { AuthService } from "../../services/auth";
import Footer from "/src/views/MainForm/Footer.vue";
import Header from "/src/views/MainForm/Header.vue";

const data = reactive({
  name: "",
  email: "",
  name_comp: "",
  inn_comp: "",
  is_confirmed: false,
});

const errorMessage = ref("");
const companies = ref([]);
const router = useRouter();

const RegisterComp = async () => {
  try {
    const response = await AuthService.RegisterComp({
      name: data.name,
      email: data.email,
      name_comp: data.name_comp,
      inn_comp: data.inn_comp,
      is_confirmed: data.is_confirmed,
    });
    localStorage.setItem("token", response.data.token);
    router.push("/");
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || "Произошла ошибка при регистрации.";
    console.error(error);
  }
};
const fetchCompanies = async () => {
  try {
    const response = await fetch("http://127.0.0.1:80/api/companies");
    companies.value = await response.json();
  } catch (error) {
    console.error("Ошибка при получении компаний:", error);
  }
};

onMounted(() => {
  fetchCompanies();
});
</script>

<script>
export default {
  name: "Footer",
  name: "Header",
};
</script>
