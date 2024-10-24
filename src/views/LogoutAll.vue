<template>
  <header>
    <nav>
      <button @click="logout">Выйти</button>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  router.push("/login");
};
</script>
