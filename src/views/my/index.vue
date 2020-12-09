<template>
  <MainIndex title="我的">
    <div slot="content" class="my-box">
      <div class="info" ref="info">
        <div class="head-portrait">
          <img style="height: 100%; width: 100%;" src="../../assets/logo.png"/>
        </div>
        <p class="info-name">陈猛</p>
        <p class="info-iphone">178****3068</p>
        <div class="info-other">
          <div class="px-info"><i class="address"></i><span>新华村</span></div>
          <div class="px-info"><i class="sex"></i><span>男</span></div>
        </div>
      </div>
      <div class="line"></div>
      <div class="other">
        <p>{{infoWidth}}</p>
        <p>{{infoHeight}}</p>
      </div>
    </div>
  </MainIndex>
</template>

<script>
import MainIndex from '../components/main'
export default {
  name: 'my',
  components: { MainIndex },
  data () {
    return {
      infoHeight: 0,
      infoWidth: 0
    }
  },
  mounted () {
    this.infoHeight = window.getComputedStyle(this.$refs.info).height
    this.infoWidth = window.getComputedStyle(this.$refs.info).width
  }
}
</script>

<style lang="scss" scoped>
.my-box{
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .info{
    position: relative;
    width: 345px;
    height: 177px;
    background-color: #fff;
    background-image: url("./img/info-back@2x.png");
    background-size: 100%;
    margin: 17.5px 15px 22.5px;
    box-shadow: 0 0 20px 1px rgba(153, 152, 152, 0.2);
    border-radius: 2px;
    .head-portrait{
      margin: 11.25px auto 0;
      width: 63px;
      height: 63px;
      overflow: hidden;
      background: #F9F9F9;
      border-radius: 50%;
    }
    .info-name{
      padding-top: 12px;
      text-align: center;
      height: 15px;
      font-size: 16px;
      font-weight: 900;
      color: #000000;
      line-height: 15px;
    }
    .info-iphone{
      padding-top: 6px;
      text-align: center;
      height: 12px;
      font-size: 12px;
      font-weight: bold;
      color: #999999;
    }
    .info-other{
      border-bottom: 1px red solid;
      position: absolute;
      width: 100%;
      bottom: 15px;
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      display: flex;
      .px-info{
        border: 1px red solid;
        font-size: 16px;
      }
      div{
        width: 50%;
        text-align: center;
        display: inline-block;
        align-items: baseline;
        i{
          display: inline-block;
          vertical-align: middle;
          width: 18px;
          height: 18px;
          background-size: 100% 100%;
        }
        .address{
          background-image: url('./img/村庄.png');
        }
        .sex {
          background-image: url('./img/男女标.png');
        }
        span{
          margin: 0 5px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .line{
    height: 5px;
    background: #F6F5FA;
  }
  .other{
    flex-grow: 1;
  }
}
</style>
