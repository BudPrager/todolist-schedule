import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import tasks from './modules/tasks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tasks,
  },
  mutations: {
    mutations,
  },
  actions: {
    actions,
  },
});
