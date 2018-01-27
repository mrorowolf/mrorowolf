<template>
  <div class="rule_setting">
    rule setting

    <div v-for="(name, index) in role_names">
      {{ name }}, {{ role_counts[index] }}
      <button v-if="index != 0" @click="dec_role_counts(index)">-</button>
      <button v-if="index != 0" @click="inc_role_counts(index)">+</button>
    </div>
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
    }
  },
  methods: {
    dec_role_counts(index) {
      this.$store.commit("dec_role_counts", {"index": index});
    },
    inc_role_counts(index) {
      this.$store.commit("inc_role_counts", {"index": index});
    }
  }
};
</script>

<style>
</style>
