import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: 'hello vuex',
    loggedIn: false,
    auth_token: ''
  },

  getters: {
    loggedIn(state) {
      return state.loggedIn
    },
    auth_token(state) {
      return state.auth_token
    }
  },

  mutations: {
    LogIn(state){
      state.loggedIn = true
    },
    LogOut(state){
      state.loggedIn = false
    },
    SetToken(state, passed_token){
      state.auth_token = passed_token
    }
  },

  actions: {
    SetLogIn({commit}){
      commit('LogIn')
    },
    SetLogOut({commit}){
      commit('LogOut')
    },
    SetAuthToken({commit}, payload){
      commit('SetToken', payload)
    }
  }
});

export default store