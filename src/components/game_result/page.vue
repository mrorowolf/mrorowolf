<template>
  <div class="game_result">
    <div class='message'>
      <div>ゲーム結果</div>
      <div>
        <div v-if='game_finished == 0'>市民チームの勝利です。</div>
        <div v-if='game_finished == 1'>人狼チームの勝利です。</div>
        <div>
          勝利プレイヤーは
          <div v-for="(p, index) in players" :key="index" v-if='p.team == game_finished'>
            <span>{{ p.name }}さん</span>
          </div>
        </div>
      </div>
    </div>

    <button @click="top">Back to top</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'GameResult',
  computed: {
    ...mapState(['players']),
    game_finished() {
      return this.$store.getters.game_finished;
    },
  },
  methods: {
    top() {
      this.$store.commit('reset_game_state');
      this.$router.push({ name: 'PlayerSetting'});
    }
  }
};
</script>

<style>
</style>
