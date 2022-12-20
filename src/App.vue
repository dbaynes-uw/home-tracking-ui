<template>
  <div id="app">
    <div class="container">
      <h1>Home Tracking Manager</h1>
      <h6>Powered by: Vue 3 | Vuex 4 | Axios | Ruby on Rails | SQLite</h6>
      <FilterAreas />
      <DueBy />
      <PastDue />
      <Areas />
      <BaseForm />
    </div>
  </div>
</template>

<script>
import BaseForm from "@/views/BaseForm";
import Areas from "@/components/Areas.vue";
import FilterAreas from "@/components/FilterAreas.vue";
import DueBy from "@/components/DueBy.vue";
import PastDue from "@/components/PastDue.vue";

export default {
  name: "App",
  components: {
    FilterAreas,
    DueBy,
    PastDue,
    Areas,
    BaseForm,
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
