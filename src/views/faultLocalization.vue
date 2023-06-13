<template>
  <div class="faultLocallization">

    <div class="myTop">
      <div class="myTitle"> <img width="100%"  src="../assets/title.png"   alt="My Title"></div>
      <div class="myNote"> <span class="water_test">通知：测试版 - 极不稳定 - 可能会崩</span></div>

    </div>
    <div class="main">
      <locate-method></locate-method>
      <code-view></code-view>
      <comments></comments>
    </div>
  </div>
</template>

<script>
import locateMethod from "../components/locateMethod";
import codeView from "../components/codeView";
import comments from "../components/comments";
export default {
  name: "faultLocalization",
  components:{locateMethod,codeView,comments}
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
  height: 100vh;
  display: flex;
  flex-direction: column;
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
    //height: max-content;
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    //background-color: white;
    display: flex;
  }
}
</style>
