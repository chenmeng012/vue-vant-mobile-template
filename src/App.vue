<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
body, html{
  height: 100%;
  width:100%;
}
#app {
  font-family: PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 30px;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
