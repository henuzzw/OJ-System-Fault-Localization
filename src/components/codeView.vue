<template>
  <div class="codeView">
    <codemirror-demo></codemirror-demo>


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
  margin: 0 1px;
  width: 64%;

  display: flex;

  background-color: aliceblue;

}
</style>
