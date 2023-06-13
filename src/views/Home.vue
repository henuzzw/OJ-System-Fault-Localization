<template>
  <div class="home">
    <img src="../assets/stat.png" @click="butclic" alt="My Image">
  </div>
</template>

<script>
// @ is an alias to /src
// import  './src/assets/stat.png' as pic
import axios from 'axios';
import {ElButton} from 'element-plus';
import {reactive} from "vue";
import 'element-plus/dist/index.css'
import {useRoute,useRouter} from 'vue-router'
export default {
  name: 'Home',
  components: {
    ElButton
  },
  setup(){
    const router = useRouter();
    let butclic=reactive(()=>{
      router.push("/faultLocalization");
    })
    let butclic2=reactive(()=>{
      console.log("test44")
    })
    return{
      butclic,
      butclic2
    }
  }
}
</script>
<style lang="scss">
.home{
  width: 100vw;
  height: 100vh;

}


</style>
