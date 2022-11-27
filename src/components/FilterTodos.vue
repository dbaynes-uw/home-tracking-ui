<template>
  <div>
    <select @change="FilterTodos($event)">
      <option value="100">100</option>
      <option value="50">500</option>
      <option value="25">25</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "FilterTodos",
  methods: mapActions(["filterTodos"]),
};
</script>
<style scoped></style>
