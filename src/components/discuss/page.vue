<template>
  <div class="discuss">
    {{ ('00' + (Math.floor(timer/60))).slice(-2) }}:{{ ('00'+(timer%60)).slice(-2) }}
    <button @click="inc_time(60)">+</button>
    <button @click="dec_time(60)">-</button>
    <button @click="finish">discuss finish</button>
    <router-link :to="{ name: 'DiscussFinish'}">議論終了</router-link>
  </div>
</template>

<script>
export default {
  name: 'Discuss',
  data: function() {
    return {
      "timer": 0,
    }
  },
  created: function() {
    const self = this;
    let time_updator = setInterval(function(){
      self.dec_time(1);
    }, 1000);
  },
  methods: {
    inc_time(t) {
      this.timer += t;
    },
    dec_time(t) {
      if(this.timer-t > 0) {
        this.timer -= t;
      }
    },
    finish() {
      this.timer = 0;
    }
  }
};
</script>

<style>
</style>
