<template>
  <div class="main">
    <div class="main-toolbar">
      <span>{{title}}</span>
    </div>
    <div class="main-content">
      <slot name="content"></slot>
    </div>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/foreign-capital">三资</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  name: 'main-index',
  props: {
    title: {
      type: String,
      default: '首页'
    }
  }
}

</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  height: calc(100% - 49px);
  display: flex;
  flex-direction: column;
  .main-toolbar{
    height: 47px;
    line-height: 47px;
    font-size: 18px;
    background-color: #fff;
    padding-left: 20px;
    font-weight: bold;
    color: #040000;
    box-shadow: 0 0 10px 1px rgba(112, 100, 102, 0.13);
  }
  .main-content{
    flex-grow: 1;
    background-color: #F6F5FA;
    overflow: auto;
  }
  .van-tabbar{
    height: 49px;
    box-shadow: 0 2px 9px 1px rgba(217, 220, 216, 0.26);
  }
}
</style>
