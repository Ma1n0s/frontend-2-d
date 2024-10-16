<template>
  <div id="app">
    <nav>
      <menu3 class="w-10 h-10" @click="show = !show"></menu3>
      <transition name="fade" mode="out-in">
        <i class="" v-if="!show" key="menu"
          ><RouterLink to="login"></RouterLink
        ></i>
        <i class="" v-else @click="show = !show" key="clear"></i>
      </transition>
      <transition name="fade">
        <ul v-if="show">
          <li v-for="item in items">{{ item }}</li>
        </ul>
      </transition>
    </nav>
  </div>
</template>
<script>
export default {
  el: "#app",
  data() {
    return {
      items: ["Вход", "Регистрация"],
      show: false,
    };
  },
};
</script>

<script setup>
import menu3 from "@/assets/menu3.svg";
import { RouterLink } from "vue-router";
</script>
