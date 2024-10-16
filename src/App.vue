<template>
  <RouterView />
</template>

<script setup>
import WhatsappIcon from "@/assets/whatsapp.svg";
import instagram from "@/assets/instagram.svg";
import vk from "@/assets/vk.svg";
import other from "@/assets/other.svg";
import yoodle from "@/assets/yoodle.svg";
import menu3 from "@/assets/menu3.svg";
</script>
<script>
export default {
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("token");
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
