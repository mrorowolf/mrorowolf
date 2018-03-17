<template>
  <div class="rule_setting">
    <div class='title'>rule setting</div>

    <div class='role_list'>
      <div v-for="(name, index) in roles.role_names" class='role_item'>
        <img class='role_img' src='/static/img/people.png'/>
        <div class='role_name'>{{ name }}</div>
        <div class='role_count'>{{ roles.role_counts[index] }}</div>
        <button class='role_count_button' v-if="index != 0" @click="dec_role_counts(index)">-</button>
        <button class='role_count_button' v-if="index != 0" @click="inc_role_counts(index)">+</button>
      </div>
    </div>

    <div class='rule_setting'>
      <div class='rule_item'>
        第一夜の殺害
        <button v-if='rules.kill_of_1st_night' @click="toggle_kill_of_1st_night">あり</button>
        <button v-if='!rules.kill_of_1st_night' @click="toggle_kill_of_1st_night">なし</button>
      </div>

      <div class='rule_item'>
        第一夜の占い
        <button v-if='rules.fortune_of_1st_night' @click="toggle_fortune_of_1st_night">あり</button>
        <button v-if='!rules.fortune_of_1st_night' @click="toggle_fortune_of_1st_night">なし</button>
      </div>

      <div class='rule_item'>
        連続ガード
        <button v-if='rules.cant_save_continue' @click="toggle_cant_save_continue">なし</button>
        <button v-if='!rules.cant_save_continue' @click="toggle_cant_save_continue">あり</button>
      </div>

      <div class='rule_item'>
        投票数を隠す
        <button v-if='rules.hide_votes_count' @click="toggle_hide_votes_count">隠す</button>
        <button v-if='!rules.hide_votes_count' @click="toggle_hide_votes_count">隠さない</button>
      </div>
    </div>

    <div class='next_button_area'>
      <button class='next_button' @click="next">決定</button>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'RuleSetting',
  computed: mapState(['players', 'roles', 'rules']),
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
    },
    next() {
      this.$router.push({ name: 'RuleConfirm'});
    }
  }
};
</script>

<style lang='scss' scoped>
.rule_setting {
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

  .role_list {
    display: flex;
    flex-direction: column;
    width: 100%;

    .role_item {
      display: flex;
      width: 100%;

      .role_img {
        width: 50%;
        height: 100px;
        margin: 2%;
        object-fit: contain;
      }

      .role_name, .role_count {
        margin-left: 1%;
        line-height: 100px;
      }
      .role_count_button {
        height: 32px;
        margin-top: 32px;
        margin-left: 1%;
        font-size: 1rem;
      }
    }
  }

  .rule_setting {
    width: 100%;
    .rule_item {
      width: 100%;
    }
  }

  .next_button_area {
    width: 100%;
    padding: 5% 20%;
    .next_button {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
