<template>
  <div class="vote_description">
    <div class="message">
      投票時の注意です。
      投票の際、発言ができるのは、質問しているプレイヤーと質問されたプレイヤーの2名のみです。
      それ以外の人は、自分の順番が回ってくるまで発言してはいけません。
    </div>
    <router-link :to="{ name: 'VotePlayer'}">OK</router-link>
  </div>
</template>

<script>
export default {
  name: 'VoteDescription',
};
</script>

<style>
</style>
