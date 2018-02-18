<template>
  <div class="action">
    <!-- 占い前 -->
    <div class="player_list" v-if='!telled'>
      <div class="player" v-for="(p, index) in players" :key="index">
        <div class="name">{{ p.name }}さん</div>
        <button v-if="p.alive && index != night_player_index && !p.fortune"
                @click="action(index, p.name)">
          占う
        </button>
        <div class="dead" v-if="p.fortune && !p.alive">
          {{ p.telled_name }}
        </div>
        <div class="dead" v-if="!p.fortune && !p.alive">死亡</div>
      </div>
    </div>

    <!-- 占い後 -->
    <div class="teller_result" v-if='telled'>
      <div>{{ players[telled_id].name }}さんは</div>
      <div>{{ players[telled_id].telled_name }}</div>
      <button @click="next">OK</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'CitizenAction',
  data: function() {
    return {
      'telled': false,
      'telled_id': undefined,
    }
  },
  computed: {
    ...mapState(['night_player_index','players', 'roles']),
    player() {
      return this.$store.getters.night_player;
    },
  },
  methods: {
    action(id, name) {
      if(window.confirm(name + 'さんを占いますか？')){
        this.$store.commit("fortune", {"id": id});
        this.telled_id = id;
        this.telled = true;
      }
    },
    next() {
      if(this.night_player_index < this.players.length-1) {
        this.$store.commit('inc_night_player_index');
        this.$router.push({ name: 'PlayerConfirm'});
      }else{
        this.$router.push({ name: 'NightResult'});
      }
    }
  }
};
</script>

<style>
</style>
