<template>
  <Header />
  <div class="bg-gray-100 p-4">
    <h1 class="text-lg font-bold">Имя: {{ userName }}</h1>
    <h1 class="text-lg font-bold">Почта: {{ email }}</h1>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <h2 class="text-xl font-semibold">Редактировать профиль</h2>
        <form @submit.prevent="updateProfile">
          <div class="space-y-4">
            <div class="block text-gray-700">
              <label for="ogrn">ОГРН:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="ogrn"
                v-model="profile.OGRN"
              />
            </div>
            <div class="block text-gray-700">
              <label for="bic">БИК:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="bic"
                v-model="profile.BIC"
              />
            </div>
            <div class="block text-gray-700">
              <label for="postalCode">Почтовый код:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="postalCode"
                v-model="profile.postalCode"
              />
            </div>
            <div class="block text-gray-700">
              <label for="region">Регион:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="region"
                v-model="profile.region"
              />
            </div>
            <div class="block text-gray-700">
              <label for="city">Город:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="city"
                v-model="profile.city"
              />
            </div>
            <div class="block text-gray-700">
              <label for="street">Улица:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="street"
                v-model="profile.street"
              />
            </div>
            <div class="block text-gray-700">
              <label for="home">Дом:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="home"
                v-model="profile.home"
              />
            </div>
            <button type="submit" class="bg-blue-500 text-white rounded-md p-2">
              Сохранить изменения
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 class="text-xl font-semibold">Данные профиля</h2>
        <ul class="list-disc pl-5 mb-6">
          <li>ОГРН: {{ profile.OGRN }}</li>
          <li>БИК: {{ profile.BIC }}</li>
          <li>Почтовый код: {{ profile.postalCode }}</li>
          <li>Регион: {{ profile.region }}</li>
          <li>Город: {{ profile.city }}</li>
          <li>Улица: {{ profile.street }}</li>
          <li>Дом: {{ profile.home }}</li>
        </ul>
        <div>
          ПОДТВЕРДИТЬ КОМПАНИЮ?
          <div>YES/NO</div>
          <div class="mt-4">
            Статус подтверждения
            <svg
              class="mt-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19L2 12L3.41 10.59L9 16.17L20.59 4.58L22 6L9 19Z"
                fill="green"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <button @click="logout" class="mt-4 bg-red-500 text-white rounded-md p-2">
      Выйти из аккаунта
    </button>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "/src/views/MainForm/Footer.vue";
import Header from "/src/views/MainForm/Header.vue";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const userName = ref("");
const email = ref("");
const router = useRouter();
const profile = reactive({
  OGRN: "",
  BIC: "",
  postalCode: "",
  region: "",
  city: "",
  street: "",
  home: "",
});

onMounted(async () => {
  userName.value = localStorage.getItem("name") || "Гость";
  email.value = localStorage.getItem("email") || "Неизвестно";

  const token = localStorage.getItem("token");

  try {
    const response = await axios.get("http://127.0.0.1:80/api/Profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    Object.assign(profile, response.data);
  } catch (error) {
    console.error("Ошибка при получении профиля:", error);
  }
});

const updateProfile = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      "http://127.0.0.1:80/api/Profile",
      profile,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Object.assign(profile, response.data);
    alert("Профиль успешно обновлен!");
  } catch (error) {
    console.error("Ошибка при обновлении профиля:", error);
    alert("Не удалось обновить профиль.");
  }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  router.push("/login");
};
</script>

<!-- <template>
  <div class="profile">
    <h2 class="text-2xl font-bold">Профиль пользователя</h2>
    <form @submit.prevent="updateProfile">
      <h1 class="text-lg font-bold">Имя: {{ userName }}</h1>
      <h1 class="text-lg font-bold">Почта: {{ email }}</h1>
      <div class="mb-4">
        <label for="OGRN">OGRN:</label>
        <input v-model="profile.OGRN" type="text" id="OGRN" />
      </div>
      <div class="mb-4">
        <label for="BIC">BIC:</label>
        <input v-model="profile.BIC" type="text" id="BIC" />
      </div>
      <div class="mb-4">
        <label for="postalCode">postalCode:</label>
        <input v-model="profile.postalCode" type="text" id="postalCode" />
      </div>
      <div class="mb-4">
        <label for="region">region:</label>
        <input v-model="profile.region" type="text" id="region" />
      </div>
      <div class="mb-4">
        <label for="city">city:</label>
        <input v-model="profile.city" type="text" id="city" />
      </div>
      <div class="mb-4">
        <label for="street">street:</label>
        <input v-model="profile.street" type="text" id="street" />
      </div>
      <div class="mb-4">
        <label for="home">home:</label>
        <input v-model="profile.home" type="text" id="home" />
      </div>
      <button type="submit">Сохранить изменения</button>
    </form>
  </div>

  <button @click="logout" class="mt-4 bg-red-500 text-white rounded-md p-2">
    Выйти из аккаунта
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { AuthService } from "../services/auth";

const profile = ref({});
const userName = ref("");
const email = ref("");

