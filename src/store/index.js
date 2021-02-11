import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    places: [],
    searchGeo: "",
    searchWord: "",
    selectPlace: "",
    zoom: 13,
  },
  mutations: {
    result(state, data) {
      state.places = data.places;
      state.searchGeo = data.searchGeo;
      state.searchWord = data.searchWord;
      state.selectPlace = data.searchGeo;
    },
    changeFocus(state, geo) {
      state.selectPlace = geo;
      state.zoom = 16;
    },
  },
  actions: {
    async searchRestaurant(context, searchInput) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/search/place/restaurant",
          {
            search: searchInput,
          }
        );
        const places = response.data.data.results;
        const searchGeo = response.data.searchGeo;
        const searchWord = response.data.searchWord.name;
        const data = {
          places: places,
          searchGeo: searchGeo,
          searchWord: searchWord,
        };

        context.commit("result", data);
      } catch {
        console.error("เกิดบางอย่างผิดพลาด");
      }
    },

    mapFocus(context, geo) {
      context.commit("changeFocus", geo);
    },
  },
  modules: {},
});
