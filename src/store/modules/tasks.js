import todoist from '../../api/todoist';

// export
export default {
  namespaced: true,
  // initial state
  state: {
    items: [],
  },
  // getters
  getters: {},
  // actions
  actions: {
    loadAllItems({ commit }) {
      todoist.getItems((data) => {
        console.log(data);
        commit('setItems', data);
      });
    },
  },
  // mutations
  mutations: {
    setItems(state, data) {
      console.log(data);
      state.items = data;
    },
  },
};
