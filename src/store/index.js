import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projectsData: [],
    projectsCategories: [],
    selectedCategoryOfProjects: "",
  },
  getters: {
    GET_PROJECTS_DATA: (state) => state.projectsData,
    GET_PROJECTS_CATEGORIES: (state) => state.projectsCategories,
    GET_SELECTED_CATEGORY_OF_PROJECTS: (state) =>
      state.selectedCategoryOfProjects,
  },
  mutations: {
    SET_PROJECTS_DATA: (state, data) => (state.projectsData = data.items),
    SET_PROJECTS_CATEGORIES: (state, data) =>
      (state.projectsCategories = data.items),
    SET_SELECTED_CATEGORY_OF_PROJECTS: (state, data) =>
      (state.selectedCategoryOfProjects = data),
  },
  actions: {
    fetchData({ commit }) {
      fetch("https://backend.cyberia.studio/api/v1/projects")
        .then((response) => response.json())
        .then((response) => commit("SET_PROJECTS_DATA", response))
        .catch((error) => console.error(error));
      fetch("https://backend.cyberia.studio/api/v1/project-categories")
        .then((response) => response.json())
        .then((response) => {
          commit("SET_PROJECTS_CATEGORIES", response);
          commit("SET_SELECTED_CATEGORY_OF_PROJECTS", response.items[0].id);
        })
        .catch((error) => console.error(error));
    },
  },
});
