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
    game: 0,
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
    alive_wolves_count(state) {
      let count = 0;
      for(let p of state.players) {
        if(p.alive && p.role == 1) {
          count++;
        }
      }
      return count;
    },
    alive_citizen_count(state) {
      let count = 0;
      for(let p of state.players) {
        if(p.alive && p.role != 1) {
          count++;
        }
      }
      return count;
    },
    game_finished(state, getters) {
      const alive_citizen_count = getters.alive_citizen_count;
      const alive_wolves_count = getters.alive_wolves_count;
      
      if(alive_wolves_count == 0) {
        // 市民勝利
        return 0;
      }else if(alive_wolves_count >= alive_citizen_count) {
        // 人狼勝利
        return 1;
      }else{
        // ゲーム継続
        return -1;
      }
    },
  },

  mutations: {
    // プレイヤー設定
    add_player(state, payload) {
      state.players.push(new Player(payload.name));
    },
    delete_player(state, payload) {
      state.players.splice(payload.index, 1);
    },
    // プレイヤーID振り分け
    set_player_id(state, payload) {
      for(let i=0; i < state.players.length; i++) {
        state.players[i].id = i;
      }
    },
    // 役割の初期値設定
    set_init_role_counts(state, payload) {
      state.roles.role_counts.splice(0, state.roles.role_counts.length, state.players.length-2, 1, 1, 0, 0);
    },
    // 役割の数を減らす
    dec_role_counts(state, payload) {
      state.roles.role_counts.splice(payload.index, 1, state.roles.role_counts[payload.index]-1);
      // 市民以外の役職を減らしたら市民を増やす
      if(payload.index != 0) {
        state.roles.role_counts.splice(0, 1, state.roles.role_counts[0]+1);
      }
    },
    // 役割の数を増やす
    inc_role_counts(state, payload) {
      state.roles.role_counts.splice(payload.index, 1, state.roles.role_counts[payload.index]+1);
      // 市民以外の役職を増やしたら市民を減らす
      if(payload.index != 0) {
        state.roles.role_counts.splice(0, 1, state.roles.role_counts[0]-1);
      }
    },
    // 役割をプレイヤーに振り分ける
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
      // ランダムに並べた役職をプレイヤーに振り分ける
      for(let i in state.roles.role_searve_array) {
        state.players[i].role = state.roles.role_searve_array[i];
        if(state.roles.role_searve_array[i] == 1) {
          state.players[i].telled_name = '人狼';
          state.players[i].team = 1;
        }
      }
    },
    // ルール設定
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
    // 投票する
    vote(state, payload) {
      payload.alive_players[payload.id].votes += 1;
    },
    // 投票で処刑されたプレイヤーのaliveを変更
    judgement(state, payload) {
      state.players[payload.id].alive = false;
    },
    // 投票結果をリセット
    reset_votes(state, payload) {
      for(let p of state.players) {
        p.votes = 0;
      }
    },
    // 夜の順番を次のプレイヤーに変更する
    inc_night_player_index(state, payload) {
      state.night_player_index += 1;
    },
    // 疑うポイントを増やす
    inc_doubt(state, payload) {
      state.players[payload.id].doubt += 1;
    },
    // 殺すポイントを増やす
    inc_kill(state, payload) {
      state.players[payload.id].kill += payload.point;
    },
    // 守るフラグをtrueにする
    save(state, payload) {
      state.players[payload.id].save = true;
    },
    // 占いフラグをtrueにする
    fortune(state, payload) {
      state.players[payload.id].fortune = true;
    },
    // 殺害されたプレイヤーのaliveを変更
    kill_players(state, payload) {
      for(let p of payload.killed_players) {
        p.alive = false;
      }
    },
    // 日を増やす
    inc_day(state, payload) {
      state.day += 1;
    },
    // 夜のアクションの結果をリセット
    reset_night(state, payload) {
      state.night_player_index = 0;
      for(let p of state.players) {
        if(p.save) {
          p.save_last_night = true;
        }else{
          p.save_last_night = false;
        }
        p.kill = 0;
        p.doubt = 0;
        p.save = false;
      }
    },
    // ゲームで変更した状態を初期状態に戻す
    reset_game_state(state) {
      for(let p of state.players) {
        p.team = 0;
        p.telled_name = '市民（人狼以外）';
        p.role = 0;
        p.alive = true;
        p.votes = 0;
        p.skip = false;
        p.kill = 0;
        p.doubt = 0;
        p.fortune = false;
        p.save = false;
        p.save_last_night = false;
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
