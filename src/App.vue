<template>
  <div id="app" v-on:click="view= 'v-b'">
    <transition name='component-fade' mode='out-in'>
      <component v-bind:is="view"></component>
    </transition>
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
      template: '<terminal></terminal>'
    },
    'v-b': {
      template: '<home></home>'
    }
  }
}
</script>

<style lang="sass">

body
  background-color: black

.component-fade-enter-active, .component-fade-leave-active
  transition: opacity 1s ease

.component-fade-enter, .component-fade-leave-to
  opacity: 0
</style>
