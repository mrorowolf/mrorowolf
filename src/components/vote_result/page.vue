<template>
  <div class="vote_result">
    <div class="message">
      JUDGEMENT
    </div>

    <!-- もっとも投票数の多い人物が一人のとき -->
    <div v-if="!judged && most_voted_players.length == 1">
      <div class="message">
        投票の結果本日処刑されるのは{{ most_voted_players[0].name }}さんです。
      </div>
      <button @click="judgement">JUDGEMENT</button>
    </div>

    <!-- もっとも投票数の多い人物が複数のとき -->
    <!-- 再投票する -->

    <!-- 処刑者が決まったとき -->
    <div v-if="judged">
      <div class="message">
        {{ most_voted_players[0].name }}さんは処刑されました、以後幽霊となり話してはいけません。
      </div>
      <button @click="next">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VoteResult',
  data: function() {
    return {
      "judged": false,
      "finished": false,
    }
  },
  computed: {
    most_voted_players() {
      return this.$store.getters.most_voted_players;
    }
  },
  methods: {
    judgement() {
      this.$store.commit("judgement", {"id": this.most_voted_players[0].id});
      this.finished = this.$store.getters.game_finished;
      this.judged = !this.judged;
    },
    next() {
      this.$store.commit("reset_votes");

      if(this.finished == -1) {
        this.$store.commit('inc_day');
        this.$router.push({ name: 'NightEnter'});
      }else{
        this.$router.push({ name: 'GameResult'});
      }
    }
  }
};
</script>

<style>
</style>
