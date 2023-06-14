<template>
  <div class="codeView">
    <codemirror-demo></codemirror-demo>

    <div class="confirmButton">
      <el-button type="primary">错误定位</el-button>
      <el-button type="Info">提交代码</el-button>
    </div>
  </div>
</template>

<script>
import {ElTree,ElCheckboxGroup,ElCheckbox ,ElButton} from 'element-plus'
import {ref, reactive} from "vue";

import codemirrorDemo from "./codemirrorDemo";

export default {
  name: "codeView",
  components: {
    codemirrorDemo, ElCheckboxGroup,ElCheckbox,ElButton,ElTree
  }
}
</script>

<style scoped lang="scss">
.codeView {
  margin: 0 10px;
  width: 60%;
  position: relative;
  display: flex;

  background-color: aliceblue;
  .confirmButton{
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
