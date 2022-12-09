<template>
  <div>
    <select @change="filterTodos($event)">
      <option value="100">100</option>
      <option value="50">500</option>
      <option value="25">25</option>
      <option value="5">5</option>
      <option value="2">2</option>
      <option value="1">1</option>
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
<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883;
}
</style>
