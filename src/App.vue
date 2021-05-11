<template>
  <div id="app">
    <footerGuide v-show="$route.meta.showFooter"></footerGuide>
    <router-view></router-view>
  </div>
</template>

<script>
  import footerGuide from './components/FooterGuide/FooterGuide';
  export default {
    components: {
      footerGuide,
    },
  };
</script>

<style lang="stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
