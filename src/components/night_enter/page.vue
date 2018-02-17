<template>
  <div class="night_enter">
    <div class="title">
      THE {{ day+1 }}ST NIGHT
    </div>

    <div class="message" v-if="day == 0">
      みなさんおそろしい夜がやってきました。
    </div>

    <div class="message" v-if="day > 0">
      容疑者を処分したにもかかわらず、再びおそろしい夜がやってきました。
    </div>

    <div>
      {{ players[0].name }}さんから順番に、夜のアクションを行なってください。
    </div>

    <router-link :to="{ name: 'PlayerConfirm'}">OK</router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'NightEnter',
  computed: {
    ...mapState(['day', 'players']),
  },
};
</script>

<style>
</style>
