import Vue from 'vue';

export const dateFilter = Vue.filter('dateFormat', (value: string) => {
     const date = new Date(value);

     const day = date.getDate();
     const month = date.getMonth() + 1;
     const year = date.getFullYear();

     return `${day}.${month}.${year}.`;
});
