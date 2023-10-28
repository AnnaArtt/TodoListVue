<template>
  <div class="catalog">
    <template v-for="userToDo in usersToDo" :key="userToDo.id">
      <ToDo :todo="userToDo" @editTodo="editTodo" style="margin-top: 15px" />
      <!-- @deleteTodo="deleteT" -->
    </template>
  </div>
</template>

<script>
import ToDo from "@/components/todo/ToDo.vue";
export default {
  name: "todo-list",
  components: {
    ToDo,
  },
  props: {
    usersToDo: {
      type: Array,
      required: true,
    },
  },
  computed: {},
  methods: {
    updateStatus(value) {
      console.log(value);
      this.$emit("updateUserStatus", value);
    },
    deleteT(response) {
      console.log(response);
      console.log("sssss");
      this.$emit("deleteTodo", response);
    },
    editTodo(todo) {
      this.$emit("editTodo", todo);
    },
  },
};
</script>

<style>
.catalog {
  width: auto;
}
</style>
