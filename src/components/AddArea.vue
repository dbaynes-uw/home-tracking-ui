<template>
  <div>
    <h3>Add Area</h3>
    <div class="add">
      <form @submit="onSubmit">
        <fieldset>
          <legend>Project name</legend>
          <input type="text" v-model="name" placeholder="Project Name..." />
          <legend>Description</legend>
          <input
            type="text"
            v-model="description"
            placeholder="Description..."
          />
          <legend></legend>
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddArea",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    ...mapActions(["addArea"]),
    onSubmit(form) {
      form.preventDefault();
      this.addArea(this.description);
      this.description = "";
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #ccc;
  outline: 0;
}
input[type="text"]:hover,
input[type="text"]:focus {
  border: 1px solid #41b883;
  background-color: "red";
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
input[type="submit"]:hover,
input[type="submit"]:focus {
  background: #31836b;
}
</style>
