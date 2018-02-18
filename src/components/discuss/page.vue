<template>
  <div class="discuss">
    <div class='timer'>
      {{ ('00' + (Math.floor(timer/60))).slice(-2) }}:{{ ('00'+(timer%60)).slice(-2) }}
    </div>

    <div class='time_set_button'>
      <button @click="inc_time(60)">+</button>
      <button @click="dec_time(60)">-</button>
    </div>

    <button @click="next">議論終了</button>
  </div>
</template>

<script>
export default {
  name: 'Discuss',
  data: function() {
    return {
      "timer": 180,
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
    next() {
      this.$router.push({ name: 'DiscussFinish'});
    }
  }
};
</script>

<style>
</style>
