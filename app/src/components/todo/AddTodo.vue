<template>
  <dialog-window v-model="visibleDialog">
    <form @submit.prevent="">
      <h3>Title</h3>
      <new-input v-model="todo.title"></new-input>
      <h3>Description</h3>
      <new-input v-model="todo.description"></new-input>
      <h3>Type</h3>
      <new-select v-model="todo.type" :array_values="array_types"></new-select>
      <h3 v-if="error" class="error_massage">Please fill in the fields</h3>
      <new-button style="margin-top: 10px" @click="sendNewData">Add</new-button>
    </form>
  </dialog-window>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "add-todo",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      visibleDialog: false,
      array_types: ["vacation", "hobby", "study/work", "housework", "other"],
      todo: {
        title: "",
        description: "",
        type: "",
        status: "process",
      },
      error: false,
    };
  },
  watch: {
    modelValue() {
      console.log("ModelValue");
      this.visibleDialog = this.modelValue;
    },
    visibleDialog() {
      console.log("visibleDialog");
      this.cleanDialog();
      this.$emit("update:modelValue", this.visibleDialog);
    },
  },
  computed: {
    ...mapGetters(["getUserId"]),
  },
  methods: {
    ...mapActions(["createNewTodo"]),
    closeDial() {
      this.visibleDialog = false;
      this.error = false;
    },
    checkInput() {
      for (const key in this.todo) {
        if (this.todo[key] == "") {
          this.error = true;
          break;
        }
        this.error = false;
      }
    },
    async sendNewData() {
      this.checkInput();
      if (!this.error) {
        const userId = this.getUserId;
        // const todo = this.todo;
        console.log(userId);
        let message = await this.createNewTodo({
          todo: this.todo,
          id_user: userId,
        });
        console.log(message);
        this.$emit("massageAddTodo", message);
        this.closeDial();
      }
    },
    cleanDialog() {
      this.todo = {
        title: "",
        description: "",
        type: "",
        status: "process",
      };
      this.error = false;
    },
  },
};
</script>

<style>
.error_massage {
  color: brown;
}
</style>
