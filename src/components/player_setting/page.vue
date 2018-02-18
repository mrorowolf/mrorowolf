<template>
  <div class="player_setting">
    player setting
    <button @click="add_player">追加</button>

    <div class="player_list">
      <div v-for="(p, index) in players" class="player_item">
        {{ p.name }}
        <button @click="delete_player(index)">削除</button>
      </div>
    </div>

    <button @click="go_rule_setting">ルール設定へ</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'PlayerSetting',
  computed: mapState(['players', 'game']),
  methods: {
    add_player() {
      const name = window.prompt('ユーザー名を入力してください', '');
      this.$store.commit('add_player', {
        'name': name,
      });
    },
    delete_player(index) {
      this.$store.commit('delete_player', {
        'index': index,
      });
    },
    go_rule_setting() {
      if(this.players.length > 2) {
        this.$store.commit("set_init_role_counts");
        this.$store.commit("set_player_id");
        this.$router.push({ name: 'RuleSetting'});
      }else{
        alert("3人以上登録してください。");
      }
    }
  },
};
</script>

<style>

</style>
