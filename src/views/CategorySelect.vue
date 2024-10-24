<template>
  <div
    class="bg-slate-50 p-24 w-full rounded-lg shadow-md shadow-xl flex flex-col border-2 border-gray-300"
  >
    Фильтрации по тэгам
    <div>
      <select
        v-model="selectedCategory"
        class="bg-gray-200 border border-gray-400 p-2"
      >
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      selectedCategory: null,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await fetch("/api/categories");
        this.categories = await response.json();
      } catch (error) {
        console.error("Ошибка при получении категорий:", error);
      }
    },
  },
};
</script>
