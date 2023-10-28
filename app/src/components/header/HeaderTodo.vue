<template>
  <div class="wrapper">
    <header>
      <div class="logo">
        <h1 @click="$router.push(`/`)" style="cursor: pointer">FamilyToDo</h1>
        <h2 @click="changeVis" style="cursor: pointer">+</h2>
      </div>
    </header>
    <AddTodo v-model="addVis" @massageAddTodo="sendMessageTodoInfo" />
  </div>
</template>

<script>
import AddTodo from "@/components/todo/AddTodo.vue";
export default {
  name: "header-todo",
  components: {
    AddTodo,
  },
  data() {
    return {
      addVis: false,
    };
  },
  methods: {
    changeVis() {
      this.addVis = true;
    },
    sendMessageTodoInfo(message) {
      this.$emit("addNewTodo", message);
    },
  },
};
</script>

<style>
.wrapper {
  position: relative;
}
.logo {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}
h1 {
  color: #484848;
}
h2 {
  font-size: 42px;
  color: #484848;
}
</style>
