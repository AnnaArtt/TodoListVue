import { createStore } from "vuex";
import todo from "./modules/todo.js";
import settings from "./modules/settings.js";
import userInfo from "./modules/currentUser.js";
import mainPageCatchMessage from "./modules/mainPageCatchMessage.js";

// Create a new store instance.
const store = createStore({
  modules: {
    todo,
    userInfo,
    settings,
    mainPageCatchMessage,
  },
});

export default store;
