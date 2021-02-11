import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";
import store from './store'

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyClKecUuAwqAo5ZNUdQrX_QfyOONjM-Lvo",
    libraries: "places",
  },
});

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App)
}).$mount("#app");
