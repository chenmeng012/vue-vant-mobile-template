<template>
  <MainIndex>
    <div slot="content">这是首页
      <p>devicePixelRatio: {{devicePixelRatio}}</p>
      <p>htmlFontSize:{{fontSize}}</p>
      <p>clientWidth:{{clientWidth}}</p>
    </div>
  </MainIndex>
</template>

<script>
import MainIndex from '../components/main'
export default {
  name: 'home',
  components: { MainIndex },
  data () {
    return {
      devicePixelRatio: window.devicePixelRatio,
      fontSize: document.documentElement.style.fontSize,
      clientWidth: document.documentElement.clientWidth
    }
  }
}
</script>

<style scoped>

</style>
