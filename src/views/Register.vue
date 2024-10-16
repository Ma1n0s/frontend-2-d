<template>
  <div class="register">
    <form @submit.prevent="register">
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
                  <h1 class="text-center">Регистрация</h1>
                  <div class="form-group">
                    <label for="username">Логин:</label>
                    <input
                      v-model="data.username"
                      type="text"
                      id="username"
                      placeholder="Логин..."
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="email">Email:</label>
                    <input
                      v-model="data.email"
                      type="email"
                      id="email"
                      placeholder="Email..."
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
                  <div class="form-group">
                    <label for="password"> Подтверж Пароль:</label>
                    <input
                      v-model="data.password_confirmation"
                      type="password"
                      id="password_confirmation"
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
      </div>
    </form>
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
