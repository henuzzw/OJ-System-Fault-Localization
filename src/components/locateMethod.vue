<template>
  <div class="locateMethodSelect">

    <el-tree
        :data="treeData"
        show-checkbox
        node-key="id"
        :default-expanded-keys="['SBFL']"
        :default-checked-keys="['SBFL-Tarantula']"
    />

    <!--  <el-checkbox-group :max="1" :min="1" v-model="checkedMethods">-->
    <!--    <el-checkbox v-for="method in methodsList" :label="method" :key="method"-->
    <!--                 style="display: block; padding-top: 10px;margin-left:10px"> {{method}}<br>-->
    <!--    </el-checkbox>-->
    <!--  </el-checkbox-group>-->
  </div>

</template>

<script>
import {ElTree, ElCheckboxGroup, ElCheckbox, ElButton} from 'element-plus'
import {ref, reactive} from "vue";

export default {
  name: "locateMethod",
  components: {
    ElCheckboxGroup, ElCheckbox, ElButton, ElTree
  },
  setup() {
    let checkedMethods = ref([]);
    let methodsList = ref(["SBFL-Tarantula", "SBFL-Ochiai", "SBFL-Jaccard", "SBFL-SBI", "SBFL-DStar", "SBFL-Tarantula",]);
    let treeData = reactive([
      {
        id: "SBFL",
        label: "SBFL",
        children: [
          {
            id: "SBFL-Tarantula",
            label: "SBFL-Tarantula",
          }, {
            id: "SBFL-Ochiai",
            label: "SBFL-Ochiai",
          }, {
            id: "SBFL-Jaccard",
            label: "SBFL-Jaccard",
          }, {
            id: "SBFL-SBI",
            label: "SBFL-SBI",
          }, {
            id: "SBFL-DStar",
            label: "SBFL-DStar",
          }
        ]
      }, {
        id: "MBFL",
        label: "MBFL",
        children: [
          {
            id: "MBFL-Tarantula",
            label: "MBFL-Tarantula",
          }, {
            id: "MBFL-Ochiai",
            label: "MBFL-Ochiai",
          }, {
            id: "MBFL-Jaccard",
            label: "MBFL-Jaccard",
          }, {
            id: "MBFL-SBI",
            label: "MBFL-SBI",
          }, {
            id: "MBFL-Mutation Score",
            label: "MBFL-Mutation Score",
          },
        ]
      }

    ])
    return {
      checkedMethods,
      methodsList,
      treeData
    }
  }
}
</script>

<style scoped lang="scss">
.locateMethodSelect {
  width: 18%;
  background-color: #28233F;
  text-align: left;
  ::v-deep .el-tree {
    background-color: #28233F;
    color: aliceblue;
    .el-tree-node__content:hover{
      background-color: #2c3e50;
    }
    .el-tree-node:focus>.el-tree-node__content{
      background-color: #2c3e50;
    }
  }


}
</style>
