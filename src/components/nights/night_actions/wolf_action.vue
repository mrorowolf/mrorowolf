<template>
  <div class="action">
    <div class="player_list">
      <div class="player" v-for="(p, index) in players" :key="index">
        <div class="name">{{ p.name }}さん</div>
        <button v-if="p.alive && p.id != selected_player && index != night_player_index" @click="select(index)">殺害する</button>

        <button v-if="p.id == selected_player" @click="action(index, p.name, 1)">なんとなく</button>
        <button v-if="p.id == selected_player" @click="action(index, p.name, 2)">あえて殺そう</button>
        <button v-if="p.id == selected_player" @click="action(index, p.name, 3)">殺さないと危険</button>

        <div class="player_status">
          <div class="dead" v-if="!p.alive">死亡</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'WolfAction',
  data: function() {
    return {
      "selected_player": undefined,
    }
  },
  computed: {
    ...mapState(['night_player_index','players']),
    player() {
      return this.$store.getters.night_player;
    },
  },
  methods: {
    select(id) {
      this.selected_player = id;
    },
    action(id, name, point) {
      if(window.confirm(name + 'さんを殺害しますか？')){
        this.$store.commit("inc_kill", {"id": id, "point": point});

        if(this.night_player_index < this.players.length-1) {
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
