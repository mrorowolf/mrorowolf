<template>
<message-board class='message_board'>
  <div slot='title'>ゲームの設定が完了しました。</div>

  <div slot='content'>
    <div class="message_section">
      <div class="section_title">
        【役割カードの確認について】
      </div>
      <div class="section_content">
        役割確認
      </div>
    </div>

    <div class="message_section">
      <div class="section_title">
        【ゲームの勝敗について】
      </div>
      <div class="section_content">
        勝敗について
      </div>
    </div>

    <div class="message_section">
      <div class="section_title">
        【ゲームの流れについて】
      </div>
      <div class="section_content">
        流れ
      </div>
    </div>
  </div>

  <div slot='next_button'>
    <button @click="next">OK</button>
  </div>
</message-board>
</template>

<script>
export default {
  name: 'GameDescription',
  methods: {
    next() {
      this.$router.push({ name: 'NightDescription'});
    }
  }
};
</script>

<style>
</style>
