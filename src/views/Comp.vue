<template>
  <div>
    <h1>Подтвержденные компании</h1>
    <ul>
      <li v-for="company in confirmedCompanies" :key="company.id">
        <router-link :to="`/MainForm/Organization/${company.id}`">
          {{ company.name_comp }}
        </router-link>
      </li>
    </ul>
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
