<template>
  <div class="comments">
    <div class="comment">
      <p style="color: aliceblue; font-size: 60px">
        别 <br/>的<br/>功<br/>能<br/>，<br/>还<br/>没<br/>想<br/>好
      </p>
    </div>
    <div class="confirmButton">
      <el-button type="primary">错误定位</el-button>
      <el-button type="Info">提交代码</el-button>
    </div>
  </div>
</template>

<script>
import {ElButton} from "element-plus";

export default {
  name: "comments",
  components:{
    ElButton
  }
}
</script>

<style scoped lang="scss">
.comments{
  width: 18%;
  background-color: #28233F;
  flex-grow: 1;
  position: relative;
  .comment{
    border: 2px solid white;
    margin: 2px;
    position: absolute;
    width: 300px;
    left: calc(50% - 150px);
  }
  .confirmButton{
    position: absolute;
    bottom: 120px;
    left: calc(50% - 90px);
  }
}
</style>
