import Vue from 'vue';
import Vuex from 'vuex';
import Player from './class/player';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    players: [],
    roles: {
      role_names: ['市民', '人狼', '騎士', '占い師', '霊媒師'],
      role_counts: [0, 0, 0, 0, 0],
      alive_counts: [0, 0, 0, 0, 0],
      role_searve_array: [0, 0, 0, 0, 0],
    },
    rules: {
      kill_of_1st_night: false,
      fortune_of_1st_night: false,
      bgm: false,
      cant_save_continue: false,
      hide_votes_count: false,
    },
    day: 0,
  },

  getters: {},

  mutations: {
    add_user(state, payload) {
      state.players.push(new Player(payload.name));
    }
  },

  actions: {},
});

export default store;
