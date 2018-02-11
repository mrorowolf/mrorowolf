<template>
  <div class="night_action">
    night ACTION
    <div class="role">{{ roles.role_names[player.role] }}</div>
    <component :is="action_list[player.role]"></component>
  </div>
</template>

<script>
import CitizenAction from './citizen_action.vue'
import WolfAction from './wolf_action.vue'
import KnightAction from './knight_action.vue'
import TellerAction from './teller_action.vue'
import SpiritAction from './spirit_action.vue'

export default {
  name: 'NightAction',
  components: {
    "citizen-action": CitizenAction,
    "wolf-action": WolfAction,
  },
  data: function() {
    return {
      "action_list": ["citizen-action", "wolf-action", "knight-action",
                      "teller-action", "spirit-action"],
    }
  },
  computed: {
    day() {
      return this.$store.state.day;
    },
    player() {
      return this.$store.getters.night_player;
    },
    roles() {
      return this.$store.state.roles;
    }
  },
};
</script>

<style>
</style>
