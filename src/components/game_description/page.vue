<template>
  <div class="game_description">
    <div class="message">
      ゲームの設定が完了しました。
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

    <button @click="next">OK</button>
  </div>
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
