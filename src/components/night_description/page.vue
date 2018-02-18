<template>
  <div class="night_description">
    <div class="title">ABOUT NIGHT</div>
    <div class="message">夜について</div>

    <button @click="next">GAME START</button>
  </div>
</template>

<script>
export default {
  name: 'NightDescription',
  methods: {
    next() {
      this.$router.push({ name: 'NightEnter'});
    }
  }
};
</script>

<style>
</style>
