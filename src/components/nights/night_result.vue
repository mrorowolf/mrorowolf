<template>
  <div class="night_result">
    <div class='message'>
      <div v-if='state == 0'>
        夜のアクションを完了しました。
        ゲームマスターに端末を渡してください。
      </div>

      <!-- 犠牲者発表 -->
      <div v-if='state >= 1 && state < 3'>
        <div v-if='state >= 1'>
          恐ろしい夜が明け、朝が来ました。
          昨晩の犠牲者は・・・・
        </div>

        <div v-if="state >= 2">
          <div v-if='killed_players.length==0'>いませんでした。</div>

          <div v-if='killed_players.length>0'>
            <div>
              <span v-for="(p, index) in killed_players">
                {{p.name}}さん 
              </span>です。
            </div>

            <div>
              <span v-for="(p, index) in killed_players">
                {{p.name}}さん 
              </span>は、幽霊となり、ゲーム終了まで話してはいけません。
            </div>
          </div>
        </div>
      </div>

      <!-- 疑われている人発表 -->
      <div v-if='state >= 3 && state < 5'>
        <div v-if="state >= 3">
          今朝は強く疑われている人物は、
        </div>

        <div v-if="state >= 4">
          <div v-if='doubted_players.length==0'>いませんでした。</div>
          <div v-if='doubted_players.length>0'>
          <span v-for="(p, index) in doubted_players">
            {{p.name}}さん </span>でした。
          </div>
        </div>
      </div>

      <!-- 話し合い説明 -->
      <div v-if='state >= 5'>
        それでは、今から、人狼を見つけるために話し合いを行なってください。
      </div>
    </div>

    <button @click="next">OK</button>
  </div>
</template>

<script>
export default {
  name: 'NightResult',
  data: function() {
    return {
      'state': 0,
    }
  },
  computed: {
    killed_players() {
     return this.$store.getters.killed_players;
    },
    doubted_players() {
      return this.$store.getters.doubted_players;
    },
    game_result() {
      return this.$store.getters.game_finished;
    }
  },
  mounted: function() {
    this.$store.commit('kill_players', {
      'killed_players': this.killed_players,
    });
  },
  methods: {
    next() {
      this.state += 1;
      if(this.state == 3){
        if(this.game_result > -1){
          // ゲーム終了
          this.$store.commit('reset_night');
          this.$router.push({ name: 'GameResult'});
        }
      }else if(this.state > 5) {
        this.$store.commit('reset_night');
        this.$router.push({ name: 'Discuss'});
      }
    }
  }
};
</script>

<style>
</style>
