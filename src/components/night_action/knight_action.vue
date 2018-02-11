<template>
  <div class="action">
    <div class="player_list">
      <div class="player" v-for="(p, index) in players" :key="index">
        <div class="name">{{ p.name }}さん</div>
        <button v-if="p.alive && index != night_player_index" @click="action(index, p.name)">人狼だと疑う</button>
        <div class="dead" v-if="!p.alive">死亡</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitizenAction',
  computed: {
    night_player_index() {
      return this.$store.state.night_player_index;
    },
    player() {
      return this.$store.getters.night_player;
    },
    players() {
      return this.$store.state.players;
    },
    alive_players() {
      return this.$store.getters.alive_players;
    }
  },
  methods: {
    action(id, name) {
      if(window.confirm(name + 'さんを人狼だと疑いますか？')){
        this.$store.commit("inc_dought", {"id": id});

        if(this.night_player_index < this.alive_players.length-1) {
          this.$store.commit('inc_night_player_index');
          this.$router.push({ name: 'PlayerConfirm'});
        }else{
          this.$router.push({ name: 'NightResult'});
        }
      }
    }
  }
};
</script>

<style>
</style>
