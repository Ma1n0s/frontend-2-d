<template>
  <div>
    <h2>Комментарии</h2>
    <form @submit.prevent="addComment">
      <textarea
        v-model="newComment"
        placeholder="Введите комментарий..."
        required
      ></textarea>
      <button type="submit">Добавить комментарий</button>
    </form>

    <ul>
      <li v-for="comment in comments" :key="comment.id">
        {{ comment.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comments: [],
      newComment: "",
    };
  },
  methods: {
    async fetchComments() {
      try {
        const response = await axios.get("/api/comments");
        this.comments = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async addComment() {
      try {
        await axios.post("/api/comments", {
          content: this.newComment,
        });
        this.newComment = "";
        this.fetchComments();
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchComments();
  },
};
</script>
