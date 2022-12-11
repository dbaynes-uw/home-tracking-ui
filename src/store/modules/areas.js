import axios from "axios";
const api_url = "http://localhost:3000/api/v1/areas/";

const state = {
  areas: [],
};

const getters = {
  allAreas: (state) => state.areas,
};

const actions = {
  /* From mapActions in Areas.vue:
  'fetchAreas',
  'deleteArea',
  'updateArea'
  */
  async fetchAreas({ commit }) {
    const response = await axios.get(api_url);
    commit("setAreas", response.data);
  },
  async addArea({ commit }, name, description, tasks) {
    const response = await axios.post(api_url, {
      area: {
        name,
        description,
        tasks,
        status: false,
      },
    });
    commit("newArea", response.data);
  },
  async deleteArea({ commit }, id) {
    await axios.delete(api_url + `/${id}`);
    commit("removeArea", id);
  },
  async filterAreas({ commit }, event) {
    const limit = parseInt(
      event.target.options[event.target.options.selectedIndex].innerText
    );
    const response = await axios.get(api_url + `?_limit=${limit}`);
    commit("setAreas", response.data);
  },
  async updateArea({ commit }, updatedArea) {
    const response = await axios.put(
      api_url + `/${updatedArea.id}`,
      updatedArea
    );
    commit("setUpdatedArea", response.data);
  },
};
const mutations = {
  setAreas: (state, areas) => (state.areas = areas),
  newArea: (state, area) => state.areas.unshift(area),
  removeArea: (state, id) =>
    (state.areas = state.areas.filter((area) => area.id !== id)),
  setUpdatedArea: (state, updatedArea) => {
    const index = state.areas.findIndex((area) => area.id === updatedArea.id);
    if (index !== -1) {
      state.areas.splice(index, 1, updatedArea);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
