<template>
  <div v-if="company">
    <h1>ОТЗЫВЫ:{{ company.name_comp }}</h1>
    <p><strong>ИНН:</strong> {{ company.inn_comp }}</p>
    <p><strong>Email:</strong> {{ company.email }}</p>
    <p>
      <strong
        >временные данные 350080, Краснодарский кр., г. Краснодар, ул.
        Уральская, д. 97</strong
      >
    </p>
    <p>
      <strong
        >Реквизиты:временные данные ИНН 2308016938 ОГРН 1022300000447 ОКПО
        09804964 БИК 040349772</strong
      >
    </p>
    <p>
      <strong
        >Главный офис:временные данные 350080, Краснодарский кр., г. Краснодар,
        ул. Уральская, д. 97</strong
      >
    </p>
    <p>
      <strong
        >Представитель компании на сайте:временные данные чить рассылку
        инфор</strong
      >
    </p>
    <p><strong>Сайт:временные данные </strong></p>
    <p>
      <strong>Подтверждено:</strong> {{ company.is_confirmed ? "Да" : "Нет" }}
    </p>
  </div>
  <div v-else>
    <p v-if="loading">Загрузка...</p>
    <p v-else>Компания не найдена.</p>
  </div>
  <br />

  <h1>Отзывы</h1>

  <div>
    <h2>Комментарии</h2>
    <form @submit.prevent="submitComment">
      <input type="text" v-model="name" placeholder="Ваше имя" required />
      <textarea
        v-model="comment"
        placeholder="Ваш комментарий"
        required
      ></textarea>
      <select v-model="rating" required>
        <option disabled value="">Выберите рейтинг</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
      </select>
      <button type="submit">Отправить</button>
    </form>
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <div v-if="successMessage">{{ successMessage }}</div>
    <div v-for="comment in comments" :key="comment.id">
      <h4>{{ comment.name }} ({{ comment.rating }})</h4>
      <p>{{ comment.comment }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      rating: "",
      comments: [],
      errorMessage: "",
      successMessage: "",
      company: null,
      loading: true,
    };
  },
  mounted() {
    this.fetchComments();
    this.fetchCompany();
  },
  methods: {
    fetchComments() {
      axios.get(`http://127.0.0.1:80/api/comments`).then((response) => {
        this.comments = response.data;
      });
    },

    // fetchComments() {
    //   axios
    //     .get(`http://127.0.0.1:80/api/comments/${this.company.id}`)
    //     .then((response) => {
    //       this.comments = response.data;
    //     });
    // },

    submitComment() {
      const companyId = this.company.id;
      console.log({
        name: this.name,
        comment: this.comment,
        rating: this.rating,
        company_id: companyId,
      });
      axios
        .post("http://127.0.0.1:80/api/comments", {
          name: this.name,
          comment: this.comment,
          rating: this.rating,
          company_id: companyId,
        })
        .then((response) => {
          this.successMessage = response.data.message;
          this.errorMessage = "";
          this.comments.push(response.data.comment);
          this.name = "";
          this.comment = "";
          this.rating = "";
        })
        .catch((error) => {
          this.errorMessage = error.response.data.message;
          this.successMessage = "";
        });
    },
    async fetchCompany() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(
          `http://127.0.0.1:80/api/companies/${id}`
        );
        this.company = response.data;
        console.log(this.company);
      } catch (error) {
        console.error("Ошибка при получении компании:", error);
        this.company = null;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
