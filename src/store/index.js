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
      role_searve_array: [],
    },
    rules: {
      kill_of_1st_night: false,
      fortune_of_1st_night: false,
      bgm: false,
      cant_save_continue: false,
      hide_votes_count: false,
    },
    day: 0,
    night_player_index: 0,
  },

  getters: {
    alive_players(state) {
      let a = []
      for(let i=0; i<state.players.length; i++) {
        if(state.players[i].alive) {
          a.push(state.players[i])
        }
      }
      return a
    },
    first_player(state, getters) {
      return getters.alive_players[0];
    },
    night_player(state) {
     return state.players[state.night_player_index];
    },
    most_voted_players(state) {
      let most_voted_players = [];
      for(let p of state.players) {
        if(p.votes > 0){
          if(most_voted_players.length == 0) {
            most_voted_players.push(p);
          }else if(most_voted_players[0].votes < p.votes) {
            most_voted_players = [p]
          }
        }
      }
      return most_voted_players
    },
    killed_players(state) {
      let killed_players = [];
      for(let p of state.players) {
        if(!p.save && p.kill > 0){
          if(killed_players.length == 0){
            killed_players.push(p)
          }else if(killed_players[0].kill < p.kill) {
            killed_players = [p];
          }else if(killed_players[0].kill == p.kill) {
            killed_players.push(p);
          }
        }
      }
      return killed_players
    },
    doubted_players(state) {
      let doubted_players = [];
      for(let p of state.players) {
        if(p.doubt > 0){
          if(doubted_players.length == 0){
            doubted_players.push(p);
          }else if(doubted_players[0].doubt < p.doubt) {
            doubted_players = [p];
          }else if(doubted_players[0].doubt == p.doubt) {
            doubted_players.push(p);
          }
        }
      }
      return doubted_players;
    },
    game_finished(state) {
      return false;
    },
  },

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
    },
    serve_roles_to_player(state, payload) {
      state.roles.role_searve_array = []
      for(let i=0; i<state.roles.role_counts.length; i++) {
        for(let j=0; j<state.roles.role_counts[i]; j++) {
          let random = Math.floor(Math.random() * state.roles.role_searve_array.length);
          state.roles.role_searve_array.splice(random, 0, i);
        }
      }
      // ランダムに並び替え
      for(let i = state.roles.role_searve_array.length-1; i>0; i--){
        let r = Math.floor(Math.random() * (i + 1));
        let tmp = state.roles.role_searve_array[i];
        state.roles.role_searve_array[i] = state.roles.role_searve_array[r];
        state.roles.role_searve_array[r] = tmp;
      }

      for(let i=0; i<state.roles.role_searve_array.length; i++) {
        state.players[i].role = state.roles.role_searve_array[i];
      }
    },
    toggle_kill_of_1st_night(state, payload) {
      state.rules.kill_of_1st_night = !state.rules.kill_of_1st_night;
    },
    toggle_fortune_of_1st_night(state, payload) {
      state.rules.fortune_of_1st_night = !state.rules.fortune_of_1st_night;
    },
    toggle_cant_save_continue(state, payload) {
      state.rules.cant_save_continue = !state.rules.cant_save_continue;
    },
    toggle_hide_votes_count(state, payload) {
      state.rules.hide_votes_count = !state.rules.hide_votes_count;
    },
    vote(state, payload) {
      payload.alive_players[payload.id].votes += 1;
    },
    judgement(state, payload) {
      state.players[payload.id].alive = false;
    },
    reset_votes(state, payload) {
      for(let p of state.players) {
        p.votes = 0;
      }
    },
    inc_night_player_index(state, payload) {
      state.night_player_index += 1;
    },
    inc_doubt(state, payload) {
      state.players[payload.id].doubt += 1;
    },
    inc_kill(state, payload) {
      state.players[payload.id].kill += payload.point;
    },
    save(state, payload) {
      state.players[payload.id].save = true;
    },
    fortune(state, payload) {
      state.players[payload.id].fortune = true;
    },
    kill_players(state, payload) {
      for(let p of payload.killed_players) {
        p.alive = false;
      }
    },
    inc_day(state, payload) {
      state.day += 1;
    },
    reset_night(state, payload) {
      state.night_player_index = 0;
      for(let p of state.players) {
        p.kill = 0;
        p.doubt = 0;
      }
    }
  },

  actions: {
    vote(context, payload) {
      let alive_players = context.getters.alive_players;
      context.commit('vote', {
        'id': payload.id,
        'alive_players': alive_players,
      })
    }
  },
});

export default store;
