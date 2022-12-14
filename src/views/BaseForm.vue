<template>
  <div>
    <h2>Home Project</h2>
    <!--form class="add-form" @submit.prevent="sendForm"-->
    <form class="add-form" @submit.prevent="sendForm">
      <fieldset>
        <BaseInput
          v-model="form.description"
          label="Task"
          type="text"
          placeholder="Description"
          required
        />
        <label>
          Select Frequency:
          <select
            class="select-box"
            v-model="form.frequency"
            placeholder="Frequency"
            required
          >
            <option>7 days</option>
            <option>10 days</option>
            <option>14 days</option>
            <option>21 days</option>
            <option>30 days</option>
          </select>
        </label>
        <br /><br />
        <!--label>Detail Tasks</label>
        <input type="text" v-model="event.description" /-->
        <label v-for="task in form.tasks" :key="task.id">
          Task:
          <input type="text" v-model="task.description" />
        </label>
      </fieldset>
      <button class="button" type="submit">Submit</button>
    </form>

    <!--pre>{{ event }}</pre-->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "",
        frequency: "",
        tasks: [{ description: "" }, { description: "" }, { description: "" }],
      },
    };
  },
  methods: {
    /* eslint-disable */ 
    sendForm(_e) {
      // if (this.$v.invalid) {
      //   console.log("HEY Invalid this: ", this.form);
      //   return;
      // } else {
      //   console.log("NOPE EVERY FINE: ", this.form);
      // }
      axios
        .post("http://localhost:3000/api/v1/areas/", this.form)
        .then(function (response) {
          console.log("Response", response);
          location.reload();
        })
        .catch(function (err) {
          console.log("Error", err);
        });
    },
  },
};
</script>

<style>
.add-form {
  display: flex;
  flex-direction: column;
  width: 425px;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
.select-box {
  width: 102%;
  height: 44px;
  margin-bottom: -2px;
}
.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  width: 160px;
  height: 60px;
  color: white;
  padding: 20px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}
label {
  font-size: 20px;
  margin-bottom: 5px;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}
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
