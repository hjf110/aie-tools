<template>
  <div id="app"></div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import tools from "../../lib/index.esm.js";

tools.setStoreLocal("qq", '11111111');
let a = tools.getStoreLocal('qq');
 console.log(
  '%c ***',
  'color:#ffffff;font-size:20px;background:red',
  a
  )
export default class App extends Vue {}
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
