<template>
  <div>
    Due in next:
    <select @change="dueBy($event)">
      <option></option>
      <option>7</option>
      <option>10</option>
      <option>14</option>
      <option>21</option>
      <option>30</option>
    </select>
    Days
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "DueBy",
  methods: mapActions(["dueBy"]),
};
</script>

<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883;
}
</style>
