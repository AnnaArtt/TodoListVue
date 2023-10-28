<template>
  <div class="toDo">
    <div class="wrapper">
      <div class="left_part">
        <h2 class="titleTodo">{{ todo.title }}</h2>
        <img
          src="@/assets/edit.png"
          alt=""
          class="arrow"
          @click="openEditTodo"
        />
      </div>

      <img
        src="@/assets/arrow.png"
        alt=""
        class="arrow"
        @click="state = !state"
        :class="{ rotateArrow: !state }"
      />
    </div>
    <div class="info" v-if="state">
      <div class="additionalInfo">
        <div class="miniInfoBlock">
          <div class="circle" :style="{ 'background-color': colorType }"></div>
          <h5>{{ todo.type }}</h5>
        </div>
        <div class="miniInfoBlock">
          <div
            class="circle"
            :style="{ 'background-color': colorStatus }"
          ></div>
          <h5>{{ todo.status }}</h5>
        </div>
      </div>
      <p class="description">{{ todo.description }}</p>
      <div class="buttons_wrapper">
        <new-button
          v-if="todo.status == 'process'"
          style="margin-right: 10px"
          @click="statusDone"
        >
          Done
        </new-button>
        <new-button @click="deleteTodo"> Delete </new-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "to-do",
  data() {
    return {
      state: true,
    };
  },
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    colorStatus() {
      if (this.todo.status == "process") {
        return "#EED85A";
      } else {
        return "#33453B";
      }
    },
    colorType() {
      let color = "";
      switch (this.todo.type) {
        case "vacation":
          color = "#24558F";
          break;
        case "hobby":
          color = "#33453B";
          break;
        case "study/work":
          color = "#C36E6E";
          break;
        case "housework":
          color = "#EED85A";
          break;
        default:
          color = "#FFBE98";
          break;
      }
      return color;
    },
  },
  methods: {
    ...mapActions(["quarryDeleteTodo", "updateTodo"]),
    ...mapMutations(["addMessage"]),
    async statusDone() {
      let update_user_status = JSON.parse(JSON.stringify(this.todo));
      update_user_status.status = "done";
      await this.updateTodo(update_user_status);
    },
    async deleteTodo() {
      let response = await this.quarryDeleteTodo(this.todo._id);
      console.log(response);

      this.$emit("deleteTodo", response);
    },
    openEditTodo() {
      this.$emit("editTodo", this.todo);
    },
  },
};
</script>

<style lang="scss">
.toDo {
  display: flex;
  flex-direction: column;
  background-color: #dda1a1;
  border-radius: 15px;

  padding: 10px;
  // box-shadow: ;
  width: inherit;

  min-width: 100%;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0d7d7;

    padding: 5px;
    border-radius: 10px;
    //padding: 5px;
    .titleTodo {
      font-size: 32px;
    }
    .arrow {
      height: 16px;
      width: auto;
      margin-right: 5px;
    }
    .left_part {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .info {
    .additionalInfo {
      display: flex;
      padding: 10px;
    }
    .miniInfoBlock {
      display: flex;
      align-items: center;

      margin-right: 10px;
      h5 {
        font-size: 14px;
        color: #484848;
      }
      .circle {
        height: 12px;
        width: 12px;
        border-radius: 50%;

        background-color: #ffffff;

        margin-right: 5px;
      }
    }
    .description {
      margin-left: 10px;
      font-size: 22px;
      color: #484848;
    }
    .buttons_wrapper {
      position: relative;
      display: flex;
      justify-content: flex-end;
    }
  }
}

.rotateArrow {
  transform: rotate(270deg);
}
</style>