const fetchProfile = async () => {
  try {
    const response = await AuthService.getProfile();
    profile.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const postProfile = async () => {
  try {
    const response = await AuthService.postProfile();
    profile.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateProfile = async () => {
  try {
    await AuthService.updateProfile(profile.value);
    alert("Профиль обновлён!");
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  userName.value = localStorage.getItem("name") || "Гость";
  email.value = localStorage.getItem("email") || "Неизвестно";

  const token = localStorage.getItem("token");

  try {
    const r = await axios.get("http://127.0.0.1:80/api/Profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profile.value = r.data;
  } catch (error) {
    console.error("Ошибка при получении профиля:", error);
  }
});

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  router.push("/login");
};

onMounted(fetchProfile);
// onMounted(postProfile);
</script> -->

<!-- <template>
  <Header />
  <div class="bg-gray-100 p-4">
    <h1 class="text-lg font-bold">Имя: {{ userName }}</h1>
    <h1 class="text-lg font-bold">Почта: {{ email }}</h1>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <div>
        <h2 class="text-xl font-semibold">Редактировать профиль</h2>
        <form @submit.prevent="updateProfile">
          <div class="space-y-4">
            <div class="block text-gray-700">
              <label for="ogrn">ОГРН:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="ogrn"
                v-model="profile.OGRN"
              />
            </div>
            <div class="block text-gray-700">
              <label for="okpo">ОКПО:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="okpo"
                v-model="profile.OKPO"
              />
            </div>
            <div class="block text-gray-700">
              <label for="bic">БИК:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="bic"
                v-model="profile.BIC"
              />
            </div>
            <div class="block text-gray-700">
              <label for="postalCode">Почтовое отделение:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="postalCode"
                v-model="profile.postalCode"
              />
            </div>
            <div class="block text-gray-700">
              <label for="region">Регион:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="region"
                v-model="profile.region"
              />
            </div>
            <div class="block text-gray-700">
              <label for="city">Город:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="city"
                v-model="profile.city"
              />
            </div>
            <div class="block text-gray-700">
              <label for="street">Улица:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="street"
                v-model="profile.street"
              />
            </div>
            <div class="block text-gray-700">
              <label for="home">дом:</label>
              <input
                class="border border-gray-500 rounded-md p-2 w-full"
                type="text"
                id="home"
                v-model="profile.home"
              />
            </div>
            <button type="submit" class="bg-blue-500 text-white rounded-md p-2">
              Сохранить данные
            </button>
          </div>
        </form>
      </div>

      <div>
        <h2 class="text-xl font-semibold">Данные профиля</h2>
        <ul class="list-disc pl-5 mb-6">
          <li>ОГРН: {{ profile.OGRN }}</li>
          <li>ОКПО: {{ profile.OKPO }}</li>
          <li>БИК: {{ profile.BIC }}</li>
          <li>Почтовое отделение: {{ profile.postalCode }}</li>
          <li>Регион: {{ profile.region }}</li>
          <li>Город: {{ profile.city }}</li>
          <li>Улица: {{ profile.street }}</li>
          <li>дом: {{ profile.home }}</li>
        </ul>
        <div class="">
          ПОДТВЕРДИТЬ КОМПАНИЮ ?
          <div>YES/NO</div>
          <div class="mt-4">
            Статус подтверждения
            <svg
              class="mt-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 19L2 12L3.41 10.59L9 16.17L20.59 4.58L22 6L9 19Z"
                fill="green"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <button @click="logout" class="mt-4 bg-red-500 text-white rounded-md p-2">
      Выйти из аккаунта
    </button>
  </div>
  <Footer />
</template>

<script setup>
import Footer from "/src/views/MainForm/Footer.vue";
import Header from "/src/views/MainForm/Header.vue";
import { ref, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const userName = ref("");
const email = ref("");
const router = useRouter();
const profile = reactive({
  OGRN: "",
  OKPO: "",
  BIC: "",
  postalCode: "",
  region: "",
  city: "",
  street: "",
  home: "",
});

onMounted(async () => {
  userName.value = localStorage.getItem("name") || "Гость";
  email.value = localStorage.getItem("email") || "Неизвестно";

  const token = localStorage.getItem("token");

  try {
    const r = await axios.get("http://127.0.0.1:80/api/Profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    profile.value = r.data;
  } catch (error) {
    console.error("Ошибка при получении профиля:", error);
  }
});

const updateProfile = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(
      "http://127.0.0.1:80/api/Profile",
      profile.value,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    profile.value = response.data;
    alert("Профиль успешно обновлен!");
  } catch (error) {
    console.error("Ошибка при обновлении профиля:", error);
    alert("Не удалось обновить профиль.");
  }
};

// const updateProfile = async () => {
//   try {
//     const response = await axios.put(
//       "http://127.0.0.1:80/api/Profile",
//       profile.value
//     );
//     profile.value = response.data;
//     alert("Профиль успешно обновлен!");
//   } catch (error) {
//     console.error("Ошибка при обновлении профиля:", error);
//     alert("Не удалось обновить профиль.");
//   }
// };

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  router.push("/login");
};
</script> -->
