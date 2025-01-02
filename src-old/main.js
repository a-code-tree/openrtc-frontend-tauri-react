import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
import store from "./store";
import router from "./router-old";

const app = createApp(App);
app.use(ArcoVue);
app.use(store);
app.use(router);
app.mount("#app");
