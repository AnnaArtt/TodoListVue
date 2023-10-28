<template>
  <dialog-window v-model="isOpened">
    <form @submit.prevent="">
      <h3>Title</h3>
      <new-input v-model="todo.title" />
      <h3>Description</h3>
      <new-input v-model="todo.description" />
      <h3>Status</h3>
      <new-select v-model="todo.type" :array_values="array_status" />
      <h3 v-if="error" class="error_massage">Please fill all fields</h3>
      <div class="button_wrapper">
        <new-button type="submit" @click="sendUpdatedTodo">Add</new-button>
      </div>
    </form>
  </dialog-window>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "edit-todo",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    todoForEdit: {
      type: Object,
      required: true,
    },
  },
  watch: {
    modelValue() {
      console.log(this.todoForEdit);
      console.log(this.todo);
      this.isOpened = this.modelValue;
    },
    todoForEdit() {
      this.todo = { ...this.todoForEdit };
    },
    isOpened() {
      this.$emit("update:modelValue", this.isOpened);
    },
  },
  data() {
    return {
      isOpened: false,
      array_status: ["vacation", "hobby", "study/work", "housework", "other"],
      todo: {},
      error: false,
    };
  },
  methods: {
    ...mapActions(["updateTodo"]),
    checkFields() {
      for (const key in this.todo) {
        if (this.todo[key] == "" && key != "__v") {
          this.error = true;
          console.log(key);
          console.log(this.todo[key]);
          console.log(this.todo);
          break;
        }
        this.error = false;
      }
    },
    async sendUpdatedTodo() {
      this.checkFields();

      if (!this.error) {
        // create event
        await this.updateTodo(this.todo);
        // this.$emit("updateTodo", response);
        this.isOpened = false;
      }
      // clean form?????
      console.log("Updated");
    },
  },
};
</script>

<style>
.error_massage {
  color: brown;
}
</style>
