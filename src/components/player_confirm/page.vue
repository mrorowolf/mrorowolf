<template>
  <div class="player_confirm">
    <div class="title">
      THE {{ day+1 }}ST NIGHT
    </div>

    <div class="name">
      {{ player.name }}
    </div>

    <button @click="confirm">ENTER</button>
  </div>
</template>

<script>
export default {
  name: 'PlayerConfirm',
  computed: {
    day() {
      return this.$store.state.day;
    },
    player() {
      return this.$store.getters.night_player;
    }
  },
  methods: {
    confirm() {
      if(window.confirm(this.player.name + 'さんですか？')){
        this.$router.push({ name: 'NightAction'});
      }
    }
  }
};
</script>

<style>
</style>
