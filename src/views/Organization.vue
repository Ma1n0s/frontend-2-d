<template>
  <div>
    <Header />
  </div>
  <div class="px-4 md:px-32 mt-6" v-if="company">
    <h1 class="font-bold text-2xl md:text-3xl mb-4">
      ОТЗЫВЫ: {{ company.name_comp }}
    </h1>
    <!-- <p class="text-sm md:text-base">
      <strong>Email:</strong> {{ company.email }}
    </p> -->

    <div class="mb-4">
      <p class="text-sm md:text-base">
        350080, Краснодарский кр., г. Краснодар, ул. Уральская, д. 97
      </p>
    </div>

    <!-- <p class="text-sm md:text-base">
      <strong>Просмотры:</strong> {{ company.views }}
    </p> -->

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
      <div>
        <strong class="text-lg">Реквизиты: </strong>
        <span class="font-semibold">ИНН:</span> {{ company.inn_comp }}<br />
        <span class="font-semibold">ОГРН:</span> 1022300000447<br />
        <span class="font-semibold">ОКПО:</span> 09804964<br />
        <span class="font-semibold">БИК:</span> 040349772<br />
        <span class="font-semibold">Наша Эл.Почта:</span>{{ company.email }}
      </div>

      <div>
        <strong class="text-lg">Главный офис: </strong>
        <p class="font-semibold">
          350080, Краснодарский край, г. Краснодар, ул. Уральская, д. 97
        </p>
      </div>

      <div>
        <strong class="text-lg">Представитель компании на сайте: </strong>
        <span class="font-semibold no-underline hover:underline cursor-pointer"
          >Узнать об нас побольше</span
        >
      </div>
    </div>

    <p class="text-sm md:text-base">
      <strong>Подтвержден:</strong> {{ company.is_confirmed ? "Да" : "Нет" }}
      <div class="bg-slate-50 p-2 w-52 rounded-lg shadow-md flex flex-col border-2 border-gray-300 text-center" >
        <button @click="confirmCompany"> Подвердить</button>
      </div>
      <div class="bg-slate-50 p-2 w-52 rounded-lg shadow-md flex flex-col border-2 border-gray-300">
        <button @click="openModer">Это ваша компания?</button>
         <Moder ref="moder" />
      </div>
    </p>
    

    <div class="borger border-amber-100 ">
      <h1 class="text-2xl md:text-3xl mb-4">Отзывы</h1>

      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-2">
          Оставьте отзыв об организации
        </h2>
        <form @submit.prevent="submitComment" class="space-y-4">
          <div>
            <label class="block text-gray-700">Ваше имя:</label>
            <input
              type="text"
              v-moder="name"
              placeholder="Введите имя"
              required
              class="mt-1 p-2 border border-gray-300 rounded-md w-1/1"
            />
          </div>
          <div>
            <label class="block text-gray-700">Комментарий:</label>
            <textarea
              v-moder="comment"
              placeholder="Ваши впечатления об организации"
              required
              maxlength="500"
              class="mt-1 p-2 border border-gray-300 rounded-md w-1/4"
            ></textarea>
            <p class="text-gray-500 text-sm mt-1">
              {{ comment.length }} / 500 символов
            </p>
          </div>
          <div class="flex items-center mb-4">
            <span
              v-for="n in 5"
              :key="n"
              @click="setRating(n)"
              class="cursor-pointer text-2xl"
            >
              <!-- @mouseover="hoverRating(n)"
              @mouseleave="resetRating" -->
              <svg
                class="w-8 h-8"
                fill="currentColor"
                :class="
                  n <= (hoveredRating || rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                "
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-9.19-.63L12 2 10.19 8.61 1 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </span>
          </div>
          <button
            type="submit"
            class="w-full md:w-40 bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>

    <div>
      <h3 class="text-xl font-semibold mb-2">Список отзывов:</h3>
      <div class="inline-grid text-left mt-4">
        <h3 class="">Сортировка</h3>
        <div class="flex justify-center">
          <select
            v-moder="sortOrder"
            @change="sortComments"
            class="bg-gray-200 border border-gray-400 p-2"
          >
            <option value="good">Рейтинг: Хорошие</option>
            <option value="bad">Рейтинг: Плохие</option>
          </select>
        </div>
      </div>
      <ul class="space-y-4">
        <li
          v-for="comment in paginatedComments"
          :key="comment.id"
          class="p-4 border border-gray-200 rounded-md"
        >
          <strong class="block font-bold">{{ comment.name }}</strong>
          <p class="text-gray-700">{{ comment.comment }}</p>
          <p class="text-gray-500">Рейтинг: {{ comment.rating }}</p>
        </li>
      </ul>

      <div class="flex justify-between mt-4">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Предыдущая
        </button>
        <span>Страница {{ currentPage }} из {{ totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Следующая
        </button>
      </div>
    </div>
  </div>

  <div v-else>
    <p v-if="loading">Загрузка...</p>
    <p v-else>Компания не найдена.</p>
  </div>

  <br />
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "./MainForm/Footer.vue";
import Header from "./MainForm/Header.vue";
import Moder from './Moder.vue';

export default {
  data() {
    return {
      name: "",
      comment: "",
      rating: 0,
      hoveredRating: 0,
      comments: [],
      errorMessage: "",
      successMessage: "",
      company: null,
      loading: true,
      sortOrder: "good",
      commentsPerPage: 5,
      currentPage: 1,
      company_id: "null",
    };
  },
  components: {
    Footer,
    Header,
    Moder,
  },
  computed: {
    sortedComments() {
      if (this.sortOrder === "good") {
        return this.comments.sort((a, b) => b.rating - a.rating); // Сортировка по убыванию рейтинга
      } else {
        return this.comments.sort((a, b) => a.rating - b.rating); // Сортировка по возрастанию рейтинга
      }
    },
    paginatedComments() {
      const start = (this.currentPage - 1) * this.commentsPerPage;
      const end = start + this.commentsPerPage;
      return this.sortedComments.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.comments.length / this.commentsPerPage);
    },
  },
  mounted() {
    this.fetchComments();
    this.fetchCompany();
  },
  watch: {
    "$route.params.company_id": function (newCompanyId) {
      this.company_id = newCompanyId;
      this.fetchComments(); // Обновляем комментарии при изменении
      company_id;
    },
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:80/api/comments/${this.$route.params.id}`
        );
        console.log(response);
        this.comments = response.data;
      } catch (error) {
        console.error("Ошибка при получении комментариев:", error);
      }
    },
    async submitComment() {
      const companyId = this.company.id;
      try {
        const response = await axios.post("http://127.0.0.1:80/api/comments", {
          name: this.name,
          comment: this.comment,
          rating: this.rating,
          company_id: companyId,
        });
        this.successMessage = response.data.message;
        this.errorMessage = "";
        this.comments.push(response.data.comment);
        this.name = "";
        this.comment = "";
        this.rating = null;
        this.currentPage = 1; // Сброс страницы
      } catch (error) {
        this.errorMessage = error.response.data.message;
        this.successMessage = "";
      }
    },
    async fetchCompany() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(
          `http://127.0.0.1:80/api/companies/${id}`
        );
        this.company = response.data;
      } catch (error) {
        console.error("Ошибка при получении компании:", error);
        this.company = null;
      } finally {
        this.loading = false;
      }
    },
    async confirmCompany() {
    const companyId = this.company.id; // Получаем ID компании
    try {
        const response = await axios.put(`http://127.0.0.1:80/api/companies/${companyId}`, {
            is_confirmed: 1
        });
        
        this.company.is_confirmed = 1; 
        alert(response.data.message); 
    } catch (error) {
        console.error("Ошибка при подтверждении компании:", error);
        alert("Произошла ошибка при подтверждении компании. Пожалуйста, попробуйте еще раз."); 
    }
},
    setRating(n) {
      this.rating = n;
    },
    hoverRating(n) {
      this.hoverRating = n;
    },
    resetRating() {
      this.hoverRating = 0;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    openModer() {
      this.$refs.moder.open();
    },
  },
};
</script>

// fetchComments() { // axios //
.get(`http://127.0.0.1:80/api/comments/${this.company.id}`) // .then((response)
=> { // this.comments = response.data; // }); // },
