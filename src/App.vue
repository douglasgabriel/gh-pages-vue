<template>
  <div id="app">
    <router-view/>

    <img id="wip-image" :src="wipImage" alt="" width="100px">

    <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
  </div>
</template>

<script>
import WipImage from '@/assets/images/wip.png'

export default {
  name: 'App',
  computed: {
    wipImage () { return WipImage }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/main.scss';

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#wip-image {
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px;
}
</style>
