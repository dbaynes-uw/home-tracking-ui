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
        v-bind:class="{ 'is-complete': area.status }"
      >
        {{ area.name }} : {{ area.description }}
        <i @click="deleteArea(area.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>
<script>
// Import our getters and our actions
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Areas",
  methods: {
    ...mapActions(["fetchAreas", "deleteArea", "updateArea"]),
    onDoubleClick(currentArea) {
      const updatedArea = {
        id: currentArea.id,
        name: currentArea.name,
        status: !currentArea.status,
      };
      this.updateArea(updatedArea);
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
.areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.area {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
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
