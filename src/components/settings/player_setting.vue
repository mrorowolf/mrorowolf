<template>
  <div class="player_setting">
    <div class='title'>player setting</div>

    <div class='setting_global'>
      <button class='setting_global_button' @click="add_player">追加</button>
      <button class='setting_global_button' @click="go_rule_setting">ルール設定へ</button>
    </div>

    <div class="player_list">
      <div v-for="(p, index) in players" class="player_item">
        <img class='player_img' src='/static/img/people.png'/>
        <div class='player_name'>
          {{ p.name }}
          <button class='delete_button' @click="delete_player(index)">
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
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

<style lang='scss' scoped>
.player_setting {
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

  .setting_global {
    width: 100%;
    padding: 5% 10%;
    .setting_global_button {
      width: 40%;
      margin: 2%;
      font-size: 1rem;
    }
  }

  .player_list {
    display: flex;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;

    width: 100%;
    padding: 5%;

    .player_item {
      display: flex;
      flex-direction: column;

      width: 25%;
      padding: 1%;

      .player_img {
        width: 100%;
        object-fit: contain;
        background-color: #fff;
      }

      .player_name {
        .delete_button {
          width: 20px;
          height: 20px;
          padding: 1px;
          font-size: 0.5rem;
        }
      }
    }
  }
}
</style>
