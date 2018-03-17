<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
@import url('https://rsms.me/inter/inter-ui.css');
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  font-family: "YuMincho";
}
#app {
  width: 100vw;
  height: 100vh;
}
button {
  color: #fff;
  background-color: #A52175;
  border:  none;
  border-radius: 4px;
}
</style>
