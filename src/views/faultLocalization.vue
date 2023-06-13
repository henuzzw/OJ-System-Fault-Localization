<template>
  <div class="faultLocallization">

    <div class="myTop">
      <div class="myTitle"> <img width="100%"  src="../assets/title.png"   alt="My Title"></div>
      <div class="myNote"> <span class="water_test">通知：测试版 - 极不稳定 - 可能会崩</span></div>

    </div>
    <div class="main">
      <locate-method></locate-method>
    </div>
  </div>
</template>

<script>
import locateMethod from "../components/locateMethod";
export default {
  name: "faultLocalization",
  components:{locateMethod,}
}
</script>

<style lang="scss">

@keyframes wordsLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

.faultLocallization {
  width: 100%;
  height: 100%;
  .myTop {
    position: relative;
    height: min-content;
    width: 100%;

    .myNote{
      position: absolute;
      left: 90px;
      top: 25%;
      width: 20%;
      overflow: hidden;
      .water_test{
        //margin-top: 9%;
        padding-left: 20px;
        //width: 30%;
        font-size: 17px;
        display: inline-block;
        color: red;
        white-space: nowrap;
        animation: 10s wordsLoop linear infinite normal;
      }
    }
    .myTitle{
      //position: absolute;
      right: 0;
      top: 0;
      margin: 0px;
    }
  }
  .main{
    height: calc(100% - 150px);
    width: 100%;
    background-color: white;
  }
}
</style>
