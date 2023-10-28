import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import components from "@/components/UI/arrayComponentsUI.js";

let app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
  console.log(component);
});
app.use(router);
app.use(store);
app.mount("#app");
