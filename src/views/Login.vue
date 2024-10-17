<template>
  <div class="login">
    <form @submit.prevent="login">
      <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="container">
          <div class="card border-0 shadow-sm hider">
            <div class="card-header">Регистрация организации</div>
          </div>
          <div class="container max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <div class="card bg-gray-200 shadow-md rounded">
              <div class="card-header border-b-0">
                <h2 class="text-lg font-bold">Регистрация организации</h2>
              </div>
              <div class="card-body p-4">
                <div class="form-group">
                  <label for="email">Логин:</label>
                  <input
                    v-model="data.email"
                    type="text"
                    id="email"
                    placeholder="Логин..."
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="password">Пароль:</label>
                  <input
                    v-model="data.password"
                    type="password"
                    id="password"
                    placeholder="Пароль..."
                    required
                  />
                </div>
                <button
                  class="bg-black text-white font-bold py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded"
                  type="submit"
                  variant="primary"
                >
                  Войти
                </button>
                <div v-if="errorMessage" class="text-red-500">
                  {{ errorMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import router from "@/router";
import { AuthService } from "../services/auth";
import { reactive } from "vue";

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
    localStorage.setItem("email", data.email);
    router.push("/AddComment");
  } catch (err) {
    console.log(err);
  }
};
</script>
