<template>
  <div class="night_description">
    <div class="title">ABOUT NIGHT</div>
    <div class="message">夜について</div>

    <router-link :to="{ name: 'NightEnter'}">GAME START</router-link>
  </div>
</template>

<script>
export default {
  name: 'NightDescription',
};
</script>

<style>
</style>
