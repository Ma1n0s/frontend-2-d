<template>
  <div class="register flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <form
        @submit.prevent="register"
        class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 class="text-2xl font-bold text-center mb-6">
          Регистрация организации
        </h2>

        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">
            Логин:
          </label>
          <input
            v-model="data.username"
            type="text"
            id="username"
            placeholder="Введите логин..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email:
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

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700">
            Пароль:
          </label>
          <input
            v-model="data.password"
            type="password"
            id="password"
            placeholder="Введите пароль..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-6">
          <label
            for="password_confirmation"
            class="block text-sm font-medium text-gray-700"
          >
            Подтверждение пароля:
          </label>
          <input
            v-model="data.password_confirmation"
            type="password"
            id="password_confirmation"
            placeholder="Подтвердите пароль..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <button
          class="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-200"
          type="submit"
        >
          Зарегистрироваться
        </button>

        <div v-if="errorMessage" class="text-red-500 text-sm mt-4">
          {{ errorMessage }}
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import router from "@/router";
import { AuthService } from "../services/auth";
import { reactive } from "vue";

const data = reactive({
  username: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const register = async () => {
  try {
    const r = await AuthService.register({
      name: data.username,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
    });
    localStorage.setItem("token", r.data.token);
    router.push("/login");
  } catch (err) {
    console.log(err);
  }
};
</script>

<script>
import Footer from "./MainForm/Footer.vue";
import Header from "./MainForm/Header.vue";
import { RouterLink } from "vue-router";
export default {
  components: {
    Footer,
    Header,
  },
};
</script>
