<template>
  <div class="player_confirm">
    <div class="title">
      THE {{ day+1 }}ST NIGHT
    </div>

    <div class="name">
      {{ player.name }}
    </div>

    <button v-if='!player.alive' @click="skip">SKIP</button>
    <button @click="confirm">ENTER</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'PlayerConfirm',
  computed: {
    ...mapState(['day']),
    player() {
      return this.$store.getters.night_player;
    }
  },
  methods: {
    confirm() {
      if(window.confirm(this.player.name + 'さんですか？')){
        if(this.player.alive){
          this.$router.push({ name: 'NightAction'});
        }else{
          this.$store.commit('inc_night_player_index');
          this.$router.push({ name: 'PlayerConfirm'});
        }
      }
    },
    skip() {
      if(window.confirm('スキップしますか？')){
        this.$store.commit('inc_night_player_index');
        this.$router.push({ name: 'PlayerConfirm'});
      }
    }
  }
};
</script>

<style>
</style>
