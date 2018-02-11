<template>
  <div class="vote_result">
    <div class="message">
      JUDGEMENT
    </div>

    <div v-if="!judged">
      <div class="message">
        投票の結果本日処刑されるのは{{ most_voted_player.name }}さんです。
      </div>
      <button @click="judgement">JUDGEMENT</button>
    </div>

    <div v-if="judged">
      <div class="message">
        {{ most_voted_player.name }}さんは処刑されました、以後幽霊となり話してはいけません。
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
    most_voted_player() {
      return this.$store.getters.most_voted_player;
    }
  },
  methods: {
    judgement() {
      this.$store.commit("judgement", {"id": this.most_voted_player.id});
      this.finished = this.$store.getters.game_finished;
      this.judged = !this.judged;
    },
    next() {
      this.$store.commit("reset_votes");

      if(this.finished) {
        this.$router.push({ name: 'GameResult'});
      }
      this.$router.push({ name: 'VotePlayer'});
    }
  }
};
</script>

<style>
</style>
