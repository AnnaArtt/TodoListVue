<template>
  <div class="header_wrapper" ref="header_">
    <HeaderTodo @addNewTodo="showMessage" style="z-index: 100" />
  </div>
  <div class="page_wrapper">
    <aside>
      <div class="user_wrapper">
        <UserProfile :user="getUserInfo" />
      </div>
      <div class="greeting">
        <h2>{{ greeting }}</h2>
        <img src="../assets/hello.png" alt="" />
      </div>
      <new-button @click="openStatistic">Statistic</new-button>
    </aside>
    <section class="main_part">
      <FilterBox
        v-model:checked_box="visible_all"
        v-model:checked_option_props="sort_option"
      />
      <TodoList
        :usersToDo="filtered_user_list"
        @deleteTodo="showMessage"
        @editTodo="openEditDialog"
      />
      <!-- <ListTabs /> -->
    </section>
    <pop-up :pop_up_active="pop_up_active">{{ message }}</pop-up>
  </div>

  <EditTodo
    v-model="isOpenedEditTodo"
    :todoForEdit="infoForEditTodo"
    style="z-index: 200"
  />
  <!-- @updateTodo="updateTodo" -->

  <StatisticWidget v-model="isOpenedStatistic" style="z-index: 100" />
</template>
<script>
import HeaderTodo from "@/components/header/HeaderTodo.vue";
import UserProfile from "@/components/user/UserProfile.vue";
import TodoList from "@/components/todo/TodoList.vue";
import FilterBox from "@/components/todo/FilterBox.vue";
import EditTodo from "@/components/todo/EditTodo.vue";
import ManageAccounts from "@/components/user/api/api.js";
import StatisticWidget from "@/components/statistic/StatisticWidget.vue";
// import ListTabs from "@/components/todo/ListTabs.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "main-profile",
  components: {
    HeaderTodo,
    UserProfile,
    TodoList,
    FilterBox,
    EditTodo,
    StatisticWidget,
    // ListTabs,
  },
  computed: {
    greeting: {
      cache: false,
      get() {
        if (this.getUserInfo != null) {
          let greeting_string = `Hello, ${this.getUserInfo.userName}!`;
          return greeting_string;
        }
        return "Hello";
      },
    },
    ...mapGetters([
      "getTodoList",
      "getUserInfo",
      "getStatusLoadingTodo",
      "getStatusLoadingProfile",
    ]),
    current_user_list() {
      if (!this.visible_all && this.getTodoList != null) {
        console.log(this.getTodoList);
        return this.getTodoList.filter((todo) => todo.status != "done");
      } else {
        return this.getTodoList;
      }
    },
    filtered_user_list() {
      if (this.sort_option == "all") {
        return this.current_user_list;
      } else {
        return this.current_user_list.filter(
          (todo) => todo.type == this.sort_option
        );
      }
    },
  },
  data() {
    return {
      userInfo: [],
      id: this.$route.params.id,

      sort_option: "all",
      visible_all: false,

      isOpenedEditTodo: false,
      pop_up_active: false,
      isOpenedStatistic: false,

      infoForEditTodo: {},
      message: "",
    };
  },
  methods: {
    async getUser() {
      this.userInfo = await ManageAccounts.fetchUser(this.id);
      if (this.userInfo == "Error") {
        this.$router.push("/error505");
      }
    },
    ...mapActions(["fetchTodoLists", "fetchUser"]),
    openEditDialog(todo) {
      console.log(todo);
      this.infoForEditTodo = todo;
      this.isOpenedEditTodo = true;
    },
    showMessage(response) {
      this.message = response;
      console.log(response);
      this.pop_up_active = true;

      setTimeout(() => {
        this.pop_up_active = false;
      }, 3000);
    },
    openStatistic() {
      this.isOpenedStatistic = true;
    },
  },
  mounted() {
    this.fetchUser(this.id);
    this.fetchTodoLists(this.id);

    this.$nextTick(() => {
      setTimeout(() => {
        console.log("load");
        this.showPreloader = false;
      }, 0);
    });
  },
};
</script>

<style lang="scss">
.user_wrapper {
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.page_wrapper {
  position: relative;

  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px;

  z-index: 10;
}
aside {
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20vw;
  .greeting {
    display: flex;
    h2 {
      font-size: 30px;
    }
    img {
      height: 30px;
      width: auto;
    }

    img {
      height: 30px;
      width: auto;

      animation: rotation 3000ms infinite linear;
    }
    @keyframes rotation {
      0% {
        -webkit-transform: rotate(0deg);
      }
      10% {
        -webkit-transform: rotate(-25deg);
      }
      20% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(0deg);
      }
    }
  }
}
.main_part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 25px;
  width: 75vw;
}
</style>
