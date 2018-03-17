<template>
<div class='message_board'>
  <div class='title'>
    <slot name='title'>
      Default Title
    </slot>
  </div>

  <div class='content'>
    <slot name='content'>
      Default Content
    </slot>
  </div>

  <div class='next_button'>
    <slot name='next_button'>
      <button class='board_next_button' @click='$emit("next")'>
        Next
      </button>
    </slot>
  </div>
</div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.message_board {
  width: 100%;
  min-height: 100vh;
  background-color: #111;
  color: #fff;

  .title {
    width: 100%;
    padding-top: 5%;
    text-align: center;
    font-size: 2rem;
  }

  .content {
    width: 100%;
    padding-top: 5%;
    font-size: 1rem;
  }

  .next_button {
    width: 100%;
    padding-top: 5%;
  }
}
</style>