<template>
  <div id="app">
    <transition name='component-fade' mode='out-in'>
      <component v-bind:is="view"></component>
    </transition>
    <!-- <div id="app" v-on:click="view= 'v-b'">
    <transition name='component-fade' mode='out-in'>
    <component v-bind:is="view"></component>
  </transition> -->
  <link rel="stylesheet" href="./src/assets/fonts/font-awesome/css/font-awesome.min.css">
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {view: 'v-a'}
  },
  components: {
    'v-a': {
      template: '<load></load>'
    },
    'v-b': {
      template: '<home></home>'
    }
  },
  methods: {
    displayHome: function() {
      const self = this;
      setInterval(function() {
        self.view = 'v-b';
      }, 1000);
    }
  },
  mounted: function() {
    this.displayHome();
  }
}
</script>

<style lang="sass">
  @import 'style.sass'

  .component-fade-enter-active, .component-fade-leave-active
    transition: opacity 1s ease

  .component-fade-enter, .component-fade-leave-to
    opacity: 0
</style>
