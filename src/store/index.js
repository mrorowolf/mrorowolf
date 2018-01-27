import Vue from 'vue';
import Vuex from 'vuex';
import Player from './class/player';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // players: [],
    players: [new Player("a"),new Player("b"),new Player("c"),new Player("d"),new Player("e"),new Player("f")],
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
    add_player(state, payload) {
      state.players.push(new Player(payload.name));
    },
    delete_player(state, payload) {
      state.players.splice(payload.index, 1);
    },
    set_player_id(state, payload) {
      for(let i=0; i < state.players.length; i++) {
        state.players[i].id = i;
      }
    },
    set_init_role_counts(state, payload) {
      state.roles.role_counts.splice(0, 3, state.players.length-2, 1, 1);
    },
    dec_role_counts(state, payload) {
      state.roles.role_counts.splice(payload.index, 1, state.roles.role_counts[payload.index]-1);
      // 市民以外の役職を減らしたら市民を増やす
      if(payload.index != 0) {
        state.roles.role_counts.splice(0, 1, state.roles.role_counts[0]+1);
      }
    },
    inc_role_counts(state, payload) {
      state.roles.role_counts.splice(payload.index, 1, state.roles.role_counts[payload.index]+1);
      // 市民以外の役職を増やしたら市民を減らす
      if(payload.index != 0) {
        state.roles.role_counts.splice(0, 1, state.roles.role_counts[0]-1);
      }
    }
  },

  actions: {},
});

export default store;
