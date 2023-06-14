<template>
  <div class="codeView">
<!--    <codemirror-demo></codemirror-demo>-->

    <div class="confirmButton">
      <el-button type="primary">错误定位</el-button>
      <el-button type="Info">提交代码</el-button>
    </div>
  </div>
</template>

<script>
import { Codemirror } from 'vue-codemirror';
import {ElTree,ElCheckboxGroup,ElCheckbox ,ElButton} from 'element-plus'
import {ref, reactive} from "vue";


// import base style
import 'codemirror/lib/codemirror.css'
// import language js
import 'codemirror/mode/javascript/javascript.js'
// import theme style
import 'codemirror/theme/base16-dark.css'
// import more 'codemirror/some-resource...'
import codemirrorDemo from "./codemirrorDemo";

export default {
  name: "codeView",
  components: {
    codemirrorDemo, ElCheckboxGroup,ElCheckbox,ElButton,ElTree
  },
  setup() {

  }
}
</script>

<style scoped lang="scss">
.codeView {
  margin: 0 10px;
  width: 60%;
  position: relative;

  background-color: aliceblue;
  .confirmButton{
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>
