import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  message: 'hello vuex',
  isAuth: false
};

const mutations = {

};

const actions = {
};

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
});