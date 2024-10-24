<template>
  <div class="login flex flex-col min-h-screen">
    <Header />
    <div class="flex-grow flex items-center justify-center bg-gray-100">
      <form
        @submit.prevent="login"
        class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 class="text-2xl font-bold text-center mb-6">Авторизация</h2>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">
            Логин:
          </label>
          <input
            v-model="data.email"
            type="text"
            id="email"
            placeholder="Введите логин..."
            required
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:outline-none p-2"
          />
        </div>

        <div class="mb-6">
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

        <button
          class="w-full bg-black text-white font-bold py-2 rounded-md hover:bg-gray-800 transition duration-200"
          type="submit"
        >
          Войти
        </button>

        <div v-if="errorMessage" class="text-red-500 text-sm mt-4">
          {{ errorMessage }}
        </div>
        <div class="mt-2">
          <RouterLink to="RegisterComp">
            Зарегистрироваться как организация
          </RouterLink>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
}

.login {
  overflow: hidden; /* Убираем прокрутку */
}
</style>

<script setup>
import router from "@/router";
import { AuthService } from "../services/auth";
import { reactive } from "vue";
import Footer from "./MainForm/Footer.vue";
import Header from "./MainForm/Header.vue";

const data = reactive({
  email: "",
  password: "",
});

const login = async () => {
  try {
    const r = await AuthService.login({
      email: data.email,
      password: data.password,
    });
    localStorage.setItem("token", r.data.token);
    localStorage.setItem("name", r.data.user.name);
    localStorage.setItem("email", data.email);
    router.push("/Profile");
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
