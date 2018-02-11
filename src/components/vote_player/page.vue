<template>
  <div class="vote_player">
    <div class="player_info">
      {{ alive_players[vote_index].name }}さんの投票です。
    </div>

    <div class="player_list">
      <div class="player_status" v-for="(p, index) in alive_players" :key="index">
        <div class="name">{{ p.name }}さん</div>
        <div class="vote_count">VOTE: {{ p.votes }}</div>
        <button v-if="index != vote_index" @click="vote(index, p.name)">投票する</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VotePlayer',
  data: function() {
    return {
      "vote_index": 0,
    }
  },
  computed: {
    alive_players() {
      return this.$store.getters.alive_players;
    }
  },
  methods: {
    vote(id, name) {
      if(window.confirm(name + 'さんに投票しますか？')){
        this.$store.dispatch('vote', {'id': id});

        if(this.vote_index < this.alive_players.length-1) {
          this.vote_index += 1;
        }else{
          this.$router.push({ name: 'VoteResult'});
        }
      }
    }
  }
};
</script>

<style>
</style>
