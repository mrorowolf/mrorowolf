<template>
  <div class="night_action">
    NIGHT ACTION
    <div class="role">{{ roles.role_names[player.role] }}</div>
    <component :is="action_list[player.role]"></component>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import CitizenAction from './night_actions/citizen_action.vue'
import WolfAction from './night_actions/wolf_action.vue'
import KnightAction from './night_actions/knight_action.vue'
import TellerAction from './night_actions/teller_action.vue'
import SpiritAction from './night_actions/spirit_action.vue'

export default {
  name: 'NightAction',
  components: {
    "citizen-action": CitizenAction,
    "wolf-action": WolfAction,
    "knight-action": KnightAction,
    "teller-action": TellerAction,
    "spirit-action": SpiritAction,
  },
  data: function() {
    return {
      "action_list": ["citizen-action", "wolf-action", "knight-action",
                      "teller-action", "spirit-action"],
    }
  },
  computed: {
    ...mapState(['day', 'roles']),
    player() {
      return this.$store.getters.night_player;
    },
  },
};
</script>

<style>
</style>
