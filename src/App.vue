<template>
  <div id="app">
    <div class="container">
      <h1>Todo List Manager</h1>
      <h6>Powered by: Vue 3 | Vuex 4 | Axios | Ruby on Rails | SQLite</h6>
      <AddTodo />
      <FilterTodos />
      <To_dos />
    </div>
  </div>
</template>

<script>
import To_dos from "@/components/To_dos.vue";
import AddTodo from "@/components/AddTodo.vue";
import FilterTodos from "@/components/FilterTodos.vue";
export default {
  name: "App",
  components: {
    To_dos,
    AddTodo,
    FilterTodos,
  },
};
</script>
<style>
body {
  font-family: "Franklin Gothic Medium", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
