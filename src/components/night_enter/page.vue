<template>
  <div class="night_enter">
    <div class="title">
      THE {{ day+1 }}ST NIGHT
    </div>

    <div class="message" v-if="day == 0">
      みなさんおそろしい夜がやってきました。
      {{ first_player.name }}さんから順番に、夜のアクションを行なってください。
    </div>

    <router-link :to="{ name: 'PlayerConfirm'}">OK</router-link>
  </div>
</template>

<script>
export default {
  name: 'NightEnter',
  computed: {
    day() {
      return this.$store.state.day;
    },
    first_player() {
      return this.$store.getters.first_player;
    }
  }
};
</script>

<style>
</style>
