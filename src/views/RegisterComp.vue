<template>
  <div class="register">
    <form @submit.prevent="RegisterComp">
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
                <div class="mb-4">
                  <label for="username" class="block mb-2 text-sm"
                    >Фамилия Имя(Отчество при наличии)</label
                  >
                  <input
                    v-model="data.username"
                    type="text"
                    id="username"
                    placeholder="Логин..."
                    required
                    class="w-full p-2 pl-10 text-sm text-gray-700"
                  />
                </div>
                <div class="mb-4">
                  <label for="org-name" class="block mb-2 text-sm"
                    >Название организации</label
                  >
                  <input
                    v-model="data.name_comp"
                    type="text"
                    id="org-name"
                    placeholder="Название организации..."
                    required
                    class="w-full p-2 pl-10 text-sm text-gray-700"
                  />
                </div>
                <div class="mb-4">
                  <label for="inn" class="block mb-2 text-sm"
                    >ИНН организации</label
                  >
                  <input
                    v-model="data.inn_comp"
                    type="text"
                    id="inn"
                    placeholder="ИНН"
                    required
                    class="w-full p-2 pl-10 text-sm text-gray-700"
                  />
                </div>
                <div class="mb-4">
                  <label for="email" class="block mb-2 text-sm"
                    >Электронная почта</label
                  >
                  <input
                    v-model="data.email"
                    type="email"
                    id="email"
                    placeholder="Email..."
                    required
                    class="w-full p-2 pl-10 text-sm text-gray-700"
                  />
                </div>
                <div class="mb-4">
                  <input type="checkbox" id="newsletter" class="mr-2" />
                  <label for="newsletter" class="text-sm"
                    >Подключить рассылку информации по электронной почте.</label
                  >
                </div>
                <div class="mb-4">
                  <input type="checkbox" id="terms" class="mr-2" />
                  <label for="terms" class="text-sm"
                    >Я прочитал(а) правила сайта и согласен(сна) с ними</label
                  >
                </div>
                <div class="mb-4">
                  <button
                    type="submit"
                    class="bg-black text-white font-bold py-2 px-4 rounded"
                  >
                    Зарегистрироваться
                  </button>
                </div>
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { AuthService } from "../services/auth";

const data = reactive({
  username: "",
  email: "",
  name_comp: "",
  inn_comp: "",
});

const errorMessage = ref("");
const router = useRouter();

const RegisterComp = async () => {
  try {
    const response = await AuthService.RegisterComp({
      username: data.username,
      email: data.email,
      name_comp: data.name_comp,
      inn_comp: data.inn_comp,
    });
    localStorage.setItem("token", response.data.token);
    // router.push("/login");
  } catch (error) {
    errorMessage.value =
      error.response?.data?.message || "Произошла ошибка при регистрации.";
    console.error(error);
  }
};
</script>
