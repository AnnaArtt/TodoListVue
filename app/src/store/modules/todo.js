import axios from "axios";
// import statusLoading from "@/constants/index.js";
export default {
  actions: {
    async fetchTodoLists({ commit }, _id) {
      try {
        const token = localStorage.getItem("token");

        commit("setStatusLoading", "LOADING");

        const response = await axios.get(
          `http://localhost:8081/todo/getList:${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        let todo_list = response.data.todo_list;

        // commit("setStatusLoading", "READY");
        commit("updateTodoList", todo_list);
      } catch (error) {
        console.log(error);
        console.log("error suk");
        commit("setStatusLoading", "ERROR");
        // page error
      }
    },
    async quarryDeleteTodo({ commit }, _id) {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.delete(
          `http://localhost:8081/todo/delete:${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        commit("deleteTodoInList", _id);

        return response.data.message;
      } catch (error) {
        console.log(error);
        return error.data.message;
      }
    },
    async createNewTodo({ commit }, { todo, id_user }) {
      try {
        const token = localStorage.getItem("token");

        console.log(id_user);

        const response = await axios.post(
          `http://localhost:8081/todo/createTodo:${id_user}`,
          todo,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        commit("addNewTodo", response.data.todo);

        return response.data.message;
      } catch (error) {
        console.log(error);
        return error.data.message;
      }
    },
    async updateTodo({ commit }, todo) {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.put(
          `http://localhost:8081/todo//updateTodo`,
          todo,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response.data.todo);
        commit("addUpdatedTodo", response.data.todo);

        // return response.data.message;
      } catch (error) {
        console.log(error);
        // return error.data.message;
      }
    },
  },
  mutations: {
    updateTodoList(state, todo_list) {
      state.todo_list = todo_list;
    },
    deleteTodoInList(state, _id) {
      let new_list = state.todo_list;
      new_list = new_list.filter((item) => item._id != _id);
      state.todo_list = new_list;
    },
    addNewTodo(state, todo) {
      state.todo_list.push(todo);
    },
    addUpdatedTodo(state, todo) {
      let id = todo._id;
      const index = state.todo_list.findIndex((obj) => obj._id === id);
      if (index !== -1) {
        state.todo_list[index] = todo;
        console.log("update");
      }
    },
    setStatusLoading(state, status) {
      state.statusLoading = status;
    },
  },
  state() {
    return {
      todo_list: [],
      statusLoading: null,
    };
  },
  getters: {
    getTodoList(state) {
      return state.todo_list;
    },
    getStatusLoadingTodo(state) {
      return state.statusLoading;
    },
  },
};
