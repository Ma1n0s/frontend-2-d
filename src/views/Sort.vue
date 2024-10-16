<template>
    <div>
      <div>
        <button @click="sortItems('good')">Хорошие</button>
        <button @click="sortItems('bad')">Плохие</button>
        <button @click="sortItems('new')">Новые</button>
        <button @click="sortItems('old')">Старые</button>
        <button @click="sortItems('popular')">По популярности</button>
      </div>
  
      <ul>
        <li v-for="item in sortedItems" :key="item.id">
          {{ item.name }} - {{ item.date }} - {{ item.popularity }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1', date: '2023-10-01', popularity: 5, type: 'good' },
          { id: 2, name: 'Item 2', date: '2023-09-15', popularity: 3, type: 'bad' },
          { id: 3, name: 'Item 3', date: '2023-10-05', popularity: 8, type: 'good' },
          { id: 4, name: 'Item 4', date: '2023-08-20', popularity: 2, type: 'bad' },
        ],
        currentSort: 'new',
      };
    },
    computed: {
      sortedItems() {
        return this.items.slice().sort((a, b) => {
          switch (this.currentSort) {
            case 'good':
              return a.type === 'good' ? -1 : 1;
            case 'bad':
              return a.type === 'bad' ? -1 : 1;
            case 'new':
              return new Date(b.date) - new Date(a.date);
            case 'old':
              return new Date(a.date) - new Date(b.date);
            case 'popular':
              return b.popularity - a.popularity;
            default:
              return 0;
          }
        });
      },
    },
    methods: {
      sortItems(criteria) {
        this.currentSort = criteria;
      },
    },
  };
  </script>
  
  <style>

  </style>
  