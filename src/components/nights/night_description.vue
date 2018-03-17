<template>
<message-board @next='next'>
  <div slot='title'>Night Description</div>
  <div slot='content'>content</div>

  <div slot='next_button'>
    <button @click="next">GAME START</button>
  </div>
</message-board>
</template>

<script>
import MessageBoard from '@/components/common/message_board'

export default {
  name: 'NightDescription',
  components: {
    'message-board': MessageBoard,
  },
  methods: {
    next() {
      this.$router.push({ name: 'NightEnter'});
    }
  }
};
</script>

<style>
</style>
