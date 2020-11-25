<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 20px;
  margin: 0px;
  width:100%;
  /* background: #01051B; */
  box-sizing: border-box;
  height: 100%;
  padding: 0;
}
body,html{
  margin: 0px;
  width:100%;
  height: 100%;
  /* padding-bottom: 20px; */
  /* box-sizing: border-box; */
}
span{
  text-overflow:ellipsis;
white-space: nowrap
}
</style>
  