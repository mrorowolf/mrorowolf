<template>
  <div class="rule_setting">
    rule setting

    <div v-for="(name, index) in role_names">
      {{ name }}, {{ role_counts[index] }}
      <button v-if="index != 0" @click="dec_role_counts(index)">-</button>
      <button v-if="index != 0" @click="inc_role_counts(index)">+</button>
    </div>

    <div>
      <button @click="toggle_kill_of_1st_night">第一夜の殺害あり</button>
      <button @click="toggle_fortune_of_1st_night">第一夜の占いあり</button>
      <button @click="toggle_cant_save_continue">連続ガードなし</button>
      <button @click="toggle_hide_votes_count">投票数を隠す</button>
    </div>

    <router-link :to="{ name: 'RuleConfirm'}">決定</router-link>
  </div>
</template>

<script>
export default {
  name: 'RuleSetting',
  computed: {
    player_counts() {
      return this.$store.state.players.length;
    },
    role_names() {
      return this.$store.state.roles.role_names;
    },
    role_counts() {
      return this.$store.state.roles.role_counts;
    },
    kill_of_1st_night() {
      return this.$store.state.rules.kill_of_1st_night;
    },
    fortune_of_1st_night() {
      return this.$store.state.rules.fortune_of_1st_night;
    },
    cant_save_continue() {
      return this.$store.state.rules.cant_save_continue;
    },
    hide_votes_count() {
      return this.$store.state.rules.hide_votes_count;
    }
  },
  methods: {
    dec_role_counts(index) {
      this.$store.commit("dec_role_counts", {"index": index});
    },
    inc_role_counts(index) {
      this.$store.commit("inc_role_counts", {"index": index});
    },
    toggle_kill_of_1st_night() {
      this.$store.commit("toggle_kill_of_1st_night");
    },
    toggle_fortune_of_1st_night() {
      this.$store.commit("toggle_fortune_of_1st_night");
    },
    toggle_cant_save_continue() {
      this.$store.commit("toggle_cant_save_continue");
    },
    toggle_hide_votes_count() {
      this.$store.commit("toggle_hide_votes_count");
    }
  }
};
</script>

<style>
</style>
