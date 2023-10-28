export default {
  state() {
    return {
      currentMessage: null,
      queueMessage: [],
    };
  },
  getters: {
    getCurrentMessage(state) {
      return state.currentMessage;
    },
  },
  mutations: {
    setCurrentMessage(state) {
      state.currentMessage = null;
      if (state.queueMessage.length != 0) {
        const nextMessage = state.queueMessage.shift();
        state.currentMessage = nextMessage;
      }
    },
    addMessage(state, message) {
      state.queueMessage.push(message);
    },
  },
};
