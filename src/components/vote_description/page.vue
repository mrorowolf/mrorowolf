<template>
  <div class="vote_description">
    <div class="message">
      投票します。
    </div>
    <router-link :to="{ name: 'VotePlayer'}">投票へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: 'VoteDescription',
};
</script>

<style>
</style>
