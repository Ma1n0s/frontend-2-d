<template>
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
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    fetchComments() {
      axios.get("http://127.0.0.1:80/api/comments").then((response) => {
        this.comments = response.data;
      });
    },
    submitComment() {
      axios
        .post("http://127.0.0.1:80/api/comments", {
          name: this.name,
          comment: this.comment,
          rating: this.rating,
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
  },
};
</script>
