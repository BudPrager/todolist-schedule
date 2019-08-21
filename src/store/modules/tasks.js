import todoist from '../../api/todoist';

// initial state
const state = {
  items: [],
};

// getters
const getters = {};

const actions = {
  getAllItems({ commit }) {
    todoist.getItems((items) => {
      commit('setItems', items);
    });
  },
};

// mutations
const mutations = {
  setItems(items) {
    state.items = items;
  },
};

// export
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
