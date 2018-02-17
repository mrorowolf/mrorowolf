<template>
  <div class="night_result">
    <div v-if='!killed_result && !doubt_result && !discuss_description'>
      夜のアクションを完了しました。
      ゲームマスターに端末を渡してください。
    </div>

    <!-- 犠牲者発表 -->
    <div v-if='killed_result'>
      <div v-if='state >= 0'>
        恐ろしい夜が明け、朝が来ました。
        昨晩の犠牲者は・・・・
      </div>

      <div v-if="state >= 1">
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
    <div v-if='doubt_result'>
      <div v-if="state >= 0">
        今朝は強く疑われている人物は、
      </div>

      <div v-if="state >= 1">
        <div v-if='doubted_players.length==0'>いませんでした。</div>
        <div v-if='doubted_players.length>0'>
        <span v-for="(p, index) in doubted_players">
          {{p.name}}さん </span>でした。
        </div>
      </div>
    </div>

    <!-- 話し合い説明 -->
    <div v-if='discuss_description'>
      それでは、今から、人狼を見つけるために話し合いを行なってください。
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
      'killed_result': false,
      'doubt_result': false,
      'discuss_description': false,
    }
  },
  computed: {
    killed_players() {
     return this.$store.getters.killed_players;
    },
    doubted_players() {
      return this.$store.getters.doubted_players;
    }
  },
  mounted: function() {
    this.$store.commit('kill_players', {
      'killed_players': this.killed_players,
    });
  },
  methods: {
    next() {
      if(!this.killed_result && !this.doubt_result) {
        this.killed_result = true;
      }

      this.state += 1;
      if(!this.doubt_result && this.state > 1) {
        this.killed_result = false;
        this.doubt_result = true;
        this.state = 0;
      }else if(this.doubt_result && this.state > 1) {
        this.doubt_result = false;
        this.discuss_description = true;
        this.state = 0;
      }else if(this.discuss_description){
        this.$store.commit('reset_night');
        this.$router.push({ name: 'Discuss'});
      }
    }
  }
};
</script>

<style>
</style>
