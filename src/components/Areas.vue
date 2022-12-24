<template>
  <div>
    <h3>ToDos</h3>
    <div class="legend">
      <span>Double click to mark as complete.</span>
      <span><span class="incomplete-box"></span> = Incomplete</span>
      <span><span class="complete-box"></span> = Complete</span>
    </div>
    <div class="areas">
      <div
        v-for="area in allAreas"
        :key="area.id"
        @dblclick="onDoubleClick(area)"
        class="area"
        v-bind:class="{ 'is-complete': area.completed }"
      >
        <button class="button" @click="editAreaForm(area)">Edit Area</button>
        <p class="p-align-left">
          <b>
            <u>{{ area.description }}</u>
          </b>
        </p>
        <ul class="ul-left">
          <li>{{ area.notes }}</li>
          <li v-if="area.completed">
            Date completed:
            {{ format_date(area.action_date) }}
          </li>
          <li>{{ area.frequency }} day cycle</li>
          <li v-if="area.action_date">
            <span v-for="(history, index) in area.histories" :key="history.id">
              <div v-if="index == area.histories.length - 1">
                History: {{ history.notes }}
                on
                {{ format_date(history.created_at) }}.
              </div>
            </span>
          </li>
          <li>
            {{ caculateDue(area.action_date, area.frequency) }}:
            {{ caculateDueDate(area.action_date, area.frequency) }}
          </li>
        </ul>
        <i @click="deleteArea(area.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
// Import our getters and our actions
import { mapGetters, mapActions } from "vuex";
import moment from "moment-timezone";
moment.tz.setDefault("America/Los_Angeles");
export default {
  name: "Areas",
  data: () => ({
    endDate: "",
    startDate: "",
    dateDiff: 0,
  }),

  methods: {
    ...mapActions(["fetchAreas", "deleteArea", "updateArea"]),
    format_date(value) {
      if (value) {
        value = moment(value).format("MM/DD/YY");
        return value;
      }
    },
    caculateDueDate(action_date, frequency) {
      let returnMessage = "";
      let dateCompleted = moment(action_date);
      let dueDate = moment(dateCompleted).add(frequency, "days");
      returnMessage = `${moment(dueDate).format("MM/DD/YY")}`;
      return returnMessage;
    },
    caculateDue(action_date, frequency) {
      let returnMessage = "";
      let start = moment(new Date());
      let end = moment(action_date);
      let duration = end.diff(start, "days") + frequency;

      if (duration >= 0) {
        returnMessage = "Due: " + duration + " Days";
      } else {
        duration = duration * -1;
        returnMessage = "OverDue:" + duration + " Days!";
      }
      return returnMessage;
    },
    editAreaForm(currentArea) {
      console.log("ONCLICK - Area: ", currentArea);
      const updatedArea = {
        id: currentArea.id,
        description: currentArea.description,
        notes: currentArea.notes,
        completed: !currentArea.completed,
        action_date: currentArea.action_date,
      };
      this.updateArea(updatedArea);
      //location.reload();
    },
    onDoubleClick(currentArea) {
      const updatedArea = {
        id: currentArea.id,
        description: currentArea.description,
        notes: currentArea.notes,
        completed: !currentArea.completed,
        action_date: currentArea.action_date,
      };
      this.updateArea(updatedArea);
      location.reload();
    },
  },
  computed: {
    ...mapGetters(["allAreas"]),
  },
  created() {
    this.fetchAreas();
  },
};
</script>

<style scoped>
.p-align-left {
  text-align: left;
  padding-top: 0em;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.ul-left {
  text-align: left;
  padding-inline-start: 1rem;
  margin-block-start: 0em;
  margin-block-end: 0em;
}
.areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.area {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  padding-top: 0em;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b882;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .areas {
    grid-template.columns: 1fr;
  }
}
</style>
