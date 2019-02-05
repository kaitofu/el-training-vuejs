import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: 'hello vuex',
    loggedIn: false,
    auth_token: '',
    user_id: ''
  },

  getters: {
    loggedIn(state) {
      return state.loggedIn
    },
    auth_token(state) {
      return state.auth_token
    },
    current_user_id(state) {
      return state.user_id
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
    },
    SetUserId(state, userId){
      state.user_id = userId
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
    },
    SetLoginUserId({commit}, payload){
      commit('SetUserId', payload)
    }
  }
});

export default store