<template>
  <div class="night_enter">
    <div class="title">
      THE {{ day+1 }} NIGHT
    </div>

    <div class='message'>
      <div v-if="day == 0">
        みなさんおそろしい夜がやってきました。
      </div>

      <div v-if="day > 0">
        容疑者を処分したにもかかわらず、再びおそろしい夜がやってきました。
      </div>

      <div>
        {{ players[0].name }}さんから順番に、夜のアクションを行なってください。
      </div>
    </div>

    <button @click="next">OK</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'NightEnter',
  computed: {
    ...mapState(['day', 'players']),
  },
  methods: {
    next() {
      this.$router.push({ name: 'PlayerConfirm'});
    }
  }
};
</script>

<style>
</style>
