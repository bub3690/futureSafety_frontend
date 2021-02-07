<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="aside"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
    <router-view/>
    <spinner :loading="LoadingStatus"></spinner>
  </div>
</template>
<script>
import bus from './utils/bus.js'
import Spinner from './components/Spinner.vue'
export default{
  components:{
    Spinner,
  },
  data(){
    return{
      LoadingStatus:false,
    };
  },
  methods:{
    startSpinner(){
      this.LoadingStatus = true;
    },
    endSpinner(){
      this.LoadingStatus = false;
    }
  },
  created(){
    //console.log(process.env)
    bus.$on('start:spinner',this.startSpinner);
    bus.$on('end:spinner',this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner',this.startSpinner);
    bus.$off('end:spinner',this.endSpinner);
  }
}
</script>
<style>
@import "./styles/index.css";

</style>
