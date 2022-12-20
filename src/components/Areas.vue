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
        <p class="p-align-left">
          {{ area.description }}
        </p>
        <p class="p-align-left">
          {{ area.notes }}
        </p>
        <!-- Days Overdue or BeforeDue-->
        <ul class="ul-left">
          <li v-if="area.completed">
            Date completed:
            {{ format_date(area.date_completed) }}
          </li>
          <li>{{ area.frequency }} day cycle</li>
          <li v-if="area.date_completed">
            {{ caculateDue(area.date_completed, area.frequency) }} -
            {{ caculateDueDate(area.date_completed, area.frequency) }}
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
    caculateDueDate(date_completed, frequency) {
      let returnMessage = "";
      let dateCompleted = moment(date_completed);
      let dueDate = moment(dateCompleted).add(frequency, "days");
      returnMessage = `${moment(dueDate).format("MM/DD/YY")}`;
      return returnMessage;
    },
    caculateDue(date_completed, frequency) {
      let returnMessage = "";
      let start = moment(new Date());
      let end = moment(date_completed);
      let duration = end.diff(start, "days") + frequency;

      if (duration >= 0) {
        returnMessage = "Due: " + duration + " Days";
      } else {
        duration = duration * -1;
        returnMessage = "OverDue:" + duration + " Days!";
      }
      return returnMessage;
    },
    onDoubleClick(currentArea) {
      const updatedArea = {
        id: currentArea.id,
        description: currentArea.description,
        notes: currentArea.notes,
        completed: !currentArea.completed,
        date_completed: currentArea.date_completed,
      };
      if (updatedArea.completed === true) {
        updatedArea.date_completed = new Date().toISOString().substr(0, 10);
      } else {
        updatedArea.date_completed = null;
        console.log(updatedArea.date_completed);
      }
      this.updateArea(updatedArea);
      // location.reload();
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
