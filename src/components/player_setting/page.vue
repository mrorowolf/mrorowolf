<template>
  <div class="player_setting">
    player setting
    <div class="player_add_button" @click="add_player">追加</div>
  </div>
</template>

<script>
export default {
  name: 'PlayerSetting',
  methods: {
    add_player() {
      const name = window.prompt('ユーザー名を入力してください', '');
      this.$store.commit('add_player', {
        'name': name,
      });
    },
  },
};
</script>

<style>
</style>
