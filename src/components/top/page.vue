<template>
  <div class="top">
    <div class='title'>人狼ゲーム</div>
    <button class='start_button' @click="next">始める</button>
  </div>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    next() {
      this.$router.push({ name: 'PlayerSetting'});
    }
  }
};
</script>

<style lang='scss'>
.top {
  width: 100vw;
  height: 100vh;
  background-color: #111;
  color: #fff;

  .title {
    width: 100%;
    padding-top: 5%;
    text-align: center;
    font-size: 2rem;
  }

  .start_button {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateY(-50%) translateX(-50%);
    transform: translateY(-50%) translateX(-50%);

    padding: 0.5rem 3rem;
  }
}
</style>
