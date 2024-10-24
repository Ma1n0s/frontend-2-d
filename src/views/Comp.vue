<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="company in confirmedCompanies"
        :key="company.id"
        class="bg-white p-6 rounded-lg shadow-md flex flex-col items-start border-2 border-gray-300"
      >
        <router-link
          :to="`/Organization/${company.id}`"
          class="font-bold text-xl md:text-2xl mb-2"
        >
          {{ company.name_comp }}
        </router-link>
        <div class="text-sm text-gray-600">
          Краснодар 350080, Краснодарский кр., г. Краснодар, ул. Уральская, д.
          97
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      companies: [],
    };
  },
  computed: {
    confirmedCompanies() {
      return this.companies.filter((company) => company.is_confirmed);
    },
  },
  mounted() {
    this.fetchCompanies();
  },
  methods: {
    async fetchCompanies() {
      try {
        const response = await fetch("http://127.0.0.1:80/api/companies");
        this.companies = await response.json();
      } catch (error) {
        console.error("Ошибка при получении компаний:", error);
      }
    },
  },
};
</script>
