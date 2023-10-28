export default {
  state() {
    return {
      todoColorInfo: [
        {
          type: "vacation",
          color: "#24558F",
        },
        {
          type: "hobby",
          color: "#33453B",
        },
        {
          type: "study/work",
          color: "#C36E6E",
        },
        {
          type: "other",
          color: "#FFBE98",
        },
        {
          type: "housework",
          color: "#EED85A",
        },
      ],
      statusLoading: {
        Loading: "LOADING",
        Ready: "READY",
        Empty: "EMPTY",
        Error: "ERROR",
      },
    };
  },
  getters: {
    getTypeColors(state) {
      return state.todoColorInfo;
    },
    getStatusLoading(state) {
      return state.statusLoading;
    },
  },
};
