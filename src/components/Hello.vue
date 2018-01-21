<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2><i class="fa fa-free-code-camp" aria-hidden="true"></i></h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
    msg() {
      return this.$store.state.msg;
    },
  },
};
</script>

<style>
</style>
