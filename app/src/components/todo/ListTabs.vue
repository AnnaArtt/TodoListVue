<template>
  <div class="todo_tabs">
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTabComponent" v-bind="currentProps"></component>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import TodoList from "./TodoList.vue";
// import { mapGetters } from "vuex";
export default {
  components: {
    FilterBox,
    TodoList,
  },
  data() {
    return {
      currentTab: "MyList",
      tabs: ["MyList", "MyTasks"],
      todo_list: [
        {
          _id: "648d68ddccb23496e6f2e73f",
          title: "New task",
          description: "New description)",
          type: "other",
          status: "process",
          userId: "647caa20696118c49fc6ba02",
          __v: 0,
        },
      ],
    };
  },
  computed: {
    // ...mapGetters(["getTodoList"]),
    currentTabComponent() {
      if (this.currentTab == "MyList") {
        return "TodoList";
      } else {
        return "FilterBox";
      }
    },
    currentProps() {
      if (this.currentTab == "MyList") {
        return { usersToDo: this.todo_list };
      } else {
        return {};
      }
    },
  },
};
</script>

<style>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
</style>
