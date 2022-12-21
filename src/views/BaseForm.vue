<template>
  <div>
    <h2>Home Project</h2>
    <!--form class="add-form" @submit.prevent="sendForm"-->
    <form class="add-form" @submit.prevent="sendForm">
      <fieldset>
        <BaseInput
          v-model="form.description"
          label="Area"
          type="text"
          placeholder="Description"
          required
          oninvalid="this.setCustomValidity('Describe the area needing maintenance')"
          oninput="setCustomValidity('')"
        />
        <br /><br />
        <label for="notes">Notes:</label>
        <textarea id="notes" v-model="form.notes"></textarea>
        <br /><br />
        <label>
          Select Frequency:
          <select
            v-model="form.frequency"
            placeholder="Frequency"
            class="select-number"
            required
            oninvalid="this.setCustomValidity('Select How Often Task Needs to be Done')"
            oninput="setCustomValidity('')"
          >
            <option>7</option>
            <option>10</option>
            <option>14</option>
            <option>21</option>
            <option>30</option>
          </select>
          &nbsp;Days
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
        notes: "",
      },
    };
  },
  methods: {
    /* eslint-disable */ 
    sendForm(_e) {
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
.select-number {
  width: 10%;
  height: 1.75rem;
}
#notes {
  width: 100%;
  height: 4rem;
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
