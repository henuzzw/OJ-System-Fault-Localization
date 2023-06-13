<template>
<div class="locateMethodSelect">
  <el-checkbox-group v-model="checkedMethods">
    <el-checkbox v-for="method in methodsList" :label="method" :key="method"
                 style="display: block; padding-top: 10px;margin-left:10px"> {{method}}<br>
    </el-checkbox>
  </el-checkbox-group>
</div>

</template>

<script>
import {ElCheckboxGroup,ElCheckbox } from 'element-plus'
import {ref, reactive} from "vue";

export default {
  name: "locateMethod",
  components:{
    ElCheckboxGroup,ElCheckbox
  },
  setup(){
    let checkedMethods = ref([]);
    let methodsList = ref(["MBFL-"]);



    return {
      checkedMethods,
      methodsList
    }
  }
}
</script>

<style lang="scss">
.locateMethodSelect{


}
</style>
