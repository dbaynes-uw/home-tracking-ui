<template>
  <div>
    <h2>Create a Project</h2>
    <form @submit.prevent="sendForm">
      <fieldset>
        <legend>Project Name</legend>
        <BaseInput
          v-model="event.name"
          label="Name"
          type="text"
          error="This input has an error!"
        />
        <legend>Description</legend>
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>
      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      event: {
        name: "",
        description: "",
      },
    };
  },
  methods: {
    /* eslint-disable */ 
    sendForm(_e) {
      axios
        .post("http://localhost:3000/api/v1/areas/", this.event)
        .then(function (response) {
          console.log("Response", response);
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
  },
};
</script>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
