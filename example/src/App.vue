<template>
  <div id="app">
    <img alt="Vue logo" src="assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import utils from "@/index";


@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  mounted() {
    console.log(123);
    console.log("utils.isArray([]) is array is:", utils.isArray([]));
    console.log("utils.isArray('') is array is:", utils.isArray(""));
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
