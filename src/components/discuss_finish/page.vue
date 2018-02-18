<template>
  <div class="discuss_finish">
    <div class="message">
      <div v-if='state==0'>
        話し合いは終了です。
        日は暮れて、今日も一人容疑者を処分する時間が訪れました。
      </div>

      <div v-if='state==1'>
        ゲームマスターに名前を呼ばれたプレイヤーは、怪しいと思うプレイヤーの名前を告げて質問してください。
      </div>
    </div>

    <button @click="next">OK</button>
  </div>
</template>

<script>
export default {
  name: 'DiscussFinish',
  data: function() {
    return {
      'state': 0,
    }
  },
  methods: {
    next() {
      this.state += 1;
      if(this.state > 1) {
        this.$router.push({ name: 'VoteDescription'});
      }
    }
  }
};
</script>

<style>
</style>
