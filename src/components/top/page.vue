<template>
  <div class="top">
    <button @click="next">始める</button>
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

<style>
</style>
