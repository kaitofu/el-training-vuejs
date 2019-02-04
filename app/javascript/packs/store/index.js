import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: 'hello vuex',
    loggedIn: false
  },

  getters: {
    loggedIn(state) {
      return state.loggedIn
    }
  },

  mutations: {
    LogIn(state){
      state.loggedIn = true
    },
    LogOut(state){
      state.loggedIn = false
    }
  },

  actions: {
    SetLogIn({commit}){
      commit('LogIn')
    },
    SetLogOut({commit}){
      commit('LogOut')
    }
  }
});

export default store