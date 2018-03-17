<template>
  <div class="rule_confirm">
    <div class='title'>rule confirm</div>

    <div class="roles">
      <div class="role" v-for="(r, index) in roles.role_names" :key="index">
        <div class="role_name">{{ r }}</div>
        <div class="role_name">{{ roles.role_counts[index] }}</div>
      </div>
    </div>

    <div class="rules">
      <div class="rule">
        第一夜の殺害あり：
        <span v-if="rules.kill_of_1st_night">あり</span>
        <span v-if="!rules.kill_of_1st_night">なし</span>
      </div>

      <div class="rule">
        第一夜の占いあり：
        <span v-if="rules.fortune_of_1st_night">あり</span>
        <span v-if="!rules.fortune_of_1st_night">なし</span>
      </div>

      <div class="rule">
        連続ガード：
        <span v-if="rules.cant_save_continue">あり</span>
        <span v-if="!rules.cant_save_continue">なし</span>
      </div>

      <div class="rule">
        投票数を隠す：
        <span v-if="rules.hide_votes_count">あり</span>
        <span v-if="!rules.hide_votes_count">なし</span>
      </div>
    </div>

    <button @click="next">OK</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'RuleConfirm',
  computed: mapState(['roles', 'rules']),
  methods: {
    next() {
      this.$store.commit("serve_roles_to_player");
      this.$router.push({ name: 'GameDescription'});
    }
  }
};
</script>

<style lang='scss' scoped>
.rule_confirm {
  width: 100%;
  min-height: 100vh;
  background-color: #111;
  color: #fff;

  .title {
    width: 100%;
    padding-top: 5%;
    text-align: center;
    font-size: 2rem;
  }
}
</style>
