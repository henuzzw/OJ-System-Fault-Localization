<template>
  <div class="codeView">
    <codemirror-demo></codemirror-demo>
  </div>
</template>

<script>
import { Codemirror } from 'vue-codemirror';


// import base style
import 'codemirror/lib/codemirror.css'
// import language js
import 'codemirror/mode/javascript/javascript.js'
// import theme style
import 'codemirror/theme/base16-dark.css'
// import more 'codemirror/some-resource...'
import codemirrorDemo from "./codemirrorDemo";
import {ref} from 'vue'

export default {
  name: "codeView",
  components: {
    codemirrorDemo
  },
  setup() {

  }
}
</script>

<style scoped lang="scss">
.codeView {
  margin: 0 10px;
  width: 60%;

  background-color: aliceblue;
}
</style>
