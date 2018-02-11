<template>
  <div class="discuss_finish">
    <div class="message">
      議論終了です。
    </div>
    <router-link :to="{ name: 'PlayerSetting'}">始める</router-link>
  </div>
</template>

<script>
export default {
  name: 'DiscussFinish',
};
</script>

<style>
</style>
