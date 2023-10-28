import axios from "axios";

export default {
  actions: {
    async fetchUser({ commit }, _id) {
      try {
        const token = localStorage.getItem("token");

        commit("setStatusLoadingProfile", "LOADING");

        const response = await axios.get(
          `http://localhost:8081/member/getMember:${_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        commit("setStatusLoadingProfile", "READY");
        commit("updateUserInfo", response.data.member);
      } catch (error) {
        console.log(error);
        console.log("error suk");
        commit("setStatusLoadingProfile", "ERROR");
        return "Error";
      }
    },
  },
  mutations: {
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setStatusLoadingProfile(state, status) {
      state.statusLoadingProfile = status;
      console.log(state.statusLoadingProfile);
    },
  },
  state() {
    return {
      userInfo: [],
      statusLoadingProfile: null,
    };
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getUserId(state) {
      return state.userInfo._id;
    },
    getStatusLoadingProfile(state) {
      return state.statusLoadingProfile;
    },
  },
};
