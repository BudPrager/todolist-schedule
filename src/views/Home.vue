<template>
  <div>
    <header class="home">
      <img alt="Vue logo" src="../assets/logo.png">
    </header>
    <main>
    <button v-on:click="loadItems">Load Items</button>
    <section>
      <ul>
        <li v-for="item in items" v-bind:key="item.id">{{ item.content }}</li>
      </ul>
    </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  computed: mapState({
    items: state => state.tasks.items,
  }),
  methods: {
    loadItems() {
      this.$store.dispatch('tasks/loadAllItems');
    },
  },
};
</script>
